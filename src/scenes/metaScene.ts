import { Terrain } from "../terrain"
import { TDScene } from "./tdScene";
import { TDSceneConfig } from "./tdSceneConfig"

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'metaScene',
};

export class MetaScene extends Phaser.Scene {

    public scenes: TDScene[]
    public activeSceneIndex: number

    constructor(){
        super(sceneConfig);
    }

    public create() {
        this.scenes = [];
        this.addScene();
        this.scenes[0].scene.setVisible(true);
        this.activeSceneIndex = 0
    }

    // Creates new Scene, enables it, and sets it invisible
    public addScene(parentScene?: TDScene): number {

        let sceneNumberParent = parentScene?.sceneNumber ?? -1;
        let sceneLevel = (parentScene?.sceneLevel ?? -1) + 1 ; 

        let sceneIndex = this.scenes.length;
        let newScene = new TDScene(
            new TDSceneConfig(new Terrain(10, 8), sceneIndex, sceneLevel, sceneNumberParent), 
            this);

        this.scene.add(
            `tdScene${sceneIndex}`,
            newScene,
            true
            );
        this.scenes.push(newScene)
        newScene.scene.setVisible(false);

        return sceneIndex;
        this.scene.isPaused
    }


    // makes current scene invisible, makes new scene visible; doesn't change activness 
    public switchToScene(switchToIndex: number) {
        this.scenes[this.activeSceneIndex].setIsForeground(false);
        this.scenes[switchToIndex].setIsForeground(true);

        this.activeSceneIndex = switchToIndex;
    }

    update(time, delta) {
    }

    public preload() {
        // load the game assets
        this.load.image('bomb', '../../assets/bomb.png');
        this.load.image('star', '../../assets/star.png');
    }

}