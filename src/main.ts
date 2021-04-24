import * as Phaser from 'phaser'
import { HudScene } from './scenes/hudScene';
import { MetaScene } from './scenes/MetaScene';
import { TDScene } from './scenes/tdScene'
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
  new MetaScene(),
  new HudScene(),
]

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 896,
  height: 512,
  physics: {
    default: 'arcade'
  },
  scene: levels 
};

export const game = new Phaser.Game(gameConfig);