import * as Phaser from 'phaser'
import { HudScene, HUD_WIDTH } from './scenes/hudScene';
import { MetaScene } from './scenes/MetaScene';
import { TDScene, TD_SCENE_HEIGHT, TD_SCENE_WIDTH } from './scenes/tdScene'
import { TDSceneConfig } from './scenes/tdSceneConfig';
import { Terrain } from './terrain';

let metaScene = new MetaScene()
let hudScene = new HudScene(metaScene);

let levels = [
  metaScene,
  hudScene,
]

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: TD_SCENE_WIDTH + HUD_WIDTH * 2,
  height: TD_SCENE_HEIGHT,
  physics: {
    default: 'arcade'
  },
  scene: levels,
  seed: ["42"]
};

export const game = new Phaser.Game(gameConfig);