import { PlayerInfo } from "../player";
import { MAX_HEIGHT, MAX_WIDTH, Terrain, TILE_SIZE } from "../terrain";
import { MetaScene } from "./MetaScene";
import { TDScene } from "./tdScene";

const HUD_BG_COLOR = 0xffaa7d
export const HUD_WIDTH = TILE_SIZE * 2

export class HudScene extends Phaser.Scene {

    moneyText: Phaser.GameObjects.Text
    hpText: Phaser.GameObjects.Text
    levelText: Phaser.GameObjects.Text;
    metaScene: MetaScene;
    backToRootSceneButton: Phaser.GameObjects.Text;
    buyTowerIcons: BuyTowerIcon[]

    lastActiveScene: TDScene
    parentScenesTexts: Phaser.GameObjects.Text[]

    constructor(metaScene: MetaScene) {
        super({
            active: false,
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

        this.buyTowerIcons = []
        this.buyTowerIcons.push(new BuyTowerIcon(this, w / 2, 200))

        this.scene.bringToTop('hudScene');
        this.parentScenesTexts = []
    }


    public update(time, delta) {
        this.moneyText.setText('Money: ' + PlayerInfo.money)
        this.hpText.setText('HP: ' + PlayerInfo.hp)
        this.updateInfoBasedOnActiveScene();
    }

    updateInfoBasedOnActiveScene(){
        let activeScene = this.metaScene.getActiveScene();
        if (!activeScene) { return; }
        if (activeScene == this.lastActiveScene) { return; }

        this.lastActiveScene = activeScene;
        this.levelText.setText(`LEVEL: ${activeScene.sceneLevel}`)

        let parentScenes = this.metaScene.getParentScenesToRoot()

        for (let i = 0; i < this.parentScenesTexts.length; i++) {
            const element = this.parentScenesTexts[i];
            element.destroy();
        }

        for (let i = parentScenes.length-1; i >= 0; i--) {
            let sceneIndex = (parentScenes.length - 1) - i;
            let newButton = this.add.text(780, 50 + sceneIndex * 50, `GoLevel: ${sceneIndex}`, { fontSize: '20px' });
            newButton.setInteractive();
            newButton.on('pointerdown', () => this.metaScene.switchToScene(parentScenes[i], false), this.metaScene)
            this.parentScenesTexts.push(
                newButton
            )

        }


    }

}

class BuyTowerIcon {
    spriteContainer: Phaser.GameObjects.Container
    origX: number
    origY: number

    constructor(hudScene: HudScene, x, y) {
        var sprites = [
            hudScene.add.sprite(0, 0, "towerbase"),
            hudScene.add.sprite(0, 0, "towermid"),
            hudScene.add.sprite(0, 0, "towertop0"),
        ]
        this.spriteContainer = hudScene.add.container(x, y, sprites)

        this.origX = x
        this.origY = y

        this.spriteContainer.setSize(TILE_SIZE, TILE_SIZE);
        this.spriteContainer.setInteractive()
        // this.input.on('pointerdown', () => console.log("foobar"), this);
        hudScene.input.setDraggable(this.spriteContainer);

        this.spriteContainer.on('pointerover', () => {
            if (PlayerInfo.money < 10) {
                this.spriteContainer.list.forEach((sprite:Phaser.GameObjects.Sprite) => {
                    sprite.setTint(0xff0000);
                });
            }
        });

        this.spriteContainer.on('pointerout', () => {
            this.spriteContainer.list.forEach((sprite:Phaser.GameObjects.Sprite) => {
                sprite.clearTint();
            });
        });

        hudScene.input.on('dragstart', function (pointer, gameObject) {
            gameObject.list.forEach((sprite:Phaser.GameObjects.Sprite) => {
                sprite.setTint(0xff0000);
            });
        });
        hudScene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;

        });
        hudScene.input.on('dragend', function (pointer, gameObject) {
            gameObject.list.forEach((sprite:Phaser.GameObjects.Sprite) => {
                sprite.clearTint();
            });

            const scene = hudScene.metaScene.getActiveScene()
            scene.towerManager.placeTower(pointer, 'Multishot');

            gameObject.x = this.origX
            gameObject.y = this.origY
        }, this);
    }
}