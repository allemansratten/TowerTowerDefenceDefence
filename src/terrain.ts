import { TDScene } from "./scenes/sample"

export enum TileType {
    Start, Path, End, Empty, Buildable
}

export const TILE_SIZE = 64

export class Terrain {
    tiles: Array<Array<TileType>>
    path: Phaser.Curves.Path

    private level: number; // I know this is terrible, I'm sorry

    // todo: generate/load terrain
    constructor(level: number) {
        this.level = level;

        if (level == 0) {
            this.tiles = [
                [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, -1, -1, -1, -1, -1, -1, -1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, -1, 0, 0]];
        } else {
            this.tiles = [
                [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, -1, 0, 0, 0, 0, 0, 0, 0, 0]];
        }
    }

    create(scene: TDScene, n: integer) {

        if (this.level == 0) {
            this.path = scene.add.path(96, -32);
            this.path.lineTo(96, 164);
            this.path.lineTo(480, 164);
            this.path.lineTo(480, 544);
        } else {
            this.path = scene.add.path(500+96, -32);
            this.path.lineTo(500+96, 544);
        }

        // this.tiles = new Array(n)
        //     .fill(false)
        //     .map(() => new Array(n)
        //         .fill(TileType.Empty));

        // this.tiles[1][0] = TileType.Buildable;
    }

    draw(graphics) {
        this.drawGrid(graphics)

        graphics.lineStyle(3, 0xffffff, 1);
        // visualize the path
        this.path.draw(graphics);
    }

    drawGrid(graphics) {
        graphics.lineStyle(1, 0x0000ff, 0.8);
        for (var i = 0; i < 8; i++) {
            graphics.moveTo(this.level*500 + 0, i * TILE_SIZE);
            graphics.lineTo(this.level*500 + TILE_SIZE * 10, i * TILE_SIZE);
        }
        for (var j = 0; j < 10; j++) {
            graphics.moveTo(this.level*500 + j * TILE_SIZE, 0);
            graphics.lineTo(this.level*500 + j * TILE_SIZE, TILE_SIZE * 8);
        }
        graphics.strokePath();
    }


    public canPlaceTower(i, j) {
        return this.tiles[i][j] === 0;
    }
}
