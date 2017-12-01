/**
 * The Game class, having displayPoints property
	* @class Game
 * @constructor parameterized constructor
**/


class Game {
   
    private x: number;
    private y: string;

    constructor(x:number,y:string) {
        this.x = x;
        this.y = y;
    }

    displayPoints() {
        console.log(`Hello ${this.y} you have won ${this.x} points`);
        return `Hello ${this.y} you have won ${this.x} points`;
    }

}

let game = new Game(100,"Latha");
game.displayPoints();
