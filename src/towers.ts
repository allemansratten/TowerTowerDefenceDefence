// import { GridPosition } from "./terrain";

import { TOWER_HEALTH_REGEN } from "./config";
import { HealthBar } from "./healthBar";
import { TDScene } from "./scenes/tdScene";
import { Terrain, TILE_SIZE } from "./terrain";
import { TowerConfig } from "./config";
import { PlayerInfo } from "./playerInfo";


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
            }
        }
    }
    if (outEnemies.length > 0)
        return outEnemies;
    return false;
}


export class Tower extends Phaser.GameObjects.Container {
    config: TowerConfig
    stats: TowerConfig

    scene: TDScene

    towerTurret: _TowerTurret
    towerMid: Phaser.GameObjects.Sprite
    towerBase: Phaser.GameObjects.Sprite
    healthBar: HealthBar
    level: integer

    public innerTowerScene: TDScene

    constructor(towerScene: TDScene) {
        super(towerScene, 0, 0)
        this.healthBar = new HealthBar(towerScene)
        this.scene = towerScene;
    }

    public make(i: number, j: number, innerTowerScene: TDScene, config: TowerConfig, towerClassName) {
        this.config = config
        this.stats = this.config;
        this.level = 1

        this.towerTurret = new towerClassName(this.scene, this.config, this);

        this.towerTurret.setActive(true);
        this.towerTurret.setVisible(true);

        let xCoord = i * TILE_SIZE + TILE_SIZE / 2
        let yCoord = j * TILE_SIZE + TILE_SIZE / 2

        this.towerBase = this.scene.add.sprite(xCoord, yCoord, 'towerbases', this.config.spriteBase);
        this.towerBase.setTint(this.config.tintBase);
        this.add(this.towerBase);
        this.towerMid = this.scene.add.sprite(xCoord, yCoord, 'towermids', this.config.spriteMid);
        this.towerMid.setTint(this.config.tintMid);
        this.add(this.towerMid);

        this.towerTurret.place(i, j, this.scene.terrain);
        this.scene.terrain.placeTower(i, j, this);

        this.add(this.towerTurret);

        this.healthBar.make(xCoord, yCoord + TILE_SIZE / 2 - 8, TILE_SIZE - 14)
        this.add(this.healthBar)

        this.innerTowerScene = innerTowerScene
        this.innerTowerScene.onEnemyReachedEnd(() => {
            this.healthBar.health -= 0.2 // todo systematically
        })
    }

    update(_, delta) {
        delta *= PlayerInfo.timeScale;

        this.towerTurret.update(delta)
        
        this.healthBar.health += TOWER_HEALTH_REGEN * delta
        this.healthBar.update(delta)
    }
}


abstract class _TowerTurret extends Phaser.GameObjects.Image {
    nextTic: number
    x: number
    y: number
    parent: Tower

    scene: TDScene

    constructor(scene: TDScene, sprite: string, tint: number, parent: Tower) {
        super(scene, 0, 0, 'towertops', sprite);
        this.parent = parent;
        this.setTint(tint);
        this.nextTic = 0;
    }

    // we will place the tower according to the grid
    place(i: integer, j: integer, terrain: Terrain) {
        [this.x, this.y] = terrain.fromGridPos(i, j)
    }

    fire() {
        var enemy = getEnemy(
            this.x, this.y, this.parent.stats.range(this.parent.level),
             this.scene.allEnemies, 1
        )[0];
        if (enemy) {
            var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
            this.scene.addBullet(
                this.x, this.y, angle,
                this.parent.stats.damage(this.parent.level)
            );
            this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
            return true;
        }
        return false
    }

    lastTime: number = 0
    update(delta) {
        this.lastTime += delta
        
        if (this.lastTime > this.nextTic) {
            if (this.fire())
                this.nextTic = this.lastTime + this.parent.stats.firerate(this.parent.level)
            else
                this.nextTic = this.lastTime + 50;
        }
    }
}

export class BasicTurret extends _TowerTurret {

    constructor(scene: TDScene, config, parent) {
        super(scene, config.spriteTop, config.tintTop, parent);
    }
}


export class MultishotTurret extends _TowerTurret {

    constructor(scene: TDScene, config, parent) {
        super(scene, config.spriteTop, config.tintTop, parent);
    }


    fire() {
        var enemies = getEnemy(this.x, this.y, this.parent.stats.range(this.parent.level), this.scene.allEnemies, 3);
        if (enemies) {
            for(let enemy of enemies) {
                var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
                this.scene.addBullet(this.x, this.y, angle, this.parent.stats.damage(this.parent.level));
                this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
            }
            return true
        }
        return false
    }
}
