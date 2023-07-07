// import { GridPosition, Position, Terrain } from "./terrain";
import { TDScene } from "./scenes/tdScene";
import { PlayerInfo } from "./playerInfo";
import * as cfg from "./config";
import { HudScene } from "./scenes/hudScene";
import { MetaScene } from "./scenes/metaScene";
import {Math as PMath} from 'phaser';


export abstract class EnemyBase extends Phaser.GameObjects.Sprite {
    stats: cfg.EnemyConfig;
    config: cfg.EnemyConfig;  // On spawn, stats are copied from config

    follower: any
    hp: integer
    yOffset: number = PMath.RND.integerInRange(-20, 20);
    xOffset: number = PMath.RND.integerInRange(-20, 20);
    scene: TDScene // type assertion
    speedModifier: number = 1;


    constructor(scene: TDScene, stats) {
        super(scene, 0, 0, stats.spriteName);

        this.config = stats
        this.stats = {...stats}  // shallow copy, idk how to do deep copy
        this.follower = { t: 0, vec: new PMath.Vector2() };

        this.setInteractive();
        this.on('pointerover', () => {
            if (this.scene.input.enabled)
                (this.scene.scene.get<HudScene>('hudScene') as HudScene).setDescriptionEnemy(this);
        });
    }

    update(_, delta) {
        delta *= PlayerInfo.timeScale * ( + !PlayerInfo.isPaused);
        // move the t point along the path, 0 is the start and 1 is the end
        this.follower.t += this.stats.speed * this.speedModifier * delta;

        // get the new x and y coordinates in vec
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);

        if (this.follower.vec.x > this.x - this.xOffset) {
            this.flipX = false
        }
        if (this.follower.vec.x < this.x - this.xOffset) {
            this.flipX = true
        }

        // update enemy x and y to the newly obtained x and y
        this.setPosition(this.follower.vec.x + this.xOffset, this.follower.vec.y + this.yOffset);

        // if we have reached the end of the path, remove the enemy
        if (this.follower.t >= 1) {
            this.reachEnd()
        }

        this.alpha = 1
        this.angle = 0
        this.scale = 1
    }

    reachEnd() {
        this.scene.waveManager.remainingDanger += this.stats.danger;
        this.setActive(false);
        this.setVisible(false);
        if (this.scene.sceneLevel === 0) {
            const hudScene = this.scene.scene.get<HudScene>("hudScene") as HudScene

            PlayerInfo.hp -= this.stats.damage;
            hudScene.hpRedness = 1

            const metaScene = this.scene.scene.get<MetaScene>("metaScene") as MetaScene
            metaScene.getActiveScene().cameras.main.shake(200, 0.005)
            this.scene.metaScene.soundManager.damageSound.play();

            this.scene.waveManager.respawn(this.stats, this.hp);
        }

        if (this.scene.enemyEndCallback) {
            this.scene.enemyEndCallback(this.stats.damage)
        }
    }

    startOnPath(wave, respawnHealth, start_t = 0) {
        // set the t parameter at the start of the path
        this.follower.t = start_t;

        this.stats = {...this.config};
        this.speedModifier = 1;

        if (respawnHealth > 0)
            this.hp = respawnHealth;
        else
            this.hp = this.stats.hp(wave);

        this.tint = this.stats.tint;

        // get x and y of the given t point
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);

        // set the x and y of our enemy to the received from the previous step
        this.setPosition(this.follower.vec.x, this.follower.vec.y);

        let frameRate = Math.min(60, this.stats.speed * 40000 * 15)
        if (this.stats.spriteName === "fatEnemy" || this.stats.spriteName === "splitterFatEnemy") { // hack
            frameRate *= 0.5
        }

        this.anims.play({
            key: `${this.stats.spriteName}_walk`,
            frameRate: frameRate
        });
    }

    receiveDamage(damage: integer) {
        this.hp -= damage - this.stats.armour(this.scene.waveManager.currentWave);

        // if hp drops below 0 we deactivate this enemy
        if (this.hp <= 0) {
            this.setActive(false);
            // this.setVisible(false);
            this.onDeath()
        }
    }

    onDeath() {
        this.onDeathAbility();
        if (this.stats.split)
            this.onDeathSplit()

        if (this.scene.sceneLevel === 0) {  // Add gold in base layer only
            this.scene.waveManager.deadDanger += this.stats.danger
            PlayerInfo.money += this.stats.money;
        }

        this.scene.tweens.add({
            targets: this,
            alpha: 0,
            angle: PlayerInfo.RNG.sign() * 180,
            scale: 0.5,
            duration: PlayerInfo.RNG.integerInRange(600, 800),
            ease: 'Power2'
        });
        this.scene.metaScene.enemiesSlain++;
    }

    onDeathSplit() {
        for(let i = 0; i < this.stats.split.amount; i++) {
            let newEnemy = this.scene.allEnemies[this.stats.split.cfg.name].get()
            newEnemy.setVisible(true);
            newEnemy.setActive(true);

            this.scene.waveManager.deadDanger -= this.stats.split.cfg.danger;
            newEnemy.startOnPath(this.scene.waveManager.currentWave, 0, this.follower.t);
        }
    }

    onDeathAbility() {  // override this for special on-death abilities
    }
}

export class WeakEnemy extends EnemyBase {
    constructor(scene: TDScene) {
        super(scene, cfg.Weak)
    }
}

export class FatEnemy extends EnemyBase {
    constructor(scene: TDScene) {
        super(scene, cfg.Fat)
    }
}

export class ArmouredEnemy extends EnemyBase {
    constructor(scene: TDScene) {
        super(scene, cfg.Armoured)
    }
}

export class FastEnemy extends EnemyBase {
    constructor(scene: TDScene) {
        super(scene, cfg.Fast)
    }
}

export class SplitterBigEnemy extends EnemyBase {
    constructor(scene: TDScene) {
        super(scene, cfg.SplitterBig)
    }
}

export class SplitterSmallEnemy extends EnemyBase {
    constructor(scene: TDScene) {
        super(scene, cfg.SplitterSmall)
    }
}

export class SplitterFatEnemy extends EnemyBase {
    constructor(scene: TDScene) {
        super(scene, cfg.SplitterFat)
    }
}
