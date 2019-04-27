import { LivingEntity } from "./LivingEntity";
export class Enemi extends LivingEntity {

    constructor (scene, x, y)
    {
        super(scene, x, y);

        
        this.setFrame(7);
        // this.direction = 'up';
        // this.atlas = {
        //     'up':8,
        //     'down':12,
        //     'left':4,
        //     'right':0,
        // }
    }
    deplacement(){
    	// set ici le deplacement de l'enemi
    }

}