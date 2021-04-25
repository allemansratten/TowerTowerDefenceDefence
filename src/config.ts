// enemy damage * DAMAGE_TO_TOWER_HEALTH_COEF = how much health tower loses
// (tower health is from 0 to 1)
export const DAMAGE_TO_TOWER_HEALTH_COEF = 0.2

export const TOWER_HEALTH_REGEN = 0.00001 * 2

export class EnemyConfig {
    static Basic: { [key:string]: any } = {
        'hp': 20,
        'speed': 1/20000,
        'money': 1,
        'damage': 1,
        'armor': 0,
        'danger': 10,
        'spriteName': 'enemy1',
        'tint': 0xffffff,
    }

    static Fat: { [key:string]: any } = {
        'hp': 50,
        'speed': 1/40000,
        'money': 2,
        'damage': 1,
        'armor': 0,
        'danger': 30,
        'spriteName': 'fatEnemy',
        'tint': 0xffffff,
    }

    static Armoured: { [key:string]: any } = {
        'hp': 20,
        'speed': 1/30000,
        'money': 2,
        'damage': 1,
        'armor': 2,
        'danger': 30,
        'spriteName': 'enemy1',
        'tint': 0xaaaaff,
    }


}

export class TowerConfig {
    static Basic: { [key:string]: any } = {
        'damage': 10,
        'firerate': 1,
        'range': 150,
        'price': 5,
        'spriteBase': 0,
        'spriteMid': 0,
        'spriteTop': 0,
        'tintBase': 0xffffff,
        'tintMid': 0xffffff,
        'tintTop': 0xffffff,
    }

    static Multishot: { [key:string]: any } = {
        'damage': 5,
        'firerate': 1,
        'range': 100,
        'price': 10,
        'spriteBase': 0,
        'spriteMid': 0,
        'spriteTop': 2,
        'tintBase': 0xffffff,
        'tintMid': 0xffffff,
        'tintTop': 0xff0000,
    }
}
