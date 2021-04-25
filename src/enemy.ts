// import { GridPosition, Position, Terrain } from "./terrain";

import { TDScene } from "./scenes/tdScene";
import { PlayerInfo } from "./player" ;
import { EnemyConfig } from "./config";

// export abstract class Enemy {
//     gridPos: GridPosition  // position in grid coordinates
//     pos: Position // fine position - can be within tiles

//     // move enemy, return true if end reached
//     abstract step(terrain: Terrain): boolean;
// }

// export class BasicEnemy extends Enemy {
//     step(terrain: Terrain): boolean {
//         return false
//     }
// }


export class Enemy extends Phaser.GameObjects.Image {
    static stats = EnemyConfig.Basic;

    follower: any
    hp: integer = Enemy.stats.hp;
    yOffset: number = Phaser.Math.RND.integerInRange(-20, 20);
    xOffset: number = Phaser.Math.RND.integerInRange(-20, 20);
    scene: TDScene // type assertion
    speed: number;


    constructor(scene) {
        super(scene, 0, 0, Enemy.stats.spriteName);

        this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
    }
    update(time, delta) {
        // move the t point along the path, 0 is the start and 1 is the end
        this.follower.t += this.speed * delta;

        // get the new x and y coordinates in vec
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);

        // update enemy x and y to the newly obtained x and y
        this.setPosition(this.follower.vec.x + this.xOffset, this.follower.vec.y + this.yOffset);

        // if we have reached the end of the path, remove the enemy
        if (this.follower.t >= 1) {
            this.scene.waveManager.spawnedEnemies--;
            this.setActive(false);
            this.setVisible(false);
            if (this.scene.sceneLevel === 0)
                PlayerInfo.hp -= Enemy.stats.damage;
        }
    }

    startOnPath(speed, hp) {
        // set the t parameter at the start of the path
        this.follower.t = 0;

        this.hp = Enemy.stats.hp;
        this.speed = Enemy.stats.speed;

        // get x and y of the given t point
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);

        // set the x and y of our enemy to the received from the previous step
        this.setPosition(this.follower.vec.x, this.follower.vec.y);
    }

    receiveDamage(damage) {
        this.hp -= damage - Enemy.stats.armor;

        // if hp drops below 0 we deactivate this enemy
        if (this.hp <= 0) {
            this.setActive(false);
            this.setVisible(false);
            this.onDeath()
        }
    }

    onDeath() {
        if (this.scene.sceneLevel === 0) {  // Add gold in base layer only
            this.scene.waveManager.deadEnemies++;
            PlayerInfo.money += Enemy.stats.money;
        }
    }
}

export class FatEnemy extends Enemy {
    static stats = EnemyConfig.Fat
}
