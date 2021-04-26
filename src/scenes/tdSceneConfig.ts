import { Terrain } from "../terrain";
import { TDScene } from "./tdScene";

export class TDSceneConfig {
    terrain: Terrain;
    sceneLevel: number; // Level of recursion 
    sceneParentKey: string;
    sceneKey: string

    constructor(terrain: Terrain, sceneLevel: number, sceneParentKey: string, sceneKey: string){
        this.terrain = terrain;

        this.sceneLevel = sceneLevel;
        this.sceneParentKey = sceneParentKey;
        this.sceneKey = sceneKey
    }
}