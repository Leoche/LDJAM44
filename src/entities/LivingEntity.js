export class LivingEntity extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);

        this.setTexture('enemi');
        this.setPosition(x, y);
        this.setOrigin(0, 0);
        this.setFrame(5);
        // this.direction = 'up';
        // this.atlas = {
        //     'up':8,
        //     'down':12,
        //     'left':4,
        //     'right':0,
        // }
    }
    update() {
        this.deplacement();
    }

    deplacement(){
    	console.log("undefined entity deplacement");
    }

}