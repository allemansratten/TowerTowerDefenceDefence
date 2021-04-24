import { TDScene } from "./scenes/tdScene";
import { TILE_SIZE } from "./terrain"
import { Tower } from "./towers";

export class TowerManager {
    scene: TDScene

    constructor(scene: TDScene) {
        this.scene = scene;
    }

    public placeTower(pointer) {
        const [i, j] = this.scene.toGridPos(pointer.x, pointer.y)
        if (this.scene.terrain.canPlaceTower(i, j)) {
            var tower: Tower = this.scene.towers.get();

            // only switch to new scene when tower can be build
            let newScene = this.scene.metaScene.addScene(this.scene)
            this.scene.metaScene.switchToScene(newScene.sceneIndex)

            if (tower) {
                tower.make(i, j, newScene);
            }
        }

        let potentialExistingTower = this.scene.terrain.tryGetExistingTower(i, j);
        if (potentialExistingTower){
            this.scene.metaScene.switchToScene(potentialExistingTower.innerTowerScene.sceneIndex)
        }
        
    }
}