import { Enemy } from "../enemy";
import { Tower } from "../towers";
import { Bullet } from "../bullet";
import { Terrain } from "../terrain";

var BULLET_DAMAGE = 10;

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Sample',
};

export class SampleScene extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    path: Phaser.Curves.Path
    enemies: Phaser.Physics.Arcade.Group
    nextEnemy: number = 0

    towers: Phaser.GameObjects.Group

    bullets: Phaser.Physics.Arcade.Group

    terrain: Terrain

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        // load the game assets
        this.load.image('bomb', '../../assets/bomb.png');
        this.load.image('star', '../../assets/star.png');
    }

    public create() {
        // this graphics element is only for visualization,
        // its not related to our path
        var graphics = this.add.graphics();

        this.terrain = new Terrain(this, 10)
        this.terrain.draw(graphics)

        // the path for our enemies
        // parameters are the start x and y of our path
        
        
        this.enemies = this.physics.add.group({ classType: Enemy, runChildUpdate: true });

        this.towers = this.add.group({ classType: Tower, runChildUpdate: true });
        this.input.on('pointerdown', this.placeTower, this);

        this.bullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });
        this.physics.add.overlap(this.enemies, this.bullets, this.damageEnemy);
    }

    public placeTower(pointer) {
        var i = Math.floor(pointer.y / 64);
        var j = Math.floor(pointer.x / 64);

        if (this.terrain.canPlaceTower(i, j)) {
            var tower = this.towers.get();
            if (tower) {
                tower.setActive(true);
                tower.setVisible(true);
                tower.place(i, j, this.terrain);
            }
        }
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
        if (time > this.nextEnemy) {
            var enemy = this.enemies.get();
            if (enemy) {
                enemy.setActive(true);
                enemy.setVisible(true);

                // place the enemy at the start of the path
                enemy.startOnPath(this);

                this.nextEnemy = time + 2000;
            }
        }
    }


    addBullet(x, y, angle) {
        var bullet = this.bullets.get();
        if (bullet) {
            bullet.fire(x, y, angle);
        }
    }
}