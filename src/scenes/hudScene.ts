import { PlayerInfo } from "../player";
import { MAX_HEIGHT, MAX_WIDTH, Terrain, TILE_SIZE } from "../terrain";
import { MetaScene } from "./MetaScene";

const HUD_BG_COLOR = 0xffaa7d
export const HUD_WIDTH = TILE_SIZE * 2

export class HudScene extends Phaser.Scene {

    moneyText: Phaser.GameObjects.Text
    hpText: Phaser.GameObjects.Text
    levelText: Phaser.GameObjects.Text;
    metaScene: MetaScene;
    backToRootSceneButton: Phaser.GameObjects.Text;

    constructor(metaScene: MetaScene) {
        super({
            active: true,
            visible: true,
            key: "hudScene",
        });

        this.metaScene = metaScene;
    }

    public create() {
        let w = HUD_WIDTH
        let h = TILE_SIZE * MAX_HEIGHT
        this.add.rectangle(w / 2, h / 2, w, h, HUD_BG_COLOR)
        this.add.rectangle(
            w + MAX_WIDTH * TILE_SIZE + w / 2,
            h / 2,
            w,
            h,
            HUD_BG_COLOR,
        )

        this.moneyText = this.add.text(10, 10, "", { fontSize: '20px' });
        this.hpText = this.add.text(10, 50, "", { fontSize: '20px' });

        this.levelText = this.add.text(780, 10, "LEVEL: ", { fontSize: '20px' });
        this.backToRootSceneButton = this.add.text(780, 50, "BACK TO ROOT", { fontSize: '20px' });
        this.backToRootSceneButton.setInteractive();
        this.backToRootSceneButton.on('pointerdown', this.backToRootScene, this)
    }


    public update(time, delta) {
        this.moneyText.setText('Money: ' + PlayerInfo.money)
        this.hpText.setText('HP: ' + PlayerInfo.hp)
        
        if (this.metaScene.scenes && this.metaScene.scenes.length > this.metaScene.activeSceneIndex) {
            this.levelText.setText(`LEVEL: ${this.metaScene.scenes[this.metaScene.activeSceneIndex].sceneLevel}`)
        }
    }

    public backToRootScene(arg0: string, backToRootScene: any) {
        this.metaScene.switchToScene(0);
    }
    
}

