export class Player extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);

        this.setTexture('hero');
        this.setPosition(x, y);
        this.setOrigin(0, 0);
        this.direction = 'up';
        this.atlas = {
            'up':8,
            'down':12,
            'left':4,
            'right':0,
        }
    }
    update() {
        super.update();
        this.setFrame(2);
    }

}