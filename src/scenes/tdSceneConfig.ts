import { Terrain } from "../terrain";

export class TDSceneConfig {
    terrain: Terrain;
    sceneIndex: number; // Current scene index
    sceneLevel: number; // Level of recursion 
    sceneIndexParent: number // Scene index for the tower that created this scene


    constructor(terrain: Terrain, sceneIndex: number, sceneLevel: number, sceneIndexParent: number){
        this.terrain = terrain;

        this.sceneIndex = sceneIndex;
        this.sceneLevel = sceneLevel;
        this.sceneIndexParent = sceneIndexParent;
    }
}