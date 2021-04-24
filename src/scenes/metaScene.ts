import { Terrain } from "../terrain"
import { TDScene } from "./sample";
import { TDSceneConfig } from "./tdSceneConfig"

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'metaScene',
};

export class MetaScene extends Phaser.Scene {


    constructor(){
        super(sceneConfig);
    }

    public create() {
        this.scene.launch("tdScene0"); // the scene is already launched at the beginning somehow
        this.scene.launch("tdScene1");

    }

    update(time, delta) {
        // console.log("ASD")
    }
}