// import { GridPosition, Position, Terrain } from "./terrain";
import { TDScene } from "./scenes/tdScene";
import { PlayerInfo } from "./playerInfo";
import { EnemyConfig } from "./config";
import { HudScene } from "./scenes/hudScene";
import { MetaScene } from "./scenes/MetaScene";


abstract class EnemyBase extends Phaser.GameObjects.Image {
    stats: any;  // { [key:string]: any }

    follower: any
    hp: integer
    yOffset: number = Phaser.Math.RND.integerInRange(-20, 20);
    xOffset: number = Phaser.Math.RND.integerInRange(-20, 20);
    scene: TDScene // type assertion
    speed: number;


    constructor(scene: TDScene, stats) {
        super(scene, 0, 0, stats.spriteName);

        this.stats = stats;
        this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
    }

    update(_, delta) {
        delta *= PlayerInfo.timeScale;
        // move the t point along the path, 0 is the start and 1 is the end
        this.follower.t += this.speed * delta;

        // get the new x and y coordinates in vec
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);

        // update enemy x and y to the newly obtained x and y
        this.setPosition(this.follower.vec.x + this.xOffset, this.follower.vec.y + this.yOffset);

        // if we have reached the end of the path, remove the enemy
        if (this.follower.t >= 1) {
            this.reachEnd()
        }
    }

    reachEnd() {
        this.scene.waveManager.remainingDanger += this.stats.danger;
        this.setActive(false);
        this.setVisible(false);
        if (this.scene.sceneLevel === 0) {
            const hudScene = this.scene.scene.get("hudScene") as HudScene

            PlayerInfo.hp -= this.stats.damage;
            hudScene.hpRedness = 1

            const metaScene = this.scene.scene.get("metaScene") as MetaScene
            metaScene.getActiveScene().cameras.main.shake(200, 0.005)
        }

        if (this.scene.enemyEndCallback) {
            this.scene.enemyEndCallback()
        }
    }

    startOnPath() {
        // set the t parameter at the start of the path
        this.follower.t = 0;

        this.hp = this.stats.hp;
        this.speed = this.stats.speed;
        this.tint = this.stats.tint;

        // get x and y of the given t point
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);

        // set the x and y of our enemy to the received from the previous step
        this.setPosition(this.follower.vec.x, this.follower.vec.y);
    }

    receiveDamage(damage: integer) {
        this.hp -= damage - this.stats.armor;

        // if hp drops below 0 we deactivate this enemy
        if (this.hp <= 0) {
            this.setActive(false);
            this.setVisible(false);
            this.onDeath()
        }
    }

    onDeath() {  // override this for special on-death abilities
        if (this.scene.sceneLevel === 0) {  // Add gold in base layer only
            this.scene.waveManager.deadDanger += this.stats.danger
            PlayerInfo.money += this.stats.money;
        }
    }
}

export class BasicEnemy extends EnemyBase {
    static stats = EnemyConfig.Basic

    constructor(scene: TDScene) {
        super(scene, BasicEnemy.stats)
    }
}

export class FatEnemy extends EnemyBase {
    static stats = EnemyConfig.Fat

    constructor(scene: TDScene) {
        super(scene, FatEnemy.stats)
    }
}

export class ArmouredEnemy extends EnemyBase {
    static stats = EnemyConfig.Armoured

    constructor(scene: TDScene) {
        super(scene, ArmouredEnemy.stats)
    }
}
