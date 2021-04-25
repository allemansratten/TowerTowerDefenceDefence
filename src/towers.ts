// import { GridPosition } from "./terrain";

import { TDScene } from "./scenes/tdScene";
import { Terrain, TileType, TILE_SIZE } from "./terrain";
import { TowerConfig } from "./config";


// todo: move to scene?
function getEnemy(x, y, range, enemies, numToGet) {
    let outEnemies = [];
    for (let enemyGroup in enemies) {
        let enemyUnits = enemies[enemyGroup].getChildren();
        for (let i = 0; i < enemyUnits.length; i++) {
            if (enemyUnits[i].active && Phaser.Math.Distance.Between(x, y, enemyUnits[i].x, enemyUnits[i].y) <= range) {
                outEnemies.push(enemyUnits[i]);
                if (outEnemies.length === numToGet) {
                    return outEnemies
                }
                // return enemyUnits[i];
            }
        }
    }
    if (outEnemies.length > 0)
        return outEnemies;
    return false;
}


export class Tower extends Phaser.GameObjects.Container {
    config: any = TowerConfig['Basic']

    scene: TDScene

    towerTurret: _TowerTurret
    towerMid: Phaser.GameObjects.Sprite
    towerBase: Phaser.GameObjects.Sprite

    public innerTowerScene: TDScene

    constructor(towerScene: TDScene) {
        super(towerScene, 0, 0)
        this.scene = towerScene;
    }

    public make(i: number, j: number, innerTowerScene: TDScene, towerClassName) {
        this.config = TowerConfig[towerClassName.name.replace('Turret', '')];
        this.towerTurret = new towerClassName(this.scene, this.config);

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


abstract class _TowerTurret extends Phaser.GameObjects.Image {
    nextTic: number
    x: number
    y: number
    abstract config: any

    scene: TDScene

    constructor(scene: TDScene, sprite: string, tint: number) {
        super(scene, 0, 0, sprite);
        this.setTint(tint);
        this.nextTic = 0;
    }

    // we will place the tower according to the grid
    place(i: integer, j: integer, terrain: Terrain) {
        [this.x, this.y] = terrain.fromGridPos(i, j)
    }

    fire() {
        var enemy = getEnemy(this.x, this.y, this.config.range, this.scene.allEnemies, 1)[0];
        if (enemy) {
            var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
            this.scene.addBullet(this.x, this.y, angle, this.config.damage);
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

export class BasicTurret extends _TowerTurret {
    config: any

    constructor(scene: TDScene, config) {
        super(scene, config.spriteTop, config.tintTop);
        this.config = config;
    }
}


export class MultishotTurret extends _TowerTurret {
    config: any

    constructor(scene: TDScene, config) {
        super(scene, config.spriteTop, config.tintTop);
        this.config = config;
    }


    fire() {
        var enemies = getEnemy(this.x, this.y, this.config.range, this.scene.allEnemies, 3);
        if (enemies) {
            for(let enemy of enemies) {
                var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
                this.scene.addBullet(this.x, this.y, angle, this.config.damage);
                this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
            }
            return true
        }
        return false
    }
}
