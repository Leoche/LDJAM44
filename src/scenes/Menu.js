export class Menu extends Phaser.Scene {
  constructor () {
      super({key: 'menu'});
  }
  preload() {
    this.load.image('bg', 'assets/placeholder/bg.png');
  }

  create() {
    var sprite = this.add.sprite(0, 0, 'bg');
    console.log(sprite);
    sprite.setOrigin(0, 0);
    this.game.canvas.addEventListener('mousedown', () => {
        if(this.game.input.mousePointer.y < 450) {
          console.log('L');
        } else {
          console.log('p');
        }
    });
  }
  update() {
  }
}
