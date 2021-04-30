import * as cfg from "./config";
import { PlayerInfo } from "./playerInfo";
import { TDScene } from "./scenes/tdScene";
import * as towers from "./towers";

export class TowerManager {
    scene: TDScene
    towerTypes: { [key:string]: any} = {
        'Basic': [towers.BasicTurret, cfg.Basic],
        'Multishot': [towers.MultishotTurret, cfg.Multishot],
        'Sniper': [towers.SniperTurret, cfg.Sniper],
        'Freeze': [towers.FreezeTurret, cfg.Freeze],
    }

    constructor(scene: TDScene) {
        this.scene = scene;
    }

    public placeTower(pointer, towerType) {
        const [i, j] = this.scene.toGridPos(pointer.x, pointer.y)
        if (this.scene.terrain.canPlaceTower(i, j)) {
            var tower: towers.Tower = this.scene.towers.get();

            let newScene = this.scene.metaScene.addScene(this.scene.scene.key)
            if (tower) {
                tower.make(i, j, newScene.scene.key, this.towerTypes[towerType][1], this.towerTypes[towerType][0]);
                PlayerInfo.money -= tower.config.price
                newScene.setTowerParent(tower)
            }
        }
    }
}