import { TDScene } from "./scenes/tdScene";
import { TILE_SIZE } from "./terrain"
import * as towers from "./towers";

export class TowerManager {
    scene: TDScene
    towerTypes: { [key:string]: any} = {
        'Basic': towers.BasicTurret,
    }

    constructor(scene: TDScene) {
        this.scene = scene;
    }

    public placeTower(pointer, towerType) {
        const [i, j] = this.scene.toGridPos(pointer.x, pointer.y)
        if (this.scene.terrain.canPlaceTower(i, j)) {
            var tower: towers.Tower = this.scene.towers.get();

            let newScene = this.scene.metaScene.addScene(this.scene)
            if (tower) {
                tower.make(i, j, newScene, this.towerTypes[towerType]);
            }
        }
    }
}