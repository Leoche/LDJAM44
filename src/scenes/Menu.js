export class Menu extends Phaser.Scene {
  constructor () {
      super({key: 'menu'});
  }
  preload() {
    this.load.image('bg', 'assets/bg.png');
  }

  create() {
    var sprite = this.add.sprite(300, 300, 'bg');
    sprite.setScale(4)
  }
  update() {
  }
}
