import { PlayerInfo } from "../playerInfo";
import {Terrain} from "../terrain"
import { GameOverScene } from "./gameOverScene";
import {SCENE_TRANSITION_MS, TDScene} from "./tdScene";
import {TDSceneConfig} from "./tdSceneConfig"

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'metaScene',
};

export class MetaScene extends Phaser.Scene {

    public scenes: TDScene[]
    public activeScene: TDScene
    mainSound: Phaser.Sound.BaseSound;
    buildSound: Phaser.Sound.BaseSound;
    damageSound: Phaser.Sound.BaseSound;
    shootSound: Phaser.Sound.BaseSound;

    enemiesSlain: integer = 0;

    constructor() {
        super(sceneConfig);
        this.scenes = [];
    }

    public create() {
        this.createAnimations()

        this.activeScene = this.addScene();
        this.scenes[0].scene.setVisible(true);
        this.scene.start("hudScene");

        this.mainSound = this.sound.add("main_music", {"loop": true, "volume": 0.07});
        this.mainSound.play();

        this.buildSound = this.sound.add('build_sound', { 'loop': false, 'volume': 1});
        this.damageSound = this.sound.add('damage_sound', { 'loop': false, 'volume': 0.15});
        this.shootSound = this.sound.add('shoot_sound', { 'loop': false, 'volume': 0.04});
    }

  // Creates new Scene, enables it, and sets it invisible
    public addScene(parentSceneKey?: string): TDScene {
        let parentScene = this.getSceneByKey(parentSceneKey)
        let sceneLevel = (parentScene?.sceneLevel ?? -1) + 1;

        let sceneIndex = this.scenes.length;
        const sceneKey = `tdScene${sceneIndex}`

        let newScene = new TDScene(
            new TDSceneConfig(new Terrain(10, 8), sceneLevel, parentSceneKey, sceneKey),
            this,
        );

        this.scene.add(
            sceneKey,
            newScene,
            true
        );
        this.scenes.push(newScene)
        newScene.scene.setVisible(false);
        if (this.activeScene) this.scene.bringToTop(this.activeScene.scene.key);
        this.scene.bringToTop('hudScene');

        return newScene;
    }

    public getSceneByKey(key?: string): TDScene | undefined {
        if (key) {
            return this.scene.get(key) as TDScene
        }
    }


    // makes current scene invisible, makes new scene visible; doesn't change activness
    public switchToScene(newSceneKey: string, goingInside: boolean, i = 0, j = 0) {
        this.activeScene?.setIsForeground(false, goingInside, i, j);
        let newScene = this.getSceneByKey(newSceneKey)

        console.log(
            `Switching from ${this.activeScene.scene.key} (parent ${this.activeScene.sceneParentKey}) to`
            + ` ${newScene.scene.key} (parent ${newScene.sceneParentKey})`
        )

        newScene.time.addEvent({
            delay: SCENE_TRANSITION_MS,
            loop: false,
            callback: () => {
                this.activeScene?.scene.setVisible(false)
                newScene.scene.setVisible(true)
                this.activeScene = newScene
                newScene.setIsForeground(true, goingInside, i, j);
                this.scene.bringToTop(newSceneKey);
                this.scene.bringToTop('hudScene');
            }
        })

        // 1.05946309436 ~ 2^(1/12), i.e. one semitone
        this.sound.setRate(1 / (Math.pow(1.05946309436, newScene.sceneLevel)))
    }

    public isGameOver = false;
    public gameOver() {
        if (!this.isGameOver){
            this.sound.setRate(1 / (Math.pow(1.05946309436, 15)))

            this.isGameOver = true;
            let gameOverScene = this.scene.add("gameOverScene", new GameOverScene(this))
            this.scene.start(gameOverScene);
            this.activeScene.scene.pause()
            this.scene.pause()
        }
    }

    public preload() {
        // load the game assets
        this.load.setBaseURL('assets/')

        this.load.spritesheet('weakEnemy', 'enemy.png', {frameWidth: 48, frameHeight: 48});
        this.load.spritesheet('fastEnemy', 'enemy_fast.png', {frameWidth: 48, frameHeight: 48});
        this.load.spritesheet('armouredEnemy', 'enemy_armored.png', {frameWidth: 48, frameHeight: 48});
        this.load.spritesheet('splitterBigEnemy', 'enemy_split_big.png', {frameWidth: 48, frameHeight: 48});
        this.load.spritesheet('splitterSmallEnemy', 'enemy_split_small.png', {frameWidth: 48, frameHeight: 48});
        this.load.spritesheet('fatEnemy', 'enemy_chonk.png', {frameWidth: 56, frameHeight: 56});
        this.load.spritesheet('splitterFatEnemy', 'enemy_split_chonk.png', {frameWidth: 56, frameHeight: 56});

        this.load.image('bullet', 'bullet.png');
        this.load.spritesheet('tileset',
            'tileset.png',
            {frameWidth: 64, frameHeight: 64}
        );
        this.load.spritesheet('towertops',
            'towertop.png',
            {frameWidth: 64, frameHeight: 64}
        )
        this.load.spritesheet('towermids',
            'towermid.png',
            {frameWidth: 64, frameHeight: 64}
        )
        this.load.spritesheet('towerbases',
            'towerbase.png',
            {frameWidth: 64, frameHeight: 64}
        )
        this.load.image('particle_red', 'particle_red.png');

        this.load.spritesheet('portalFrom', 'portal_from.png', {frameWidth: 40, frameHeight: 40});
        this.load.spritesheet('portalTo', 'portal_to.png', {frameWidth: 40, frameHeight: 40});

        this.load.audio("main_music", "gamejam_LD48.ogg");
        this.load.audio('build_sound', 'build.wav');
        this.load.audio('damage_sound', 'damage.wav');
        this.load.audio('shoot_sound', 'laser.wav');
    }

    createAnimations() { // TODO: Make this not dumb and ugly
        this.anims.create({
            key: 'weakEnemy_walk',
            frames: this.anims.generateFrameNumbers('weakEnemy', {start: 0, end: 7}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'fastEnemy_walk',
            frames: this.anims.generateFrameNumbers('fastEnemy', {start: 0, end: 7}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'fatEnemy_walk',
            frames: this.anims.generateFrameNumbers('fatEnemy', {start: 0, end: 9}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'splitterFatEnemy_walk',
            frames: this.anims.generateFrameNumbers('splitterFatEnemy', {start: 0, end: 9}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'armouredEnemy_walk',
            frames: this.anims.generateFrameNumbers('armouredEnemy', {start: 0, end: 7}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'splitterBigEnemy_walk',
            frames: this.anims.generateFrameNumbers('splitterBigEnemy', {start: 0, end: 7}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'splitterSmallEnemy_walk',
            frames: this.anims.generateFrameNumbers('splitterSmallEnemy', {start: 0, end: 7}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'portalFrom_spin',
            frames: this.anims.generateFrameNumbers('portalFrom', {start: 0, end: 7}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'portalTo_spin',
            frames: this.anims.generateFrameNumbers('portalTo', {start: 0, end: 7}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'towerMids_spin',
            frames: this.anims.generateFrameNumbers('towermids', {start: 0, end: 1}),
            frameRate: 5,
            repeat: -1
        });
    }

    getActiveScene() {
        return this.activeScene;
    }

    getParentScenesToRoot() {
        let parentScenes: TDScene[] = []
        let scene = this.getActiveScene();

        while (scene?.sceneParentKey) {
            let parent = this.getSceneByKey(scene.sceneParentKey)
            parentScenes.push(parent);
            scene = parent;
        }

        return parentScenes;
    }

    getRootTDScene() {
        let scene = this.getActiveScene();

        while (scene?.sceneParentKey) {
            scene = this.getSceneByKey(scene.sceneParentKey)
        }

        return scene
    }
}