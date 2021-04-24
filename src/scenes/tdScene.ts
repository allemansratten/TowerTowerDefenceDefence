import { Enemy } from "../enemy";
import { TowerTurret, NewTower } from "../towers";
import { Bullet } from "../bullet";
import { WaveManager } from "../waves"
import { TowerManager } from "../towerManager"
import { Terrain, TILE_SIZE } from "../terrain";
import { TDSceneConfig } from "./tdSceneConfig";
import { MetaScene } from "./MetaScene";
import { HUD_WIDTH } from "./hudScene";

var BULLET_DAMAGE = 10;

export class TDScene extends Phaser.Scene {
    path: Phaser.Curves.Path
    enemies: Phaser.Physics.Arcade.Group
    nextEnemy: number = 0
    metaScene: MetaScene

    towers: Phaser.GameObjects.Group
    newTowers: Phaser.GameObjects.Group

    bullets: Phaser.Physics.Arcade.Group

    terrain: Terrain

    waveManager: WaveManager
    towerManager: TowerManager
    moneyText: Phaser.GameObjects.Text
    waveText: Phaser.GameObjects.Text

    sceneNumber: number
    sceneNumberParent: number
    sceneLevel: number; // Level of recursion

    constructor(config: TDSceneConfig, metaScene: MetaScene) {
        super({
            active: false,
            visible: false,
            key: `tdScene${config.sceneNumber}`,
        });

        this.terrain = config.terrain;
        this.metaScene = metaScene;

        this.sceneNumber = config.sceneNumber;
        this.sceneNumberParent = config.sceneNumberParent;
        this.sceneLevel = config.sceneLevel;
    }

    public preload() {
        // preloading belongs in metaScene
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

        this.enemies = this.physics.add.group({ classType: Enemy, runChildUpdate: true });

        this.towers = this.add.group({ classType: TowerTurret, runChildUpdate: true });
        this.newTowers = this.add.group({ classType: NewTower, runChildUpdate: true });
        this.input.on('pointerdown', this.onClick, this);

        this.bullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });
        this.physics.add.overlap(this.enemies, this.bullets, this.damageEnemy);

        this.moneyText = this.add.text(400, 16, 'Money: 0', { fontSize: '32px' });
        this.waveText = this.add.text(400, 50, 'Wave: 1', { fontSize: '32px' });

        this.waveManager = new WaveManager(this);

        const cam = this.cameras.main
        cam.scrollX = -HUD_WIDTH
    }

    // Only foreground scene has input enabled & is visible; all scenes are being updated
    public setIsForeground(isForegroundScene) {
        this.input.enabled = isForegroundScene;
        this.scene.setVisible(isForegroundScene);
    }


    damageEnemy(enemy, bullet) {
        // only if both enemy and bullet are alive
        if (enemy.active === true && bullet.active === true) {
            // we remove the bullet right away
            bullet.setActive(false);
            bullet.setVisible(false);

            // decrease the enemy hp with BULLET_DAMAGE
            enemy.receiveDamage(BULLET_DAMAGE);
        }
    }

    frameNumber = 0;
    update(time, delta) {
        this.frameNumber++;
        this.waveManager.update(time, delta)

        if(this.frameNumber % 60 == 0) {
            console.log(`Update ${this.sceneNumber} | l: ${this.sceneLevel} | p: ${this.sceneNumberParent}`)
        }
    }

    addBullet(x, y, angle) {
        var bullet = this.bullets.get();
        if (bullet) {
            bullet.fire(x, y, angle);
        }
    }

    toGridPos(x, y) {
        let i = Math.floor((x + this.cameras.main.scrollX) / TILE_SIZE);
        let j = Math.floor((y + this.cameras.main.scrollY) / TILE_SIZE);
        return [i, j]
    }

    onClick(pointer: Phaser.Input.Pointer) {
        let [i, j] = this.toGridPos(pointer.x, pointer.y)
        if (this.terrain.inBounds(i, j)) {
            // todo: go deeper!
            // console.log(this.newTowers.getChildren())
        }
    }
}