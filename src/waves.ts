import { EnemyConfig, PAUSE_AFTER_WAVE_TIME, ENEMY_CONFIGS, WaveConfig } from "./config";
import { PlayerInfo } from "./playerInfo";
import { TDScene } from "./scenes/tdScene";
// import { Enemy, FatEnemy} from "./enemy";


export class WaveManager {
    scene: TDScene
    currentWave: integer = 0
    nextEnemy: integer = 0
    deadDanger: integer = 0
    remainingDanger: integer = 0
    waveDifficulty: integer = 0

    waveActive: boolean  // false for nested waves
    nextWaveTime: integer = 0
    respawnQueue: [EnemyConfig, integer][] = [];
    respawnHealth: integer  // zero unless respawning enemy, hack

    enemyInterval: integer

    queuedEnemy: any

    constructor(scene) {
        this.scene = scene;

        // set false for nested behavior in update()
        this.waveActive = (this.scene.sceneLevel > 0);

        if (this.scene.sceneLevel === 0)
            this.getWaveDifficulty();
        else {
            this.lastTime = 1e9 // a lot
        }

    }

    private getWaveDifficulty() {
        //TODO: add difficulty scaling and balancing for waves
        this.waveDifficulty = WaveConfig.outerWaveDanger(this.currentWave)
        this.remainingDanger = this.waveDifficulty
        this.enemyInterval = WaveConfig.outerEnemyInterval
    }

    private nextWave() {
        this.waveActive = true;
        this.currentWave++;
        this.getWaveDifficulty();
        PlayerInfo.waveHealthRegen();
        console.log('Starting wave ' + this.currentWave + ', wave difficulty: ' + this.waveDifficulty);
    }

    private spawnEnemy() {
        if (this.respawnQueue.length > 0) {
            let respawn = this.respawnQueue.shift();
            console.log(respawn);
            this.respawnHealth = respawn[1];
            this.remainingDanger -= respawn[0].danger;
            return this.scene.allEnemies[respawn[0].name].get();
        }

        let randEnemy = this.getRandEnemy((enemy) => {
            return (enemy.danger <= this.remainingDanger) && (enemy.minWave <= this.currentWave)
        });

        if (randEnemy) {
            this.remainingDanger -= randEnemy.danger;
            return this.scene.allEnemies[randEnemy.name].get();
        }

        this.remainingDanger = 0;
        return null;
    }

    public respawn(respawn: EnemyConfig, remainingHealth: integer) {
        this.respawnQueue.push([respawn, remainingHealth]);
    }


    lastTime: number = 0
    public update(delta) {
        this.lastTime += delta
        let enemy
        if (this.scene.sceneLevel === 0) {
            if (!this.waveActive && this.lastTime > this.nextWaveTime) {
                this.nextWave();  // no waves in nested layers
            }
            if (this.remainingDanger > 0 && this.lastTime > this.nextEnemy) {
                enemy = this.spawnEnemy();
            }
            if (this.deadDanger === this.waveDifficulty) {
                console.log("Wave " + this.currentWave + " complete! Next wave in " + PAUSE_AFTER_WAVE_TIME);
                this.deadDanger = 0;
                this.waveActive = false;
                this.nextWaveTime = this.lastTime + PAUSE_AFTER_WAVE_TIME;
            }
        } else {
            if (!this.queuedEnemy) {
                this.queuedEnemy = this.getRandEnemy(() => true)
            }

            const a = this.lastTime * (WaveConfig.dangerPerSec(this.scene.getTowerParent().level) * 0.001)
            const b = (this.queuedEnemy.danger * 1.0)
            if (a > b) {
                enemy = this.scene.allEnemies[this.queuedEnemy.name].get();
                // console.log(this.lastTime, b)
                this.queuedEnemy = null
                this.lastTime = 0
            }
        }

        if (enemy) {
            enemy.setActive(true);
            enemy.setVisible(true);

            // place the enemy at the start of the path
            enemy.startOnPath(this.currentWave, this.respawnHealth);
            this.respawnHealth = 0;

            this.nextEnemy = this.lastTime + this.enemyInterval;
        }
    }

    private getRandEnemy(filter_fn): EnemyConfig {
        let availEnemies = []
        for(let enemy of ENEMY_CONFIGS) {  // Select all enemies that can be spawned
            if (enemy.minWave >= 0 && filter_fn(enemy))
                availEnemies.push(enemy);
        }

        if (availEnemies.length > 0) {
            // Pick a random one of them
            let randEnemy = availEnemies[Math.floor(PlayerInfo.RNG.frac() * availEnemies.length)];
            return randEnemy
        } else {
            return null
        }
    }
}
