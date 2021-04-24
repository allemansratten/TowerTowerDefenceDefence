import { Enemy } from "./enemy"
import { TDScene } from "./scenes/sample";

export class WaveManager extends Phaser.GameObjects.GameObjectFactory {
    scene: TDScene
    currentWave: integer = 1
    nextEnemy: integer = 0
    spawnedEnemies: integer = 0
    deadEnemies: integer = 0

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
        this.numEnemies = this.currentWave;
        this.enemyHealth = 20;
        this.enemySpeed = 1/15000;
        this.enemyInterval = 300;
    }

    private nextWave() {
        this.deadEnemies = 0;
        this.spawnedEnemies = 0;
        this.currentWave++;
        this.scene.waveText.setText('Wave: ' + this.currentWave);
        this.getWaveDifficulty();
    }

    public update(time, delta) {
        if (this.spawnedEnemies < this.numEnemies && time > this.nextEnemy) {
            var enemy = this.scene.enemies.get();
            if (enemy) {
                enemy.setActive(true);
                enemy.setVisible(true);

                // place the enemy at the start of the path
                enemy.startOnPath(this.enemySpeed, this.enemyHealth);
                this.spawnedEnemies++;

                this.nextEnemy = time + this.enemyInterval;
            }
        }
        if (this.deadEnemies === this.numEnemies) {
            //next wave
            this.nextWave();
        }
    }
}
