// import { Enemy } from "./enemy";
// import { GridPosition } from "./terrain";

import { SampleScene } from "./scenes/sample";

// export abstract class Tower {
//     pos: GridPosition

//     abstract step(enemies: Array<Enemy>): void;
// }

// export class BasicTower extends Tower {
//     step(enemies: Array<Enemy>) {
//         // shoot enemies if applicable
//     }
// }

// todo: move to scene?
function getEnemy(x, y, distance, enemies) {
    var enemyUnits = enemies.getChildren();
    for(var i = 0; i < enemyUnits.length; i++) {
        if(enemyUnits[i].active && Phaser.Math.Distance.Between(x, y, enemyUnits[i].x, enemyUnits[i].y) <= distance)
            return enemyUnits[i];
    }
    return false;
}

export class Tower extends Phaser.GameObjects.Image {
    
    nextTic: number
    x: number
    y: number

    scene: SampleScene

    constructor(scene) {
        super(scene, 0, 0, 'star');
        this.nextTic = 0;
    }

    // we will place the tower according to the grid
    place(i, j, map) {
        this.y = i * 64 + 64/2;
        this.x = j * 64 + 64/2;
        map[i][j] = 1;
    }

    fire() {
        var enemy = getEnemy(this.x, this.y, 100, this.scene.enemies);
        if(enemy) {
            var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
            this.scene.addBullet(this.x, this.y, angle);
            this.angle = (angle + Math.PI/2) * Phaser.Math.RAD_TO_DEG;
        }
    }

    update(time, delta) {
        if(time > this.nextTic) {
            this.fire();
            this.nextTic = time + 1000;
        }
    }
}
