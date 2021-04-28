import { PLAYER_HEALTH_REGEN } from "./config";

export class PlayerInfo {
    static money: number = 10;
    static hp: number = 10;
    static timeScale: number = 1;
    // static RNG = new Phaser.Math.RandomDataGenerator(["42"]);
    static RNG = new Phaser.Math.RandomDataGenerator();

    static regenProgress: number = 0;

    public static waveHealthRegen() {
        PlayerInfo.regenProgress += PLAYER_HEALTH_REGEN;
        let restored = Math.floor(PlayerInfo.regenProgress);
        PlayerInfo.hp += restored;
        PlayerInfo.regenProgress -= restored;
    }
}