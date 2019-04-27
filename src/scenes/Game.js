export class Game extends Phaser.Scene {
	constructor () {
		super({key: 'Game'});
	}
	preload() {
		this.load.image('bg', 'assets/bg.png');
		this.load.image('player', 'assets/player.')
	}

	create() {
		var sprite = this.add.sprite(300, 300, 'bg');
		sprite.setScale(8)
	}
	update() {
		cursors = this.input.keyboard.createCursorKeys();
		if (cursors.left.isDown)
		{
			player.setVelocityX(-160);
			//player.anims.play('left', true);
		}
		else if (cursors.right.isDown)
		{
			player.setVelocityX(160);
			//player.anims.play('right', true);
		}
		else{
			player.setVelocityX(0);
		}

		if (cursors.up.isDown)
		{
			player.setVelocityY(-160);

			//player.anims.play('left', true);
		}
		else if (cursors.down.isDown)
		{
			player.setVelocityY(160);

			//player.anims.play('right', true);
		}
		else{
			player.setVelocityY(0);
		}


		
	}
}
