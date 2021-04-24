import { Enemy } from "../enemy";
import { TowerTurret, NewTower } from "../towers";
import { Bullet } from "../bullet";
import { WaveManager } from "../waves"
import { TowerManager } from "../towerManager"
import { Terrain } from "../terrain";
import { TDSceneConfig } from "./tdSceneConfig";

var BULLET_DAMAGE = 10;

export class TDScene extends Phaser.Scene {
    path: Phaser.Curves.Path
    enemies: Phaser.Physics.Arcade.Group
    nextEnemy: number = 0

    towers: Phaser.GameObjects.Group
    newTowers: Phaser.GameObjects.Group

    bullets: Phaser.Physics.Arcade.Group

    terrain: Terrain

    waveManager: WaveManager
    towerManager: TowerManager
    moneyText: Phaser.GameObjects.Text
    waveText: Phaser.GameObjects.Text

    constructor(config: TDSceneConfig) {
        super({
            active: false,
            visible: false,
            key: `tdScene${config.sceneNumber}`,
        });

        this.terrain = config.terrain;
    }

    public preload() {
        // load the game assets
        this.load.image('bomb', '../../assets/bomb.png');
        this.load.image('star', '../../assets/star.png');
        this.load.image('towerbase', '../../assets/towerbase.png');
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
        this.input.on('pointerdown', this.towerManager.placeTower, this.towerManager);

        this.bullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });
        this.physics.add.overlap(this.enemies, this.bullets, this.damageEnemy);

        this.moneyText = this.add.text(400, 16, 'Money: 0', { fontSize: '32px' });
        this.waveText = this.add.text(400, 50, 'Wave: 1', { fontSize: '32px' });
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

    update(time, delta) {
        this.waveManager.update(time, delta)
    }

    addBullet(x, y, angle) {
        var bullet = this.bullets.get();
        if (bullet) {
            bullet.fire(x, y, angle);
        }
    }
}