import 'phaser';

import { Menu } from './scenes/Menu';

const gameConfig = {
  width: 1300,
  height: 700,
  input: {
      gamepad: true
  },
  pixelArt: true,
  audio: {
      disableWebAudio: true
  }
};

var game = new Phaser.Game(gameConfig);
game.scene.add('menu', Menu);
game.scene.start("menu", {level: "menu"});
