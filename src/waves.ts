import { TDScene } from "./scenes/tdScene";
// import { Enemy, FatEnemy} from "./enemy";

export class WaveManager {
    scene: TDScene
    currentWave: integer = 0
    nextEnemy: integer = 0
    spawnedEnemies: integer = 0
    deadEnemies: integer = 0

    numEnemies: integer
    enemyInterval: integer

    constructor(scene) {
        this.scene = scene;
        if (this.scene.sceneLevel === 0)
            this.getWaveDifficulty();
        else
            this.getNestedWaveDifficulty();
    }

    private getNestedWaveDifficulty() {
        //TODO: add difficulty scaling for nested levels
        this.enemyInterval = 500;
    }

    private getWaveDifficulty() {
        //TODO: add difficulty scaling and balancing for waves
        this.numEnemies = this.currentWave;
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
        if ((this.scene.sceneLevel > 0 || this.spawnedEnemies < this.numEnemies) && time > this.nextEnemy) {
            if (this.currentWave % 2 === 0) {
                var enemy = this.scene.allEnemies['FatEnemy'].get();
            } else {
                var enemy = this.scene.allEnemies['BasicEnemy'].get();
            }
            if (enemy) {
                enemy.setActive(true);
                enemy.setVisible(true);

                // place the enemy at the start of the path
                enemy.startOnPath();
                this.spawnedEnemies++;

                this.nextEnemy = time + this.enemyInterval;
            }
        }
        if (this.scene.sceneLevel === 0 && this.deadEnemies === this.numEnemies) {
            this.nextWave();  // no waves in nested layers
        }
    }
}
