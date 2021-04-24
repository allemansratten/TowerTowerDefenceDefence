import { TDScene } from "./scenes/sample"

export enum TileType {
    Start, Path, End, Empty, Buildable
}

export const TILE_SIZE = 64

export class Terrain {
    tiles: Array<Array<TileType>>
    path: Phaser.Curves.Path

    // todo: generate/load terrain
    constructor() {
        this.tiles = [
            [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, -1, -1, -1, -1, -1, -1, -1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, -1, 0, 0]];
    }

    create(scene: TDScene, n: integer){
        this.path = scene.add.path(96, -32);
        this.path.lineTo(96, 164);
        this.path.lineTo(480, 164);
        this.path.lineTo(480, 544);
    
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
            graphics.moveTo(0, i * TILE_SIZE);
            graphics.lineTo(TILE_SIZE * 10, i * TILE_SIZE);
        }
        for (var j = 0; j < 10; j++) {
            graphics.moveTo(j * TILE_SIZE, 0);
            graphics.lineTo(j * TILE_SIZE, TILE_SIZE * 8);
        }
        graphics.strokePath();
    }


    public canPlaceTower(i, j) {
        return this.tiles[i][j] === 0;
    }
}
