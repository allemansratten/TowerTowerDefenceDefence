import { MetaScene } from "./scenes/metaScene"

export class SoundManager {
    music: Phaser.Sound.BaseSound;
    buildSound: Phaser.Sound.BaseSound;
    damageSound: Phaser.Sound.BaseSound;
    shootSound: Phaser.Sound.BaseSound;
    multishotSound: Phaser.Sound.BaseSound;
    levelupSound: Phaser.Sound.BaseSound;
    sniperSound: Phaser.Sound.BaseSound;

    metaScene: MetaScene;

    constructor(metaScene: MetaScene) {
        this.metaScene = metaScene;
    }

    loadSounds() {
        this.metaScene.load.audio("main_music", "gamejam_LD48.ogg");
        this.metaScene.load.audio('build_sound', 'build.wav');
        this.metaScene.load.audio('damage_sound', 'damage.wav');
        this.metaScene.load.audio('basic_shoot', 'turretshot.wav');
        this.metaScene.load.audio('multishot_shoot', 'multishot.wav');
        this.metaScene.load.audio('levelup_sound', 'levelup.wav');
        this.metaScene.load.audio('sniper_shoot', 'sniper.wav');
    }

    addSounds() {
        this.music = this.metaScene.sound.add("main_music", {"loop": true, "volume": 0.07});
        this.music.play();

        this.buildSound = this.metaScene.sound.add('build_sound', { 'loop': false, 'volume': 1});
        this.damageSound = this.metaScene.sound.add('damage_sound', { 'loop': false, 'volume': 0.15});
        this.shootSound = this.metaScene.sound.add('basic_shoot', { 'loop': false, 'volume': 0.03});
        this.multishotSound = this.metaScene.sound.add('multishot_shoot', { 'loop': false, 'volume': 0.03});
        this.levelupSound = this.metaScene.sound.add('levelup_sound', { 'loop': false, 'volume': 0.02});
        this.sniperSound = this.metaScene.sound.add('sniper_shoot', { 'loop': false, 'volume': 0.02});
    }
}