import * as enem from "./enemy";

// enemy damage * DAMAGE_TO_TOWER_HEALTH_COEF = how much health tower loses
// (tower health is from 0 to 1)
export const DAMAGE_TO_TOWER_HEALTH_COEF = 0.4

export const TOWER_HEALTH_REGEN = 0.00001 * 2

export const PAUSE_AFTER_WAVE_TIME = 3000;

export const PLAYER_HEALTH_REGEN: number = 0;  // how much health per wave, can be < 1

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
    outerWaveDanger: (wave) => (wave +1)  * 10,

    // ------------------- inner -----------------------
    // How much danger per second is generatee in inner depths?
    dangerPerSec: (level) => 10*level,
    // To what wave number does a tower level correspond? (for enemy scaling)
    levelToWave: (level) => 3 * level,
}

export type EnemyConfig = {
    name: string  // must be same as config object name
    displayName: string  // name to be displayed to player
    class: any  // class of the enemy as defined in ./enemy.ts
    hp: (integer) => integer  // can scale with wave
    speed: number  // fraction of path
    money: integer  // on-kill reward
    damage: integer  // damage dealt on reaching end
    armour: (integer) => integer  // flat reduction of incoming damage
    danger: integer  // for calculating wave difficulty
    spriteName: string  // sprite as imported in metaScene.preload
    tint: integer
    split?: {  // optional split info
        cfg: EnemyConfig  // TODO: make split into multiple types possible?
        amount: integer
    }
    minWave: integer  // first wave this can spawn, -1 to never spawn
    blurb?: string  // shown to player
}

export const Weak: EnemyConfig = {
    'name': 'Weak',
    'displayName': 'Normal',
    'class': enem.WeakEnemy,
    'hp': (wave) => 20 + 9*(wave-1),
    'speed': 1 / 20000,
    'money': 1,
    'damage': 1,
    'armour': (wave) => 0,
    'spriteName': 'weakEnemy',
    'danger': 10,
    'tint': 0xffffff,
    'minWave': 0,
    'blurb': 'Too cute to kill... surely.'
}

export const Fat: EnemyConfig = {
    'name': 'Fat',
    'displayName': 'Chonk',
    'class': enem.FatEnemy,
    'hp': (wave) => 100 + 45 * (wave-1),
    'speed': 1 / 40000,
    'money': 2,
    'damage': 1,
    'armour': (wave) => 0,
    'danger': 100,
    'spriteName': 'fatEnemy',
    'tint': 0xffffff,
    'minWave': 14,
	'blurb': 'Large and in charge.'
}

export const Armoured: EnemyConfig = {
    'name': 'Armoured',
    'displayName': 'Armoured',
    'class': enem.ArmouredEnemy,
    'hp': (wave) => 20 + 9*(wave-1),
    'speed': 1 / 30000,
    'money': 2,
    'damage': 1,
    'armour': (wave) => Math.min(3 + (Math.floor(wave/5)),14),
    'danger': 100,
    'spriteName': 'armouredEnemy',
    'tint': 0xffffff,
    'minWave': 10,
	'blurb': 'The hat is surprisingly sturdy.'
}

export const Fast: EnemyConfig = {
    'name': 'Fast',
    'displayName': 'Speedy',
    'class': enem.FastEnemy,
    'hp': (wave) => 15 + 7*(wave-1),
    'speed': 1 / 10000,
    'money': 1,
    'damage': 1,
    'armour': (wave) => 0,
    'danger': 30,
    'spriteName': 'fastEnemy',
    'tint': 0xffffff,
    'minWave': 6,
	'blurb': 'The boots aren\'t just for show!'
}

export const SplitterSmall: EnemyConfig = {
    'name': 'SplitterSmall',
    'displayName': 'Splitter baby',
    'class': enem.SplitterSmallEnemy,
    'hp': (wave) => 10+5*(wave-1),
    'speed': 1 / 20000,
    'money': 0,
    'damage': 1,
    'armour': (wave) => 0,
    'danger': 20,
    'spriteName': 'splitterSmallEnemy',
    'tint': 0xffffff,
    'minWave': -1,
	'blurb': 'Aww, look, they\'re just babies!'
}

export const SplitterBig: EnemyConfig = {
    'name': 'SplitterBig',
    'displayName': 'Splitter',
    'class': enem.SplitterBigEnemy,
    'hp': (wave) => 20 + 7*(wave-1),
    'speed': 1 / 30000,
    'money': 1,
    'damage': 1,
    'armour': (wave) => 0,
    'danger': 30,
    'spriteName': 'splitterBigEnemy',
    'tint': 0xffffff,
    'split': {
        'cfg': SplitterSmall,
        'amount': 2
    },
    'minWave': 8,
	'blurb': 'Eyes to meet you.'
}



export const ENEMY_CONFIGS = [Weak, Fat, Armoured, Fast, SplitterBig, SplitterSmall]


export type TowerConfig = {
    name: string
    damage: (integer) => number
    firerate: (integer) => number  // miliseconds between each shot
    range: (integer) => number
    numTargets?: (integer) => integer  // set for towers that target multiple enemies
    bulletSpeedMod: number  // bullet will reach range in 1/bulletSpeedMod seconds
    price: number
    spriteBase: integer
    spriteMid: integer
    spriteTop: integer
    tintBase: integer
    tintMid: integer
    tintTop: integer
    description: string,
}

export const Basic: TowerConfig = {
    'name': "Basic",
    'damage': level => 15 + 30 * (level-1),
    'firerate': level => 1000,
    'range': level => 125,
    'bulletSpeedMod': 4,
    'price': 5,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 0,
    'tintBase': 0xffffff,
    'tintMid': 0x675a9c,
    'tintTop': 0xaaaaff,
    'description': "Nothing fancy. Damage grows with level.",
}


export const Sniper: TowerConfig = {
    'name': "Sniper",
    'damage': level => 25 + 50 * (level-1),
    'firerate': level => 4000,
    'range': level => 200 + 35 * level,
    'bulletSpeedMod': 5,
    'price': 20,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 1,
    'tintBase': 0xffffff,
    'tintMid': 0x3a715d,
    'tintTop': 0x48ac81,
    'description': "Long range, but fires slowly. Damage and range grow with level.",
}


export const Multishot: TowerConfig = {
    'name': "Multishot",
    'damage': level => 5 + 15*(level-1),
    'firerate': level => 800,
    'range': level => 90,
    'numTargets': level => 3,
    'bulletSpeedMod': 4,
    'price': 10,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 2,
    'tintBase': 0xffffff,
    'tintMid': 0x7f4d61,
    'tintTop': 0xaa4e61,
    'description': "Can shoot at multiple enemies at once. Damage and fire rate grow with level.",
}

export const TOWER_CONFIGS = [Basic, Multishot, Sniper]