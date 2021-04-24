import { PlayerInfo } from "../player";
import { MAX_WIDTH, Terrain, TILE_SIZE } from "../terrain";

const HUD_BG_COLOR = 0xffaa7d

export class HudScene extends Phaser.Scene {

    moneyText: Phaser.GameObjects.Text
    hpText: Phaser.GameObjects.Text

    constructor() {
        super({
            active: true,
            visible: true,
            key: "hudScene",
        });
    }

    public create() {
        let w = TILE_SIZE * 2
        let h = TILE_SIZE * 8
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
    }


    public update(time, delta) {
        this.moneyText.setText('Money: ' + PlayerInfo.money)
        this.hpText.setText('HP: ' + PlayerInfo.hp)
    }
}