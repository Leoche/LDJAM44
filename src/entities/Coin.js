export class Coin extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);

        this.setTexture('tileset');
        this.setPosition(x, y);
        this.setOrigin(0, 0);
        this.setFrame(86); 
    }
    update() {
    }

}