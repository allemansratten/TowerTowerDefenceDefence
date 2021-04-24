// import { Enemy } from "./enemy";
// import { GridPosition } from "./terrain";

import { TDScene } from "./scenes/tdScene";
import { Terrain, TileType, TILE_SIZE } from "./terrain";

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
    for (var i = 0; i < enemyUnits.length; i++) {
        if (enemyUnits[i].active && Phaser.Math.Distance.Between(x, y, enemyUnits[i].x, enemyUnits[i].y) <= distance)
            return enemyUnits[i];
    }
    return false;
}


export class NewTower extends Phaser.GameObjects.Container {
    scene: TDScene

    towerTurret: TowerTurret
    towerMid: Phaser.GameObjects.Sprite
    towerBase: Phaser.GameObjects.Sprite

    public innerTowerScene: TDScene

    constructor(towerScene: TDScene) {
        super(towerScene, 0, 0)
        this.towerTurret = new TowerTurret(towerScene)
        this.scene = towerScene;
    }

    public make(i: number, j: number, innerTowerScene: TDScene) {
        this.towerTurret.setActive(true);
        this.towerTurret.setVisible(true);

        let xCoord = i * TILE_SIZE + TILE_SIZE / 2
        let yCoord = j * TILE_SIZE + TILE_SIZE / 2

        this.towerBase = this.scene.add.sprite(xCoord, yCoord, 'towerbase')
        this.add(this.towerBase);
        this.towerMid = this.scene.add.sprite(xCoord, yCoord, 'towermid')
        this.add(this.towerMid);

        this.towerTurret.place(i, j, this.scene.terrain);
        this.scene.terrain.placeTower(i, j, this);

        this.add(this.towerTurret);

        this.innerTowerScene = innerTowerScene;
    }

    update(time, delta) {
        this.towerTurret.update(time, delta)
    }
}


export class TowerTurret extends Phaser.GameObjects.Image {
    nextTic: number
    x: number
    y: number

    scene: TDScene

    constructor(scene) {
        super(scene, 0, 0, 'towertop0');
        this.nextTic = 0;
    }

    // we will place the tower according to the grid
    place(i: integer, j: integer, terrain: Terrain) {
        [this.x, this.y] = terrain.fromGridPos(i, j)
    }

    fire() {
        var enemy = getEnemy(this.x, this.y, 100, this.scene.enemies);
        if (enemy) {
            var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
            this.scene.addBullet(this.x, this.y, angle);
            this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
        }
    }

    update(time, delta) {
        if (time > this.nextTic) {
            this.fire();
            this.nextTic = time + 1000;
        }
    }
}
