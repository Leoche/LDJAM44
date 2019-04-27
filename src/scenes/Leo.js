import { Player } from "../entities/Player";

export class Leo extends Phaser.Scene {
  constructor () {
      super({key: 'leo'});
  }
  preload() {
    this.load.spritesheet('hero', 'assets/placeholder/hero.png', { frameWidth: 16, frameHeight: 16})
  }

  create() {
    this.player = new Player(this, 200, 200);
    this.add.existing(this.player);
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
    let direction = null
    if (this.keys.left.isDown || (this.gamepad && (this.gamepad.left || this.gamepad.axes[0].getValue() < -0.5))) {
      this.player.direction = 'left'
    } else if (this.keys.right.isDown || (this.gamepad && (this.gamepad.right || this.gamepad.axes[0].getValue() > 0.5))) {
      this.player.direction = 'right'
    } else if (this.keys.up.isDown || (this.gamepad && (this.gamepad.up || this.gamepad.axes[1].getValue() < -0.5))) {
      this.player.direction = 'up'
    } else if (this.keys.down.isDown || (this.gamepad && (this.gamepad.down || this.gamepad.axes[1].getValue() > 0.5))) {
      this.player.direction = 'down'
    }
    this.player.update();
  }
}
