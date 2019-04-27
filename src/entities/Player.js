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
    }
    update() {
        this.setFrame(this.atlas[this.direction]);
    }

}