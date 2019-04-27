export class Paul extends Phaser.Scene {
  constructor () {
      super({key: 'paul'});
  }
  preload() {
    this.load.image('bg', 'assets/placeholder/character.png');
  }

  create() {
    var sprite = this.add.sprite(0, 0, 'bg');
  }
  update() {
  }
}
