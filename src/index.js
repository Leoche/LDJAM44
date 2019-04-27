import 'phaser';

import { Menu } from './scenes/Menu';
import { Leo } from './scenes/Leo';
import { Paul } from './scenes/Paul';

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
game.scene.add('leo', Leo);
game.scene.add('paul', Paul);
game.scene.start("leo", {level: "leo"});
