import { TowerConfig } from "../config";
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

        this.buyTowerIcons = [];
        let towerTypeIndex = 0;
        for (let towerName in TowerConfig) {
            let towerConfig = TowerConfig[towerName]
            this.buyTowerIcons.push(new BuyTowerIcon(this, w / 2, 110+70*towerTypeIndex, towerName, towerConfig))
            towerTypeIndex++;
        }


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
    towerName: string
    towerConfig: any

    spriteContainer: Phaser.GameObjects.Container
    origX: number
    origY: number

    constructor(hudScene: HudScene, x, y, towerName, config) {
        let towerBase = hudScene.add.sprite(0, 0, 'towerbases', config.spriteBase);
        towerBase.setTint(config.tintBase); 
        let towerMid = hudScene.add.sprite(0, 0, 'towermids', config.spriteMid);
        towerMid.setTint(config.tintMid);
        let towerTop = hudScene.add.sprite(0, 0, 'towertops', config.spriteTop);
        towerTop.setTint(config.tintTop);

        var sprites = [
            towerBase,
            towerMid,
            towerTop,
        ]
        this.spriteContainer = hudScene.add.container(x, y, sprites)
        this.spriteContainer.getAll()

        this.towerName = towerName;
        this.towerConfig = config

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
            this.resetTint()
        });

        hudScene.input.on('dragstart', function (pointer, gameObject) {
            if (gameObject != this.spriteContainer) { return; }

            gameObject.list.forEach((sprite:Phaser.GameObjects.Sprite) => {
            });
        }, this);
        hudScene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            if (gameObject != this.spriteContainer) { return; }

            gameObject.x = dragX;
            gameObject.y = dragY;

        }, this);
        hudScene.input.on('dragend', function (pointer, gameObject) {
            if (gameObject != this.spriteContainer) { return; }
            
            gameObject.list.forEach((sprite:Phaser.GameObjects.Sprite) => {
            });

            const scene = hudScene.metaScene.getActiveScene()
            scene.towerManager.placeTower(pointer, this.towerName);

            gameObject.x = this.origX
            gameObject.y = this.origY
        }, this);
    }

    resetTint(){
        (this.spriteContainer.list[0] as Phaser.GameObjects.Sprite).setTint(this.towerConfig.tintBase);
        (this.spriteContainer.list[1] as Phaser.GameObjects.Sprite).setTint(this.towerConfig.tintMid);
        (this.spriteContainer.list[2] as Phaser.GameObjects.Sprite).setTint(this.towerConfig.tintTop);
    }
}