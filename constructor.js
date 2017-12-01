/**
 * The Game class, having displayPoints property
    * @class Game
 * @constructor parameterized constructor
**/
var Game = /** @class */ (function () {
    function Game(x, y) {
        this.x = x;
        this.y = y;
    }
    Game.prototype.displayPoints = function () {
        console.log("Hello " + this.y + " you have won " + this.x + " points");
        return "Hello " + this.y + " you have won " + this.x + " points";
    };
    return Game;
}());
var game = new Game(100, "Latha");
game.displayPoints();
