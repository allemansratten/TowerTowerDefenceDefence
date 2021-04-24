import { TDScene } from "./scenes/tdScene";

export class WaveManager {
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
        this.scene = scene;
        this.getWaveDifficulty()
    }

    private getWaveDifficulty() {
        //TODO: add difficulty scaling and balancing for waves
        this.numEnemies = this.currentWave+50;
        this.enemyHealth = 20;
        this.enemySpeed = 1/20000;
        this.enemyInterval = 200;
    }

    private nextWave() {
        this.deadEnemies = 0;
        this.spawnedEnemies = 0;
        this.currentWave++;
        console.log('Starting wave ' + this.currentWave);
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
