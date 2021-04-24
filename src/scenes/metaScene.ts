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
        this.scenes = [];
    }

    public create() {
        this.addScene();
        this.scenes[0].scene.setVisible(true);
        this.activeSceneIndex = 0
        this.scene.start("hudScene")
    }

    // Creates new Scene, enables it, and sets it invisible
    public addScene(parentScene?: TDScene): TDScene {

        let sceneIndexParent = parentScene?.sceneIndex ?? -1;
        let sceneLevel = (parentScene?.sceneLevel ?? -1) + 1 ;

        let sceneIndex = this.scenes.length;
        let newScene = new TDScene(
            new TDSceneConfig(new Terrain(10, 8), sceneIndex, sceneLevel, sceneIndexParent),
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
    public switchToScene(switchToIndex: number) {
        this.scenes[this.activeSceneIndex].setIsForeground(false);
        this.scenes[switchToIndex].setIsForeground(true);

        this.activeSceneIndex = switchToIndex;
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
        return this.scenes.length > 0 ? this.scenes[this.activeSceneIndex] : null;
    }

    getParentScenesToRoot() {
        let parentScenes: TDScene[] = []
        let scene = this.getActiveScene();

        while(scene && scene.sceneIndexParent > -1) {
            let parent = this.scenes[scene.sceneIndexParent];
            parentScenes.push(parent);
            scene = parent;
        }

        return parentScenes;
    }
}