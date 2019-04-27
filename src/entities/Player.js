import { Coin } from "../entities/Coin";
export class Player extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);

        this.setTexture('hero');
        this.setPosition(x, y);
        this.direction = 'up';
        this._angle = 0;
        this.atlas = {
            'up':8,
            'down':12,
            'left':4,
            'right':0,
        }
        this.cooldown = 0;
        this.shootcooldown = 10;
        this.accuracy = 10;
        scene.input.on('pointermove', (pointer) => {
            pointer.x = pointer.x + scene.cameras.main._scrollX;
            pointer.y = pointer.y + scene.cameras.main._scrollY; 
            var angle = Phaser.Math.Angle.BetweenPoints(this, pointer);
             if((Math.abs(angle) > 0 && Math.abs(angle) < Math.PI/4)) {
              this.direction = "right";
            } else if((Math.abs(angle) > 3*Math.PI/4 && Math.abs(angle) < Math.PI)) {
              this.direction = "left";
            }else if(angle < 3*Math.PI/4 && angle > Math.PI/4) {
              this.direction = "down";
            } else {
              this.direction = "up";
            }
            this._angle = angle;
        }, this);
        console.log(this);
    }
    update() {
        //DIrection 
        let direction = null
        if (this.scene   .keys.left.isDown || (this.scene.gamepad && (this.scene.gamepad.left || this.scene.gamepad.axes[0].getValue() < -0.5))) {
          this.direction = 'left'
        } else if (this.scene.keys.right.isDown || (this.scene.gamepad && (this.scene.gamepad.right || this.scene.gamepad.axes[0].getValue() > 0.5))) {
          this.direction = 'right'
        } else if (this.scene.keys.up.isDown || (this.scene.gamepad && (this.scene.gamepad.up || this.scene.gamepad.axes[1].getValue() < -0.5))) {
          this.direction = 'up'
        } else if (this.scene.keys.down.isDown || (this.scene.gamepad && (this.scene.gamepad.down || this.scene.gamepad.axes[1].getValue() > 0.5))) {
          this.direction = 'down'
        }

        if(this.cooldown > 0) this.cooldown--;
        this.setFrame(this.atlas[this.direction]);

        if (this.cooldown == 0 && this.scene.keys.space.isDown) {
            console.log(4);
          this.cooldown = this.shootcooldown;
          let coin = new Coin(this.scene, this.body.x,this.body.y);
          this.scene.coins.push(coin);
          this.scene.add.existing(coin);
          this.scene.physics.add.existing(coin);
          var velocity = new Phaser.Math.Vector2();
          this.scene.physics.velocityFromRotation(this._angle, 600, velocity);
          coin .body.setVelocity(velocity.x, velocity.y);
        }
    }

}