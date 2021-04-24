import { TDScene } from "./scenes/tdScene";
import { TILE_SIZE } from "./terrain"

export class TowerManager {
    scene: TDScene

    constructor(scene: TDScene) {
        this.scene = scene;
    }

    public placeTower(pointer) {
        const [i, j] = this.scene.toGridPos(pointer.x, pointer.y)
        if (this.scene.terrain.canPlaceTower(i, j)) {
            let tower = this.scene.newTowers.get();
            if (tower) {
                tower.make(i, j);
            }

            // only switch to new scene when tower can be build
            let newSceneIndex = this.scene.metaScene.addScene(this.scene)
            this.scene.metaScene.switchToScene(newSceneIndex)
        }
    }
}