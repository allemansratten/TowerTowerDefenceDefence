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


}

export class TowerConfig {
    static Basic: { [key:string]: any } = {
        'damage': 10,
        'firerate': 1,
        'range': 150,
        'price': 5,
        'spriteBase': 'towerbase',
        'spriteMid': 'towermid',
        'spriteTop': 'towertop0',
        'tintBase': 0xffffff,
        'tintMid': 0xffffff,
        'tintTop': 0xffffff,
    }


}
