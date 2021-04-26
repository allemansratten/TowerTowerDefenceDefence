import { PlayerInfo } from "../playerInfo";
import { MetaScene } from "./metaScene";

export class GameOverScene extends Phaser.Scene {

    metaScene: MetaScene
    constructor(metaScene: MetaScene) {
        super({
            active: true,
            visible: true,
            key: "gameOverScene",
        });
        this.metaScene = metaScene
    }

    public create() {
        this.add.rectangle(512, 256, 1024, 512, 0xaa4444, 0.5);
        this.add.rectangle(512, 256-40, 512-128, 256-64, 0x444444);
        this.add.text(512, 160, "YOU DIED").setOrigin(0.5);
        this.add.text(512, 180, `Last wave witnessed: ${this.metaScene.getRootTDScene().waveManager.currentWave}`).setOrigin(0.5);
        this.add.text(512, 200, `Wealth taken to grave: ${PlayerInfo.money}`).setOrigin(0.5);

        this.add.text(512, 250, `DARE AGAIN`).setInteractive().setOrigin(0.5).on('pointerdown', () => {
            this.input.stopPropagation()
            if (!this.reloaded) {
                this.reloaded = true;
                location.reload()
            }    
        }, this);

    }

    currentTime = 0;
    reloaded = false;
    update(_, delta) {
        this.currentTime += delta
    }



}