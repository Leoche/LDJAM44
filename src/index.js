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
  physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
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

game.scene.start("paul", {level: "paul"});
