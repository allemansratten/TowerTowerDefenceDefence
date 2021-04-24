import { Terrain } from "../terrain";

export class TDSceneConfig {
    terrain: Terrain;
    sceneNumber: number;

    constructor(terrain: Terrain, sceneNumber: number){
        this.terrain = terrain;
        this.sceneNumber = sceneNumber;
    }
}