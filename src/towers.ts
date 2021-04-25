// import { Enemy } from "./enemy";
// import { GridPosition } from "./terrain";

import { TDScene } from "./scenes/tdScene";
import { Terrain, TileType, TILE_SIZE } from "./terrain";
import { TowerConfig } from "./config";

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
function getEnemy(x, y, range, enemies) {
    for (let enemyGroup in enemies) {
        let enemyUnits = enemies[enemyGroup].getChildren();
        for (let i = 0; i < enemyUnits.length; i++) {
            if (enemyUnits[i].active && Phaser.Math.Distance.Between(x, y, enemyUnits[i].x, enemyUnits[i].y) <= range)
                return enemyUnits[i];

        }
    }
    return false;
}


export class Tower extends Phaser.GameObjects.Container {
    config: any = TowerConfig.Basic

    scene: TDScene

    towerTurret: TowerTurret
    towerMid: Phaser.GameObjects.Sprite
    towerBase: Phaser.GameObjects.Sprite

    public innerTowerScene: TDScene

    constructor(towerScene: TDScene) {
        super(towerScene, 0, 0)
        this.scene = towerScene;
        this.towerTurret = new TowerTurret(towerScene, this.config);
    }

    public make(i: number, j: number, innerTowerScene: TDScene) {
        this.towerTurret.setActive(true);
        this.towerTurret.setVisible(true);

        let xCoord = i * TILE_SIZE + TILE_SIZE / 2
        let yCoord = j * TILE_SIZE + TILE_SIZE / 2

        this.towerBase = this.scene.add.sprite(xCoord, yCoord, this.config.spriteBase);
        this.towerBase.setTint(this.config.tintBase);
        this.add(this.towerBase);
        this.towerMid = this.scene.add.sprite(xCoord, yCoord, this.config.spriteMid);
        this.towerBase.setTint(this.config.tintMid);
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
    config: any

    scene: TDScene
    bulletDamage: integer;

    constructor(scene, config) {
        super(scene, 0, 0, config.spriteTop);
        this.setTint(config.tintTop);
        this.bulletDamage = config.damage;
        this.config = config;
        this.nextTic = 0;
    }

    // we will place the tower according to the grid
    place(i: integer, j: integer, terrain: Terrain) {
        [this.x, this.y] = terrain.fromGridPos(i, j)
    }

    fire() {
        var enemy = getEnemy(this.x, this.y, 200, this.scene.allEnemies);
        if (enemy) {
            var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
            this.scene.addBullet(this.x, this.y, angle, this.bulletDamage);
            this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
            return true;
        }
        return false
    }

    update(time, delta) {
        if (time > this.nextTic) {
            if(this.fire())
                this.nextTic = time + 1000;
            else
                this.nextTic = time + 50;
        }
    }
}
