import * as Phaser from 'phaser'
import { TDScene } from './scenes/sample'
import { Terrain } from './terrain';

// const gameConfig: Phaser.Types.Core.GameConfig = {
//   title: 'Sample',

//   type: Phaser.AUTO,

//   scale: {
//     width: 800,
//     height: 400,
//   },

//   parent: 'content',
//   backgroundColor: '#333',

//   scene: SampleScene,
// };

let level1Terrain = new Terrain()

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 640,
  height: 512,
  physics: {
    default: 'arcade'
  },
  scene: [new TDScene(level1Terrain)]
};

export const game = new Phaser.Game(gameConfig);