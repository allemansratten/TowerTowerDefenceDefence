// import { GridPosition, Position, Terrain } from "./terrain";

import { SampleScene } from "./scenes/sample";
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

var ENEMY_SPEED = 1 / 10000;

// path = this.add.path(96, -32);
// path.lineTo(96, 164);
// path.lineTo(480, 164);
// path.lineTo(480, 544);

export class Enemy extends Phaser.GameObjects.Image {

    follower: any
    hp: number = 20;
    y_offset: number = Phaser.Math.RND.integerInRange(-20, 20);
    x_offset: number = Phaser.Math.RND.integerInRange(-20, 20);

    scene: SampleScene // type assertion

    constructor(scene) {
        super(scene, 0, 0, 'bomb');

        this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
    }
    update(time, delta) {
        // move the t point along the path, 0 is the start and 1 is the end
        this.follower.t += ENEMY_SPEED * delta;

        // get the new x and y coordinates in vec
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);

        // update enemy x and y to the newly obtained x and y
        this.setPosition(this.follower.vec.x + this.x_offset, this.follower.vec.y + this.y_offset);

        // if we have reached the end of the path, remove the enemy
        if (this.follower.t >= 1) {
            this.setActive(false);
            this.setVisible(false);
        }
    }

    startOnPath() {
        // set the t parameter at the start of the path
        this.follower.t = 0;
        this.hp = 20;

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
            this.scene.moneyText.setText('Money: ' + ++PlayerInfo.money)
        }
    }
}