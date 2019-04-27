export class Paul extends Phaser.Scene {
  constructor () {
    super({key: 'paul'});
  }
  preload() {
    this.load.image('bg', 'assets/bg.png');
    this.load.image('player', 'assets/placeholder/hero.png');
  }

  create() {
    console.log("on est chez paul");
    var sprite = this.add.sprite(300, 300, 'bg');
    sprite.setScale(8)
    console.log(this);
    this.player = this.physics.add.sprite(50, 50, 'player');
  }
  update() {
    var cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown)
    {
      this.player.setVelocityX(-160);
      //player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
      this.player.setVelocityX(160);
      //player.anims.play('right', true);
    }
    else{
      this.player.setVelocityX(0);
    }

    if (cursors.up.isDown)
    {
      this.player.setVelocityY(-160);

      //player.anims.play('left', true);
    }
    else if (cursors.down.isDown)
    {
      this.player.setVelocityY(160);

      //player.anims.play('right', true);
    }
    else{
      this.player.setVelocityY(0);
    }


    
  }
}
