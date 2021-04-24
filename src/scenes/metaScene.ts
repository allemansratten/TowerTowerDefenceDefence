import { Terrain } from "../terrain"
import { TDScene } from "./tdScene";
import { TDSceneConfig } from "./tdSceneConfig"

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'metaScene',
};

export class MetaScene extends Phaser.Scene {

    scenes: TDScene[]
    activeSceneIndex: number

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
    public addScene(): number {
        let sceneIndex = this.scenes.length;
        let newScene = new TDScene(new TDSceneConfig(new Terrain(sceneIndex, 10, 8), sceneIndex), this);

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