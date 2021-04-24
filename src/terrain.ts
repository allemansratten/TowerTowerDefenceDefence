import { TDScene } from "./scenes/sample"

export enum TileType {
    Start, Path, End, Occupied, Buildable
}

export const TILE_SIZE = 64
export const LEVEL_OFFSET = 15 * TILE_SIZE

type GridPos = [integer, integer]

export class Terrain {
    tiles: Array<Array<TileType>>
    path: Phaser.Curves.Path

    private level: number; // I know this is terrible, I'm sorry
    w: number
    h: number

    // todo: generate/load terrain
    constructor(level: integer, width: integer, height: integer) {
        this.level = level;
        this.w = width
        this.h = height
    }

    create() {
        this.generate()
    }

    private offset() {
        return 0;
    }

    draw(graphics: Phaser.GameObjects.Graphics) {
        this.drawGrid(graphics)

        graphics.lineStyle(3, 0xffffff, 1);
        // visualize the path
        this.path.draw(graphics);
    }

    drawGrid(graphics: Phaser.GameObjects.Graphics) {
        graphics.lineStyle(1, 0x0000ff, 0.8);

        for (var i = 0; i < this.h; i++) {
            graphics.moveTo(this.offset() + 0, i * TILE_SIZE);
            graphics.lineTo(this.offset() + TILE_SIZE * 10, i * TILE_SIZE);
        }
        for (var j = 0; j < this.w; j++) {
            graphics.moveTo(this.offset() + j * TILE_SIZE, 0);
            graphics.lineTo(this.offset() + j * TILE_SIZE, TILE_SIZE * 8);
        }
        graphics.strokePath();
    }

    public canPlaceTower(i: integer, j: integer) {
        return this.tiles[i][j] === TileType.Buildable;
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

        this.tiles = new Array(this.w)
            .fill(false)
            .map(() => new Array(this.h)
                .fill(TileType.Buildable));
                
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

        console.log("Generated terrain with offset is", this.offset())

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
        res = res.filter(p => p[0] >= pad
            && p[0] < this.w - pad
            && p[1] >= pad
            && p[1] < this.h - pad
        )
        return res
    }

    fromGridPos(i: integer, j: integer) {
        return [(i + 0.5) * TILE_SIZE + this.offset(), (j + 0.5) * TILE_SIZE]
    }
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)]
}
