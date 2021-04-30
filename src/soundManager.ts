import { MetaScene } from "./scenes/metaScene"

export class SoundManager {
    music: Phaser.Sound.BaseSound
    buildSound: Phaser.Sound.BaseSound
    damageSound: Phaser.Sound.BaseSound
    levelupSound: Phaser.Sound.BaseSound

    shootSounds: {[key: string]: Phaser.Sound.BaseSound} = {};

    metaScene: MetaScene

    constructor(metaScene: MetaScene) {
        this.metaScene = metaScene;
    }

    loadSounds() {
        this.metaScene.load.audio("main_music", './sounds/gamejam_LD48.ogg');
        this.metaScene.load.audio('build_sound', './sounds/build.wav');
        this.metaScene.load.audio('damage_sound', './sounds/damage.wav');
        this.metaScene.load.audio('basic_shoot', './sounds/turretshot.wav');
        this.metaScene.load.audio('multishot_shoot', './sounds/multishot.wav');
        this.metaScene.load.audio('levelup_sound', './sounds/levelup.wav');
        this.metaScene.load.audio('sniper_shoot', './sounds/sniper.wav');
        this.metaScene.load.audio('freeze_shoot', './sounds/freeze.wav');
    }

    addSounds() {
        this.music = this.metaScene.sound.add("main_music", {"loop": true, "volume": 0.07});
        this.music.play();

        this.buildSound = this.metaScene.sound.add('build_sound', { 'loop': false, 'volume': 1});
        this.damageSound = this.metaScene.sound.add('damage_sound', { 'loop': false, 'volume': 0.15});
        this.levelupSound = this.metaScene.sound.add('levelup_sound', { 'loop': false, 'volume': 0.02});

        // Maybe load these based on config.TOWER_CONFIGS? Would require file for each
        this.shootSounds['Basic'] = this.metaScene.sound.add('basic_shoot', { 'loop': false, 'volume': 0.03});
        this.shootSounds['Multishot'] = this.metaScene.sound.add('multishot_shoot', { 'loop': false, 'volume': 0.03});
        this.shootSounds['Sniper'] = this.metaScene.sound.add('sniper_shoot', { 'loop': false, 'volume': 0.03});
        this.shootSounds['Freeze'] = this.metaScene.sound.add('freeze_shoot', { 'loop': false, 'volume': 0.03});
    }
}