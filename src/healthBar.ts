import { TDScene } from "./scenes/tdScene"
import { TILE_SIZE } from "./terrain"

export class HealthBar extends Phaser.GameObjects.Container {
    scene: TDScene

    private _health: number = 1  // 0 to 1
    slowHealth: number

    bgBar: Phaser.GameObjects.Rectangle
    healthBar: Phaser.GameObjects.Rectangle
    slowHealthBar: Phaser.GameObjects.Rectangle

    x: number
    y: number
    width: number
    maxHealth: number

    constructor(scene) {
        super(scene, 0, 0)
    }

    make(x, y, width, health=0) {
        this.x = x
        this.y = y
        this.width = width

        // health bar base/background
        this.bgBar = this.scene.add.rectangle(0, 0, width + 4, 6, 0x000000)
        this.add(this.bgBar)

        // visualization of health losses
        this.slowHealthBar = this.scene.add.rectangle(
            0, 0,
            width, 4,
            0xff4444
        )
        this.add(this.slowHealthBar)
        
        // health bar itself
        this.healthBar = this.scene.add.rectangle(
            0, 0,
            width, 4,
            0x44ff44
        )
        this.add(this.healthBar)

        this.health = health
        this.slowHealth = health
    }

    set health(h) {
        this._health = Math.max(0, Math.min(1, h))
    }

    get health() {
        return this._health
    }

    update(delta) {
        const coef = Math.pow(0.99, delta/1000 * 60)
        this.slowHealth = coef * this.slowHealth + (1 - coef) * this.health

        this.healthBar.width = this.width * this.health
        this.slowHealthBar.width = this.width * this.slowHealth
    }
}