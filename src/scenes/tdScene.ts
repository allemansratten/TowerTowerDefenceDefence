import * as enem from "../enemy";
import { Tower } from "../towers";
import { Bullet } from "../bullet";
import { WaveManager } from "../waves"
import { TowerManager } from "../towerManager"
import { MAX_HEIGHT, MAX_WIDTH, Terrain, TILE_SIZE } from "../terrain";
import { TDSceneConfig } from "./tdSceneConfig";
import { MetaScene } from "./MetaScene";
import { HUD_WIDTH } from "./hudScene";
import { UUID } from "../utils/guid";
import { HealthBar } from "../healthBar";
import { PlayerInfo } from "../playerInfo";

export const SCENE_TRANSITION_MS = 500
export const TD_SCENE_WIDTH = MAX_WIDTH * TILE_SIZE
export const TD_SCENE_HEIGHT = MAX_HEIGHT * TILE_SIZE

export class TDScene extends Phaser.Scene {
    path: Phaser.Curves.Path
    allEnemies: { [key: string]: Phaser.Physics.Arcade.Group } = {}
    nextEnemy: number = 0
    metaScene: MetaScene

    towers: Phaser.GameObjects.Group
    bullets: Phaser.Physics.Arcade.Group

    terrain: Terrain

    waveManager: WaveManager
    towerManager: TowerManager

    sceneParent: TDScene;
    sceneLevel: number; // Level of recursion

    private towerParent: Tower  // to what tower does this scene correspond? undefined for root
    private endHealthBar: HealthBar

    // happens when an enemy reaches the end
    enemyEndCallback: (number) => void

    constructor(config: TDSceneConfig, metaScene: MetaScene) {
        super({
            active: false,
            visible: false,
            key: `tdScene${UUID.uuidv4()}`,
        });

        this.terrain = config.terrain;
        this.metaScene = metaScene;

        this.sceneLevel = config.sceneLevel;
        this.sceneParent = config.sceneParent;
    }

    public create() {
        // this graphics element is only for visualization,
        // its not related to our path
        var graphics = this.add.graphics();

        this.terrain.create(this)
        this.terrain.draw(graphics)

        // the path for our enemies
        // parameters are the start x and y of our path
        this.waveManager = new WaveManager(this);
        this.towerManager = new TowerManager(this);

        for (let enemyType of [enem.BasicEnemy, enem.FatEnemy, enem.ArmouredEnemy]) {
            this.allEnemies[enemyType.name] = this.physics.add.group({ classType: enemyType, runChildUpdate: true });
        }

        this.towers = this.add.group({ classType: Tower, runChildUpdate: true });

        this.input.on('pointerdown', this.onClick, this);

        this.bullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });
        for (let eName in this.allEnemies) {
            this.physics.add.overlap(this.allEnemies[eName], this.bullets, this.damageEnemy);
        }

        this.waveManager = new WaveManager(this);

        const cam = this.cameras.main
        cam.scrollX = -HUD_WIDTH
    }

    // Only foreground scene has input enabled & is visible; all scenes are being updated
    public setIsForeground(isForegroundScene, goingInside: boolean, i = null, j = null) {
        this.input.enabled = isForegroundScene;

        if (!isForegroundScene) {
            this.fadeOut(goingInside, i, j)
        } else {
            this.fadeIn(goingInside, i, j)
        }
    }

    public fadeIn(goingInside: boolean, i, j) {
        this.cameras.main.pan(this.terrain.w * TILE_SIZE / 2, this.terrain.h * TILE_SIZE / 2, 1)
        this.cameras.main.setZoom((goingInside ? 1 / 3 : 3))

        this.cameras.main.fadeIn(SCENE_TRANSITION_MS, 0, 0, 0)
        this.cameras.main.zoomTo(1, SCENE_TRANSITION_MS, "Linear")
    }

    public fadeOut(goingInside: boolean, i, j) {
        // Take a screenshot
        this.game.renderer.snapshotArea(
            -this.cameras.main.scrollX,
            -this.cameras.main.scrollY,
            TD_SCENE_WIDTH,
            TD_SCENE_HEIGHT,
            (image: HTMLImageElement) => {
                const snapKey = `snap-${this.scene.key}`
                if (this.textures.exists(snapKey)) {
                    this.textures.remove(snapKey);
                }
                this.textures.addImage(snapKey, image);

                // debugging: show the screenshot
                // document.body.appendChild(image)
            }
        )

        this.cameras.main.fadeOut(SCENE_TRANSITION_MS, 0, 0, 0)
        if (goingInside) {
            let [x, y] = this.terrain.fromGridPos(i, j)
            this.cameras.main.zoomTo(3, SCENE_TRANSITION_MS, "Linear")
            this.cameras.main.pan(x, y, SCENE_TRANSITION_MS, "Linear")
        } else {
            this.cameras.main.zoomTo(1 / 3, SCENE_TRANSITION_MS, "Linear")
        }
    }

    damageEnemy(enemy, bullet) {
        // only if both enemy and bullet are alive
        if (enemy.active === true && bullet.active === true) {
            // we remove the bullet right away
            bullet.hit()

            // decrease the enemy hp with bullet damage
            enemy.receiveDamage(bullet.damage);
        }
    }

    frameNumber = 0;
    update(_, delta) {
        delta *= PlayerInfo.timeScale;
        
        this.frameNumber++;
        this.waveManager.update(delta)

        if (this.frameNumber % 60 == 0) {
            // console.log(`Update th: ${this.scene.key} e: ${this.input.enabled} | l: ${this.sceneLevel} | p: ${this.sceneParent?.scene.key}`)
        }
        if (this.endHealthBar) {
            this.endHealthBar.health = this.towerParent.healthBar.health
            this.endHealthBar.update(delta)
        }
    }

    addBullet(x, y, angle, damage) {
        var bullet = this.bullets.get();
        if (bullet) {
            bullet.fire(x, y, angle, damage);
        }
    }

    toGridPos(x, y) {
        let i = Math.floor((x + this.cameras.main.scrollX) / TILE_SIZE);
        let j = Math.floor((y + this.cameras.main.scrollY) / TILE_SIZE);
        return [i, j]
    }

    onClick(pointer: Phaser.Input.Pointer) {
        const [i, j] = this.toGridPos(pointer.x, pointer.y)

        let potentialExistingTower = this.terrain.tryGetExistingTower(i, j);
        if (potentialExistingTower) {
            this.metaScene.switchToScene(potentialExistingTower.innerTowerScene, true, i, j)
        }
    }

    onEnemyReachedEnd(callback) {
        this.enemyEndCallback = callback
    }

    setTowerParent(parent: Tower) {
        this.towerParent = parent
        this.endHealthBar = new HealthBar(this)

        let [i, j] = this.terrain.pathTiles[this.terrain.pathTiles.length - 1]
        let [x, y] = this.terrain.fromGridPos(i, j)

        this.endHealthBar.make(x, y, TILE_SIZE - 14, 0.5)
        this.add.container(0, 0, this.endHealthBar)
    }
}