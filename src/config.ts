import * as enem from "./enemy";

// enemy damage * DAMAGE_TO_TOWER_HEALTH_COEF = how much health tower loses
// (tower health is from 0 to 1)
export const DAMAGE_TO_TOWER_HEALTH_COEF = 0.2

export const TOWER_HEALTH_REGEN = 0.00001 * 2

export const PAUSE_AFTER_WAVE_TIME = 3000;

export const RANGE_INDICATOR_CONFIG = {
    'colour': 0xbbbbff,
    'alpha': 210,
    'edgeColour': 0x8080ff,
    'edgeWidth': 4
};

export const WaveConfig = {
    // ------------------- outer -----------------------
    // How much time between consecutive spawns in a wave
    outerEnemyInterval: 500,
    // How much danger in a wave
    outerWaveDanger: (wave) => wave * 10,

    // ------------------- inner -----------------------
    // How much danger per second is generatee in inner depths?
    dangerPerSec: (level) => 5+ level*3,
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
    'hp': 70,
    'speed': 1 / 40000,
    'money': 2,
    'damage': 1,
    'armor': 0,
    'danger': 120,
    // 'spriteName': 'fatEnemy',
    'spriteName': 'enemy1',
    'tint': 0x0000ff,
}

export const Armoured: EnemyConfig = {
    'name': 'Armoured',
    'class': enem.ArmouredEnemy,
    'hp': 30,
    'speed': 1 / 30000,
    'money': 2,
    'damage': 1,
    'armor': 2,
    'danger': 80,
    'spriteName': 'enemy1',
    'tint': 0xaaaaff,
}

export const Fast: EnemyConfig = {
    'name': 'Fast',
    'class': enem.FastEnemy,
    'hp': 20,
    'speed': 1 / 10000,
    'money': 1,
    'damage': 1,
    'armor': 0,
    'danger': 40,
    'spriteName': 'enemy1',
    'tint': 0xff00aa,
}

export const ENEMY_CONFIGS = [Weak, Fat, Armoured, Fast]


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
    'damage': level => 5 + 2 * level,
    'firerate': level => Math.max( 1500 - 50 * level, 1000),
    'range': level => 165,
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
    'damage': level => 15 + 5 * level,
    'firerate': level => 4000,
    'range': level => 200 + 25 * level,
    'bulletSpeedMod': 5,
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
    'damage': level => 6 + level,
    'firerate': level => Math.max(1300 - 50*level, 1000),
    'range': level => 90,
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