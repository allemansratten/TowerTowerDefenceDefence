export class EnemyConfig {
    static Basic: { [key:string]: any } = {
        'hp': 20,
        'speed': 1/20000,
        'money': 1,
        'damage': 1,
        'armor': 0,
        'danger': 10,
        'spriteName': 'enemy1',
    }

    static Fat: { [key:string]: any } = {
        'hp': 50,
        'speed': 1/40000,
        'money': 2,
        'damage': 1,
        'armor': 0,
        'danger': 30,
        'spriteName': 'enemy1',
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
    }


}
