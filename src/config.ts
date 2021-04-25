// enemy damage * DAMAGE_TO_TOWER_HEALTH_COEF = how much health tower loses
// (tower health is from 0 to 1)
export const DAMAGE_TO_TOWER_HEALTH_COEF = 0.2

export const TOWER_HEALTH_REGEN = 0.00001 * 2

export const PAUSE_AFTER_WAVE_TIME = 3000;

export class EnemyConfig {
    static Basic = {
        'hp': 20,
        'speed': 1 / 20000,
        'money': 1,
        'damage': 1,
        'armor': 0,
        'danger': 10,
        'spriteName': 'enemy1',
        'tint': 0xffffff,
    }

    static Fat = {
        'hp': 50,
        'speed': 1 / 40000,
        'money': 2,
        'damage': 1,
        'armor': 0,
        'danger': 30,
        'spriteName': 'fatEnemy',
        'tint': 0xffffff,
    }

    static Armoured: { [key: string]: any } = {
        'hp': 20,
        'speed': 1 / 30000,
        'money': 2,
        'damage': 1,
        'armor': 2,
        'danger': 30,
        'spriteName': 'enemy1',
        'tint': 0xaaaaff,
    }


}

export type TowerConfig = {
    name: string
    damage: (integer) => number
    firerate: (integer) => number
    range: (integer) => number
    price: number
    spriteBase: integer
    spriteMid: integer
    spriteTop: integer
    tintBase: integer
    tintMid: integer
    tintTop: integer
}

export const Basic: TowerConfig = {
    'name': "Basic",
    'damage': level => 10 * level,
    'firerate': level => 1000,
    'range': level => 150,
    'price': 5,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 0,
    'tintBase': 0xffffff,
    'tintMid': 0xffffff,
    'tintTop': 0xffffff,
}

export const Multishot: TowerConfig = {
    'name': "Multishot",
    'damage': level => 5 * level,
    'firerate': level => 1000,
    'range': level => 100,
    'price': 10,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 2,
    'tintBase': 0xffffff,
    'tintMid': 0xffffff,
    'tintTop': 0xff0000,
}

export const TOWER_CONFIGS = [Basic, Multishot]