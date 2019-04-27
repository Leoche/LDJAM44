import { Player } from "../entities/Player";

export class Leo extends Phaser.Scene {
  constructor () {
      super({key: 'leo'});
  }
  preload() {
    this.load.spritesheet('hero', 'assets/placeholder/hero.png', { frameWidth: 16, frameHeight: 16})
    this.load.spritesheet('tileset', 'assets/placeholder/tileset.png', { frameWidth: 16, frameHeight: 16})
  }

  create() {
    this.player = new Player(this, 200, 200);
    this.coins = [];
    this.add.existing(this.player);
    this.physics.add.existing(this.player);
    this.cameras.main.setSize(1300, 700);
    this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
    this.cameras.main.zoom = 3
    this.initControls();
  }
  initControls() {
    this.gamepad = null;
    this.keys = {
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
      restart: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R),
      space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }
  }
  update() {
    this.player.update();
  }
}
