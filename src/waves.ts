import { EnemyConfig, PAUSE_AFTER_WAVE_TIME } from "./config";
import { PlayerInfo } from "./playerInfo";
import { TDScene } from "./scenes/tdScene";
// import { Enemy, FatEnemy} from "./enemy";


export class WaveManager {
    scene: TDScene
    currentWave: integer = 0
    nextEnemy: integer = 0
    spawnedEnemies: integer = 0
    deadDanger: integer = 0
    remainingDanger: integer = 0
    waveDifficulty: integer = 0  // MUST BE MULTIPLE OF 10!

    waveActive: boolean  // false for nested waves
    nextWaveTime: integer = 0

    enemyInterval: integer

    constructor(scene) {
        this.scene = scene;

        // set false for nested behavior in update()
        this.waveActive = (this.scene.sceneLevel > 0);

        if (this.scene.sceneLevel === 0)
            this.getWaveDifficulty();
        else
            this.getNestedWaveDifficulty();
    }

    private getNestedWaveDifficulty() {
        //TODO: add difficulty scaling for nested levels
        this.enemyInterval = 2000;
    }

    private getWaveDifficulty() {
        //TODO: add difficulty scaling and balancing for waves
        this.waveDifficulty = this.currentWave * 10;  // MUST BE MULTIPLE OF 10!
        this.remainingDanger = this.waveDifficulty;
        this.enemyInterval = 200;
    }

    private nextWave() {
        this.waveActive = true;
        this.currentWave++;
        this.getWaveDifficulty();
        console.log('Starting wave ' + this.currentWave + ', wave difficulty: ' + this.waveDifficulty);
    }

    private spawnEnemy() {
        let availEnemies = []
        for(let enemyType in EnemyConfig) {  // Select all enemies that can be spawned
            let enemy = EnemyConfig[enemyType];
            if (enemy.danger <= this.remainingDanger)
                availEnemies.push([enemyType, enemy]);
        }
        if (availEnemies.length > 0) {  // Pick a random one of them
            let randEnemy = availEnemies[Math.floor(PlayerInfo.RNG.frac()*availEnemies.length)];
            // console.log("Spawning: " + randEnemy[0] + ", danger: " + randEnemy[1].danger);
            this.remainingDanger -= randEnemy[1].danger;
            return this.scene.allEnemies[randEnemy[0] + 'Enemy'].get();
        }

        console.log('No available enemy to spawn, spawning Basic!');
        return this.scene.allEnemies['BasicEnemy'].get();
    }

    lastTime: number = 0
    public update(delta) {
        this.lastTime += delta
        if (!this.waveActive && this.lastTime > this.nextWaveTime) {
            this.nextWave();  // no waves in nested layers
        } else {
            if ((this.scene.sceneLevel > 0 || this.remainingDanger > 0) && this.lastTime > this.nextEnemy) {
                if  (this.scene.sceneLevel > 0)
                    var enemy = this.scene.allEnemies['BasicEnemy'].get();
                else
                    var enemy = this.spawnEnemy();

                if (enemy) {
                    enemy.setActive(true);
                    enemy.setVisible(true);

                    // place the enemy at the start of the path
                    enemy.startOnPath();
                    this.spawnedEnemies++;
                    this.nextEnemy = this.lastTime + this.enemyInterval;
                }
            }
            if (this.scene.sceneLevel === 0 && this.deadDanger === this.waveDifficulty) {
                console.log("Wave complete! Next wave in " + PAUSE_AFTER_WAVE_TIME);
                this.deadDanger = 0;
                this.waveActive = false;
                this.nextWaveTime = this.lastTime + PAUSE_AFTER_WAVE_TIME;
            }
        }
    }
}
