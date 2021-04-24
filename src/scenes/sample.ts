import { Enemy } from "../enemy";
import { Tower } from "../towers";
import { Bullet } from "../bullet";
import { WaveManager } from "../waves"
import { Terrain } from "../terrain";
import { TDSceneConfig } from "./tdSceneConfig";
import { MetaScene } from "./MetaScene";

var BULLET_DAMAGE = 10;

export class TDScene extends Phaser.Scene {
    path: Phaser.Curves.Path
    enemies: Phaser.Physics.Arcade.Group
    nextEnemy: number = 0
    metaScene: MetaScene

    towers: Phaser.GameObjects.Group

    bullets: Phaser.Physics.Arcade.Group

    terrain: Terrain

    waveManager: WaveManager
    moneyText: Phaser.GameObjects.Text
    sceneNumber: number

    constructor(config: TDSceneConfig, metaScene: MetaScene) {
        super({
            active: false,
            visible: false,
            key: `tdScene${config.sceneNumber}`,
        });

        this.terrain = config.terrain;
        this.metaScene = metaScene;
        this.sceneNumber = config.sceneNumber;
    }


    public create() {
        // this graphics element is only for visualization,
        // its not related to our path
        var graphics = this.add.graphics();

        this.terrain.create()
        this.terrain.draw(graphics)

        this.enemies = this.physics.add.group({ classType: Enemy, runChildUpdate: true });

        this.towers = this.add.group({ classType: Tower, runChildUpdate: true });
        this.input.on('pointerdown', this.placeTower, this);

        this.bullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });
        this.physics.add.overlap(this.enemies, this.bullets, this.damageEnemy);

        this.moneyText = this.add.text(400, 16, 'Money: 0', { fontSize: '32px' });
        this.waveManager = new WaveManager(this);

    }

    public placeTower(pointer) {
        var i = Math.floor(pointer.x / 64);
        var j = Math.floor(pointer.y / 64);

        if (this.terrain.canPlaceTower(i, j)) {
            var tower = this.towers.get();
            if (tower) {
                tower.setActive(true);
                tower.setVisible(true);
                tower.place(i, j, this.terrain);
            }
        }

        let newSceneIndex = this.metaScene.addScene()
        this.metaScene.switchToScene(newSceneIndex)
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
            console.log(`Update ${this.sceneNumber}`)
        }
    }

    addBullet(x, y, angle) {
        var bullet = this.bullets.get();
        if (bullet) {
            bullet.fire(x, y, angle);
        }
    }
}