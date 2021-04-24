import * as Phaser from 'phaser'
import { TDScene } from './scenes/sample'
import { TDSceneConfig } from './scenes/tdSceneConfig';
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

let level0 = new TDSceneConfig(new Terrain(0))
let level1 = new TDSceneConfig(new Terrain(1))

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 640,
  height: 512,
  physics: {
    default: 'arcade'
  },
  scene: [new TDScene(level1), new TDScene(level0)]
};

export const game = new Phaser.Game(gameConfig);