import { Player } from "../entities/Player";
import { Enemi } from "../entities/Enemi";

export class Paul extends Phaser.Scene {
  constructor () {
      super({key: 'paul'});
  }
  preload() {
    this.load.spritesheet('hero', 'assets/placeholder/hero.png', { frameWidth: 16, frameHeight: 16})
    this.load.spritesheet('tileset', 'assets/placeholder/tileset.png', { frameWidth: 16, frameHeight: 16})
    this.load.spritesheet('enemi','assets/placeholder/character.png',{ frameWidth: 16, frameHeight: 16})
    this.load.image('tiles', 'assets/placeholder/tileset.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/map2.json');
  }

  create() {
    this.gamepad = null;
    this.map = this.add.tilemap("map");
    var tileset = this.map.addTilesetImage('map', 'tiles');
    this.backgroundLayer = this.map.createStaticLayer("terrain", tileset);


    this.player = new Player(this, 200, 200);
    this.coins = [];
    this.add.existing(this.player);

    this.enemi = new Enemi(this, 220,220);
    this.add.existing(this.enemi);

    this.physics.add.existing(this.player);
    this.cameras.main.setSize(1300, 700);
    this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
    this.cameras.main.zoom = 3
    this.initControls();

    console.log(this.input.gamepad);
    console.log(this.input.gamepad.gamepads);

    if (this.input.gamepad.gamepads.length != 0){
      this.gamepad = this.input.gamepad.gamepads[this.input.gamepad.gamepads.length-1];
      console.log('de');
    }
    this.input.gamepad.on('down', (pad, button, index) => {
      this.initControlsGamepad(pad, button, index)
      console.log('de');
    })
    
  }
  initControlsGamepad(gamepad, button, index) {
    this.gamepad = gamepad;
      console.log('de');
  }
  initControls() {
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
