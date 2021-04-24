import { TDScene } from "./scenes/sample";

export class TowerManager {
    scene: TDScene

    constructor(scene: TDScene) {
        this.scene = scene;
    }

    public placeTower(pointer) {
        var i = Math.floor(pointer.x / 64);
        var j = Math.floor(pointer.y / 64);

        if (this.scene.terrain.canPlaceTower(i, j)) {
            var tower = this.scene.newTowers.get();
            if (tower) {
                tower.make(i, j);
            }
        }
    }
}