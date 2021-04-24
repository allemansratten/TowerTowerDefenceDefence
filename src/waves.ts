import { Enemy } from "./enemy"
import { SampleScene } from "./scenes/sample";

export class WaveManager extends Phaser.GameObjects.GameObjectFactory {
    scene: SampleScene
    currentWave: integer = 0
    nextEnemy: integer = 0

    numEnemies: integer
    enemyHealth: integer
    enemySpeed: number
    enemyInterval: integer

    constructor(scene) {
        super(scene)
        this.getWaveDifficulty()
    }

    private getWaveDifficulty() {
        //TODO: add difficulty scaling and balancing for waves
        this.numEnemies = this.currentWave + 1;
        this.enemyHealth = 20;
        this.enemySpeed = 1/10000;
        this.enemyInterval = 500;
    }

    public update(time, delta) {
        if (time > this.nextEnemy) {
            var enemy = this.scene.enemies.get();
            if (enemy) {
                enemy.setActive(true);
                enemy.setVisible(true);

                // place the enemy at the start of the path
                enemy.startOnPath(this, this.enemySpeed, this.enemyHealth);

                this.nextEnemy = time + this.enemyInterval;
            }
        }
    }
}
