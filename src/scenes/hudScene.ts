import { TowerConfig, TOWER_CONFIGS, RANGE_INDICATOR_CONFIG } from "../config";
import { PlayerInfo } from "../playerInfo";
import { MAX_HEIGHT, MAX_WIDTH, Terrain, TILE_SIZE } from "../terrain";
import { MetaScene } from "./MetaScene";
import { TDScene, TD_SCENE_HEIGHT, TD_SCENE_WIDTH } from "./tdScene";

const HUD_BG_COLOR = 0xffaa7d
export const HUD_WIDTH = TILE_SIZE * 3

export class HudScene extends Phaser.Scene {

    moneyText: Phaser.GameObjects.Text
    waveText: Phaser.GameObjects.Text
    hpText: Phaser.GameObjects.Text
    hpRedness: number // 0 to 1
    depthText: Phaser.GameObjects.Text
    goUpText: Phaser.GameObjects.Text

    metaScene: MetaScene;
    backToRootSceneButton: Phaser.GameObjects.Text;
    buyTowerIcons: BuyTowerIcon[]

    lastActiveScene: TDScene
    parentScenesImages: Phaser.GameObjects.Image[]
    slowSpeedText: Phaser.GameObjects.Text;
    fastSpeedText: Phaser.GameObjects.Text;

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
        const xLeft = w / 2
        const xRight = w + TD_SCENE_WIDTH + w / 2

        this.add.rectangle(w / 2, h / 2, w, h, HUD_BG_COLOR)
        this.add.rectangle(
            xRight, h / 2,
            w, h,
            HUD_BG_COLOR,
        )

        this.moneyText = this.add.text(xLeft, 20, "", { fontSize: '20px' });
        this.moneyText.setOrigin(0.5)
        this.hpText = this.add.text(xLeft, 40, "", { fontSize: '20px' });
        this.hpText.setOrigin(0.5)
        this.hpRedness = 0

        this.waveText = this.add.text(xLeft, 60, "", { fontSize: '20px' });
        this.waveText.setOrigin(0.5)

        this.depthText = this.add.text(xRight, 20, "Depth: ", { fontSize: '20px' });
        this.depthText.setOrigin(0.5)

        this.goUpText = this.add.text(xRight, 50, "Go up to:", { fontSize: '20px' });
        this.goUpText.setOrigin(0.5)
        this.goUpText.setVisible(false)

        this.buyTowerIcons = [];
        let towerTypeIndex = 0;
        for (let towerConfig of TOWER_CONFIGS) {
            this.buyTowerIcons.push(new BuyTowerIcon(this, w / 2, 110 + 70 * towerTypeIndex, towerConfig))
            towerTypeIndex++;
        }

        const pad = 3
        this.slowSpeedText = this.add.text(xLeft, 450, ">Slow<", {
            fontSize: '20px',
            backgroundColor: "#000",
            padding: { left: pad, right: pad, top: pad, bottom: pad }
        });
        this.fastSpeedText = this.add.text(xLeft, 475, "Fast", {
            fontSize: '20px',
            backgroundColor: "#000",
            padding: { left: pad, right: pad, top: pad, bottom: pad }
        });
        this.slowSpeedText.setInteractive().setOrigin(0.5)
        this.fastSpeedText.setInteractive().setOrigin(0.5)
        this.slowSpeedText.on('pointerdown', () => {
            PlayerInfo.timeScale = 1, null
            this.slowSpeedText.setText(">Slow<")
            this.fastSpeedText.setText("Fast")
        })
        this.fastSpeedText.on('pointerdown', () => {
            PlayerInfo.timeScale = 4, null
            this.slowSpeedText.setText("Slow")
            this.fastSpeedText.setText(">Fast<")
        })


        this.scene.bringToTop('hudScene');
        this.parentScenesImages = []
    }

    lastTime: number = 0
    public update(_, delta) {
        delta *= PlayerInfo.timeScale;
        this.lastTime += delta;

        this.moneyText.setText('Money: ' + PlayerInfo.money)

        const currentWave = this.metaScene.getRootTDScene().waveManager.currentWave
        this.waveText.setText(`Wave: ${currentWave}`)

        this.hpText.setText('HP: ' + PlayerInfo.hp)

        this.hpText.setColor(Phaser.Display.Color.RGBToString(
            255, 255 * (1 - this.hpRedness), 255 * (1 - this.hpRedness)
        ))
        const secsToWhite = 0.5
        this.hpRedness = Math.max(0, this.hpRedness - delta / 1000 / secsToWhite)

        this.updateInfoBasedOnActiveScene();

        for (const icon of this.buyTowerIcons) {
            icon.update(this.lastTime, delta)
        }
    }

    updateInfoBasedOnActiveScene() {
        let activeScene = this.metaScene.getActiveScene();
        if (!activeScene) { return; }
        if (activeScene == this.lastActiveScene) { return; }

        this.lastActiveScene = activeScene;
        this.depthText.setText(`Depth: ${activeScene.sceneLevel}`)

        const parentScenes = this.metaScene.getParentScenesToRoot()

        for (let i = 0; i < this.parentScenesImages.length; i++) {
            const element = this.parentScenesImages[i];
            element.destroy();
        }

        this.goUpText.setVisible(parentScenes.length > 0)

        for (let i = parentScenes.length - 1; i >= 0; i--) {
            let sceneIndex = (parentScenes.length - 1) - i;
            let scale = 0.1
            const maxImagesNormalScaleFit = 7;
            if (parentScenes.length > maxImagesNormalScaleFit) {
                scale /= ((parentScenes.length / maxImagesNormalScaleFit) * 1.022) // NOTE: Drifts, hence re-scale by this magic number, idk why; no time to figure out
            }

            let newButton = this.add.image(
                TD_SCENE_WIDTH + HUD_WIDTH * 1.5,
                100 + sceneIndex * scale * TD_SCENE_HEIGHT * 1.2,
                `snap-${parentScenes[i].scene.key}`
            );
            newButton.scaleX = scale
            newButton.scaleY = scale
            newButton.setInteractive();
            newButton.on('pointerdown', () => this.metaScene.switchToScene(parentScenes[i], false), this.metaScene)
            this.parentScenesImages.push(
                newButton
            )

        }
    }
}

class BuyTowerIcon {
    towerName: string
    towerConfig: TowerConfig

    spriteContainer: Phaser.GameObjects.Container
    priceText: Phaser.GameObjects.Text
    hudScene: HudScene

    origX: number
    origY: number

    constructor(hudScene: HudScene, x, y, config) {
        this.hudScene = hudScene
        this.origX = x
        this.origY = y
        this.towerName = config.name
        this.towerConfig = config

        let towerBase = hudScene.add.sprite(0, 0, 'towerbases', config.spriteBase);
        towerBase.setTint(config.tintBase);
        let towerMid = hudScene.add.sprite(0, 0, 'towermids', config.spriteMid);
        towerMid.setTint(config.tintMid);
        let towerTop = hudScene.add.sprite(0, 0, 'towertops', config.spriteTop);
        towerTop.setTint(config.tintTop);

        let towerRange = hudScene.add.circle(
            0, 0, config.range(1),
            RANGE_INDICATOR_CONFIG.colour,
            RANGE_INDICATOR_CONFIG.alpha
        );
        towerRange.setStrokeStyle(
            RANGE_INDICATOR_CONFIG.edgeWidth,
            RANGE_INDICATOR_CONFIG.edgeColour
        );
        towerRange.setVisible(false);

        var sprites = [
            towerBase,
            towerMid,
            towerTop,
            towerRange,
        ]
        this.spriteContainer = hudScene.add.container(x, y, sprites)
        this.spriteContainer.getAll()

        const pad = 3
        this.priceText = hudScene.add.text(
            x + 15, y, "" + this.towerConfig.price,
            {
                fontSize: "20px",
                color: "white",
                backgroundColor: "black",
                padding: { left: pad, right: pad, top: pad, bottom: pad }
            }
        )

        this.spriteContainer.setSize(TILE_SIZE, TILE_SIZE);
        this.spriteContainer.setInteractive()
        // this.input.on('pointerdown', () => console.log("foobar"), this);
        hudScene.input.setDraggable(this.spriteContainer)

        this.spriteContainer.on('pointerover', () => {
            if (PlayerInfo.money < config.price) {
                // cannot afford
                this.setShopIconTint(0xff0000);
            }
        });

        this.spriteContainer.on('pointerout', () => {
            this.resetTint()
        });

        hudScene.input.on('dragstart', (pointer, gameObject) => {
            if (gameObject != this.spriteContainer) { return; }

            // This makes range indicator visible
            (this.spriteContainer.list[3] as Phaser.GameObjects.Shape).setVisible(true);

            gameObject.list.forEach((sprite: Phaser.GameObjects.Sprite) => {
            });
        }, this);
        hudScene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            if (gameObject != this.spriteContainer) { return; }

            gameObject.x = dragX;
            gameObject.y = dragY;

        }, this);
        hudScene.input.on('dragend', function (pointer, gameObject) {
            if (gameObject != this.spriteContainer) { return; }

            // This makes range indicator visible
            (this.spriteContainer.list[3] as Phaser.GameObjects.Shape).setVisible(false);

            gameObject.list.forEach((sprite: Phaser.GameObjects.Sprite) => {
            });

            const scene = hudScene.metaScene.getActiveScene()
            scene.towerManager.placeTower(pointer, this.towerName);

            gameObject.x = this.origX
            gameObject.y = this.origY
        }, this);
    }

    resetTint() {
        (this.spriteContainer.list[0] as Phaser.GameObjects.Sprite).setTint(this.towerConfig.tintBase);
        (this.spriteContainer.list[1] as Phaser.GameObjects.Sprite).setTint(this.towerConfig.tintMid);
        (this.spriteContainer.list[2] as Phaser.GameObjects.Sprite).setTint(this.towerConfig.tintTop);
    }

    setShopIconTint(tint) {
        (this.spriteContainer.list[0] as Phaser.GameObjects.Sprite).setTint(tint);
        (this.spriteContainer.list[1] as Phaser.GameObjects.Sprite).setTint(tint);
        (this.spriteContainer.list[2] as Phaser.GameObjects.Sprite).setTint(tint);
    }

    update(time, delta) {
        // Uncomment to prevent negative money:
        // this.hudScene.input.setDraggable(this.spriteContainer, PlayerInfo.money >= this.towerConfig.price)
    }
}