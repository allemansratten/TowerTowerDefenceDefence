export class EnemyConfig {
    static Basic: Map<string, number> = new Map([
        ['hp', 20],
        ['speed', 1/15000],
        ['money', 1],
        ['damage', 1],
        ['armor', 0],
    ])

    static Fat: Map<string, number> = new Map([
        ['hp', 50],
        ['speed', 1/25000],
        ['money', 2],
        ['damage', 2],
        ['armor', 0],
    ])


}