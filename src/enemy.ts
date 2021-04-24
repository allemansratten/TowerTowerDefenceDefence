// import { GridPosition, Position, Terrain } from "./terrain";

import { TDScene } from "./scenes/tdScene";
import { PlayerInfo } from "./player" ;

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


// path = this.add.path(96, -32);
// path.lineTo(96, 164);
// path.lineTo(480, 164);
// path.lineTo(480, 544);

export class Enemy extends Phaser.GameObjects.Image {

    follower: any
    hp: integer = 20;
    yOffset: number = Phaser.Math.RND.integerInRange(-20, 20);
    xOffset: number = Phaser.Math.RND.integerInRange(-20, 20);
    scene: TDScene // type assertion
    speed: number;

    constructor(scene) {
        super(scene, 0, 0, 'bomb');

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
            PlayerInfo.hp--  // todo: only reduce hp when in outermost scene
        }
    }

    startOnPath(speed, hp) {
        // set the t parameter at the start of the path
        this.follower.t = 0;
        this.hp = hp;
        this.speed = speed;

        // get x and y of the given t point
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);

        // set the x and y of our enemy to the received from the previous step
        this.setPosition(this.follower.vec.x, this.follower.vec.y);
    }

    receiveDamage(damage) {
        this.hp -= damage;

        // if hp drops below 0 we deactivate this enemy
        if (this.hp <= 0) {
            this.setActive(false);
            this.setVisible(false);
            this.scene.waveManager.deadEnemies++;
            PlayerInfo.money++;
            this.scene.moneyText.setText('Money: ' + PlayerInfo.money);
        }
    }
}