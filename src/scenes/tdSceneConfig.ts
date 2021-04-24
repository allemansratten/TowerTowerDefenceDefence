import { Terrain } from "../terrain";

export class TDSceneConfig {
    terrain: Terrain;

    constructor(terrain: Terrain){
        this.terrain = terrain;
    }
}