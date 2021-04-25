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
    public activeScene: TDScene

    constructor(){
        super(sceneConfig);
        this.scenes = [];
    }

    public create() {
        this.activeScene = this.addScene();
        this.scenes[0].scene.setVisible(true);
        this.scene.start("hudScene");
    }

    // Creates new Scene, enables it, and sets it invisible
    public addScene(parentScene?: TDScene): TDScene {
        let sceneLevel = (parentScene?.sceneLevel ?? -1) + 1 ;

        let sceneIndex = this.scenes.length;
        let newScene = new TDScene(
            new TDSceneConfig(new Terrain(10, 8), sceneLevel, parentScene),
            this);

        this.scene.add(
            `tdScene${sceneIndex}`,
            newScene,
            true
            );
        this.scenes.push(newScene)
        newScene.scene.setVisible(false);
        this.scene.bringToTop('hudScene');

        return newScene;
    }


    // makes current scene invisible, makes new scene visible; doesn't change activness
    public switchToScene(switchToScene: TDScene) {
        this.activeScene?.setIsForeground(false);
        switchToScene.setIsForeground(true);

        this.activeScene = switchToScene;
    }

    update(time, delta) {
    }

    public preload() {
        // load the game assets
        this.load.setPath("../../assets/")

        this.load.image('enemy1', 'enemy.png');
        this.load.image('bullet', 'bullet.png');
        this.load.image('towertop0', 'towertop0.png');
        this.load.image('towertop1', 'towertop1.png');
        this.load.image('towermid', 'towermid.png');
        this.load.image('towerbase', 'towerbase.png');
        this.load.spritesheet('tileset',
            'tileset.png',
            { frameWidth: 64, frameHeight: 64 }
        );
        this.load.image('particle_red', 'particle_red.png');
    }

    getActiveScene() {
        return this.activeScene;
    }

    getParentScenesToRoot() {
        let parentScenes: TDScene[] = []
        let scene = this.getActiveScene();

        while(scene?.sceneParent) {
            let parent = scene.sceneParent;
            parentScenes.push(parent);
            scene = parent;
        }

        return parentScenes;
    }
}