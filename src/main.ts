import * as Phaser from 'phaser'
import { MetaScene } from './scenes/MetaScene';
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

let levels = [
  new TDScene(new TDSceneConfig(new Terrain(0), 0)),
  new TDScene(new TDSceneConfig(new Terrain(1), 1)),
  new MetaScene(),
]

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 640,
  height: 512,
  physics: {
    default: 'arcade'
  },
  scene: levels 
};

export const game = new Phaser.Game(gameConfig);