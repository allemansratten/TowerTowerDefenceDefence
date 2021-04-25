import { Terrain } from "../terrain";
import { TDScene } from "./tdScene";

export class TDSceneConfig {
    terrain: Terrain;
    sceneLevel: number; // Level of recursion 
    sceneParent: TDScene;

    constructor(terrain: Terrain, sceneLevel: number, sceneParent: TDScene){
        this.terrain = terrain;

        this.sceneLevel = sceneLevel;
        this.sceneParent = sceneParent;
    }
}