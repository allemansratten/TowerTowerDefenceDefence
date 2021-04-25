import { PlayerInfo } from "./playerInfo"
import { TDScene } from "./scenes/tdScene"
import { Tower } from "./towers"

export enum TileType {
    Start, Path, End, Occupied, Buildable
}

export const TILE_SIZE = 64
export const LEVEL_OFFSET = 15 * TILE_SIZE
export const MAX_WIDTH = 10
export const MAX_HEIGHT = 8

const N_TILESET_SPRITES = 10  // how many sprites are in the tileset?

type GridPos = [integer, integer]

export class Terrain {
    towers: Tower[][]
    tiles: TileType[][]

    tileSprites: integer[][]

    path: Phaser.Curves.Path  // The Phaser path (for enemy movement)
    pathTiles: GridPos[]  // The sequence of tiles making up the path

    tint: integer // color as a 24-bit int

    w: number
    h: number

    // todo: generate/load terrain
    constructor(width: integer, height: integer) {
        this.w = width
        this.h = height
    }

    create(scene: TDScene) {
        this.generate()
        this.setupSprites(scene)

        this.towers = init2DArray<Tower>(this.w, this.h, null)
    }

    setupSprites(scene: TDScene) {
        this.tileSprites = init2DArray(this.w, this.h, TileType.Buildable)

        for (let i = 0; i < this.w; i++) {
            for (let j = 0; j < this.h; j++) {
                this.tileSprites[i][j] = randomFreeSprite()
            }
        }

        const getDir = (pi: integer) => {
            // console.log(this.pathTiles, pi)
            let [i1, j1] = this.pathTiles[pi]
            let [i2, j2] = this.pathTiles[pi + 1]

            let [di, dj] = [i2 - i1, j2 - j1]
            if (di == 1) {
                return 0
            } else if (dj == -1) {
                return 1
            } else if (di == -1) {
                return 2
            } else if (dj == 1) {
                return 3
            }
            console.error("getDir failed")
            return null
        }

        for (let pi = 0; pi < this.pathTiles.length; pi++) {
            let [i1, j1] = this.pathTiles[pi]

            if (pi == 0) {
                this.tileSprites[i1][j1] = 6
            } else if (pi == this.pathTiles.length - 1) {
                this.tileSprites[i1][j1] = 7
            } else {
                let d1 = (getDir(pi - 1) + 2) % 4
                let d2 = getDir(pi)
                if (d1 > d2) {
                    [d1, d2] = [d2, d1]
                }
                // Order of sprites (02 meaning d1=0, d2=2):
                // 01 02 03 12 13 23
                if (d1 == 0) {
                    this.tileSprites[i1][j1] = d2 - 1
                } else if (d1 == 1) {
                    this.tileSprites[i1][j1] = d2 + 1
                } else if (d1 == 2) {
                    this.tileSprites[i1][j1] = 5 // only 23 left
                }
            }
        }

        this.tint = Phaser.Display.Color.GetColor(
            PlayerInfo.RNG.integerInRange(180, 255),
            PlayerInfo.RNG.integerInRange(180, 255),
            PlayerInfo.RNG.integerInRange(180, 255),
        )

        for (let i = 0; i < this.w; i++) {
            for (let j = 0; j < this.h; j++) {
                const [x, y] = this.fromGridPos(i, j)
                const sprite = scene.add.sprite(x, y, 'tileset', this.tileSprites[i][j]);
                if (this.tiles[i][j] == TileType.Buildable) {
                    sprite.setTint(this.tint)
                }
            }
        }
    }

    draw(graphics: Phaser.GameObjects.Graphics) {
        // this.drawGrid(graphics)

        graphics.lineStyle(3, 0xffffff, 1);
        // visualize the path
        this.path.draw(graphics);
    }

    drawGrid(graphics: Phaser.GameObjects.Graphics) {
        graphics.lineStyle(1, 0x0000ff, 0.8);

        for (let i = 0; i <= this.h; i++) {
            graphics.moveTo(0, i * TILE_SIZE);
            graphics.lineTo(TILE_SIZE * 10, i * TILE_SIZE);
        }
        for (let j = 0; j <= this.w; j++) {
            graphics.moveTo(j * TILE_SIZE, 0);
            graphics.lineTo(j * TILE_SIZE, TILE_SIZE * 8);
        }
        graphics.strokePath();
    }

    public canPlaceTower(i: integer, j: integer) {
        return this.inBounds(i, j) && this.tiles[i][j] === TileType.Buildable;
    }

    public tryGetExistingTower(i: integer, j: integer) {
        if (i < 0 || j < 0 || i >= this.w || j >= this.h) return null
        return this.towers[i][j];
    }

    public placeTower(i: integer, j: integer, tower: Tower) {
        if (i < 0 || j < 0 || i >= this.w || j >= this.h) return null

        this.tiles[i][j] = TileType.Occupied;
        return this.towers[i][j] = tower;
    }

    private generate(): number {
        let path = []

        let edges: GridPos[] = []
        for (let i = 1; i < this.w - 1; i++) {
            edges.push([i, 0])
            edges.push([i, this.h - 1])
        }
        for (let j = 1; j < this.h - 1; j++) {
            edges.push([0, j])
            edges.push([this.w - 1, j])
        }

        let success = false

        let attempts = 0
        while (!success) {
            let from = randomItem(edges)
            let to;
            do {
                to = randomItem(edges)
            } while (to == from)

            path = this.randomWalk(from, to)

            const minLength = 25
            if (path !== null && path.length >= minLength) {
                success = true
            }
            attempts++
            if (attempts == 400) break
        }

        console.log("Generated in", attempts, "attempts")

        this.tiles = init2DArray(this.w, this.h, TileType.Buildable)

        for (let i = 0; i < path.length; i++) {
            let [x, y] = this.fromGridPos(path[i][0], path[i][1])
            if (i == 0) {
                // altenatively: this.path = new Phaser.Curves.Path(...)
                // this.path = scene.add.path(x, y)
                this.path = new Phaser.Curves.Path(x, y)
                // scene.addObject(this.path)
            } else {
                this.path.lineTo(x, y)
            }

            let setTo = TileType.Path
            if (i == 0) {
                setTo = TileType.Start
            } else if (i == path.length - 1) {
                setTo = TileType.End
            }

            this.tiles[path[i][0]][path[i][1]] = setTo
        }

        console.log("Generated terrain.")

        this.pathTiles = path
        return path.length
    }

    private randomWalk(from: GridPos, to: GridPos): Array<GridPos> {
        let path = []
        let seen = new Set()

        const addToPath = (pos: GridPos) => {
            if (path.length > 0) {
                for (const banned of this.neighbors(path[path.length - 1])) {
                    seen.add(banned.toString())
                }
            }
            path.push(pos)
            seen.add(pos.toString())
        }

        addToPath(from)

        let steps = 0
        while (path[path.length - 1] != to) {
            steps++
            if (steps == 100) break
            let pos = path[path.length - 1]

            if (pos.toString() === to.toString()) {
                return path  // Success!
            }

            let cands = this.neighbors(pos)
            cands = cands.filter(p => !seen.has(p.toString()))

            if (cands.length === 0) {
                return null  // Fail!
            }
            let next = randomItem(cands)
            addToPath(next)
        }

        return path
    }

    private neighbors(pos: GridPos, pad = 0) {
        let res = [
            [pos[0] + 1, pos[1]],
            [pos[0] - 1, pos[1]],
            [pos[0], pos[1] + 1],
            [pos[0], pos[1] - 1],
        ]
        res = res.filter(p => this.inBounds(p[0], p[1]))

        return res
    }

    fromGridPos(i: integer, j: integer) {
        return [(i + 0.5) * TILE_SIZE, (j + 0.5) * TILE_SIZE]
    }

    inBounds(i: integer, j: integer, pad = 0) {
        return (i >= pad
            && i < this.w - pad
            && j >= pad
            && j < this.h - pad)
    }
}

function randomItem(array) {
    return array[Math.floor(PlayerInfo.RNG.frac() * array.length)]
}

function randomFreeSprite() {
    const nSpecialSprites = 8
    return nSpecialSprites + Math.floor(PlayerInfo.RNG.frac() * (N_TILESET_SPRITES - nSpecialSprites))
}

function init2DArray<TVal>(dim1, dim2, value: TVal): TVal[][] {
    return new Array(dim1)
        .fill(false)
        .map(() => new Array(dim2)
            .fill(value));
}