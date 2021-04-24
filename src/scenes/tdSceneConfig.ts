import { Terrain } from "../terrain";

export class TDSceneConfig {
    terrain: Terrain;
    sceneNumber: number; // Current scene index
    sceneLevel: number; // Level of recursion 
    sceneNumberParent: number // Scene index for the tower that created this scene


    constructor(terrain: Terrain, sceneNumber: number, sceneLevel: number, sceneNumberParent: number){
        this.terrain = terrain;

        this.sceneNumber = sceneNumber;
        this.sceneLevel = sceneLevel;
        this.sceneNumberParent = sceneNumberParent;
    }
}