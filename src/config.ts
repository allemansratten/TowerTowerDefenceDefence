import * as enem from "./enemy";

// enemy damage * DAMAGE_TO_TOWER_HEALTH_COEF = how much health tower loses
// (tower health is from 0 to 1)
export const DAMAGE_TO_TOWER_HEALTH_COEF = 0.2

export const TOWER_HEALTH_REGEN = 0.00001 * 2

export const PAUSE_AFTER_WAVE_TIME = 3000;

export const WaveConfig = {
    // ------------------- outer -----------------------
    // How much time between consecutive spawns in a wave
    outerEnemyInterval: 500,
    // How much danger in a wave
    outerWaveDanger: (wave) => wave * 10,

    // ------------------- inner -----------------------
    // How much danger per second is generatee in inner depths?
    dangerPerSec: (level) => level * 5,
}

export type EnemyConfig = {
    name: string
    class: any
    hp: integer
    speed: number
    money: integer
    damage: integer
    armor: integer
    danger: integer
    spriteName: string
    tint: integer
}

export const Weak: EnemyConfig = {
    'name': 'Weak',
    'class': enem.WeakEnemy,
    'hp': 20,
    'speed': 1 / 20000,
    'money': 1,
    'damage': 1,
    'armor': 0,
    'danger': 10,
    'spriteName': 'enemy1',
    'tint': 0xffffff,
}

export const Fat: EnemyConfig = {
    'name': 'Fat',
    'class': enem.FatEnemy,
    'hp': 50,
    'speed': 1 / 40000,
    'money': 2,
    'damage': 1,
    'armor': 0,
    'danger': 30,
    'spriteName': 'fatEnemy',
    'tint': 0xffffff,
}

export const Armoured: EnemyConfig = {
    'name': 'Armoured',
    'class': enem.ArmouredEnemy,
    'hp': 20,
    'speed': 1 / 30000,
    'money': 2,
    'damage': 1,
    'armor': 2,
    'danger': 30,
    'spriteName': 'enemy1',
    'tint': 0xaaaaff,
}

export const ENEMY_CONFIGS = [Weak, Fat, Armoured]


export type TowerConfig = {
    name: string
    damage: (integer) => number
    firerate: (integer) => number
    range: (integer) => number
    bulletSpeedMod: number
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
    'bulletSpeedMod': 4,
    'price': 5,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 0,
    'tintBase': 0xffffff,
    'tintMid': 0xffffff,
    'tintTop': 0xaaaaff,
}


export const Sniper: TowerConfig = {
    'name': "Sniper",
    'damage': level => 20 * level,
    'firerate': level => 4000,
    'range': level => 300,
    'bulletSpeedMod': 3.5,
    'price': 20,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 1,
    'tintBase': 0xbbffbb,
    'tintMid': 0xffffff,
    'tintTop': 0x00ff00,
}


export const Multishot: TowerConfig = {
    'name': "Multishot",
    'damage': level => 5 * level,
    'firerate': level => 1000,
    'range': level => 100,
    'bulletSpeedMod': 4,
    'price': 10,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 2,
    'tintBase': 0xffffff,
    'tintMid': 0xffffff,
    'tintTop': 0xff0000,
}

export const TOWER_CONFIGS = [Basic, Multishot, Sniper]