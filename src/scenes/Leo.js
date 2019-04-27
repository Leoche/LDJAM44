import { Player } from "../entities/Player";
import { Coin } from "../entities/Coin";

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
    console.log(this)
    this.input.on('pointermove', (pointer) => {
        pointer.x = pointer.x + this.cameras.main._scrollX;
        pointer.y = pointer.y + this.cameras.main._scrollY; 
        var angle = Phaser.Math.Angle.BetweenPoints(this.player, pointer);
         if((Math.abs(angle) > 0 && Math.abs(angle) < Math.PI/4)) {
          this.player.direction = "right";
        } else if((Math.abs(angle) > 3*Math.PI/4 && Math.abs(angle) < Math.PI)) {
          this.player.direction = "left";
        }else if(angle < 3*Math.PI/4 && angle > Math.PI/4) {
          this.player.direction = "down";
        } else {
          this.player.direction = "up";
        }
        this.player._angle = angle;
    }, this);
  }
  update() {
    let direction = null
    if (this.keys.left.isDown || (this.gamepad && (this.gamepad.left || this.gamepad.axes[0].getValue() < -0.5))) {
      this.player.direction = 'left'
      this.player._angle += .2;
    } else if (this.keys.right.isDown || (this.gamepad && (this.gamepad.right || this.gamepad.axes[0].getValue() > 0.5))) {
      this.player.direction = 'right'
      this.player._angle -= .2;
    } else if (this.keys.up.isDown || (this.gamepad && (this.gamepad.up || this.gamepad.axes[1].getValue() < -0.5))) {
      this.player.direction = 'up'
    } else if (this.keys.down.isDown || (this.gamepad && (this.gamepad.down || this.gamepad.axes[1].getValue() > 0.5))) {
      this.player.direction = 'down'
    }
    this.player.update();
    if (this.keys.space.isDown) {
      let coin = new Coin(this, this.player.x,this.player.y);
      this.coins.push(coin);
      this.add.existing(coin);
      this.physics.add.existing(coin);
      var velocity = new Phaser.Math.Vector2();
      this.physics.velocityFromRotation(this.player._angle, 600, velocity);
      coin.body.setVelocity(velocity.x, velocity.y);
    }
  }
}
