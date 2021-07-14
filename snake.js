//import drawBoard from "game";

let _scl = 40;

class Snake {
    constructor() {

        this.x = 40;
        this.y = 80;
        this.xSpeed = 1;
        this.ySpeed = 0;

        this.direction = function (x, y) {
            this.xSpeed = x;
            this.ySpeed = y;
        }

        this.update = function () {
            let x = this.x + this.xSpeed * _scl;
            let y = this.y + this.ySpeed * _scl;
            if (x > 750 || x < 40
                || y > 790 || y < 0) {

                /* TODO game over */

            } else {
                this.x = x;
                this.y = y;
            }
        }

        this.show = function () {
            _ctx.save();
            _ctx.clearRect(0, 0, _canvas.width, _canvas.height);
            drawBoard();
            _food.getFood();
            _ctx.restore();
            if (this.xSpeed > 0) {

                /* head */
                _ctx.fillStyle = "#880015";
                _ctx.fillRect(this.x + 40, this.y - 40, 40, 40);
                _ctx.fillRect(this.x + 40, this.y - 50, 20, 10);
                _ctx.fillRect(this.x + 40, this.y, 20, 10);
                _ctx.save();
                _ctx.fillStyle = "#000";
                _ctx.fillRect(this.x + 100, this.y - 25, 10, 10);
                _ctx.fillRect(this.x + 65, this.y - 15, 10, 10);
                _ctx.fillRect(this.x + 65, this.y - 36, 10, 10);
                _ctx.fillStyle = "#f4d39d";
                _ctx.fillRect(this.x + 80, this.y - 32, 20, 25);
                _ctx.fillStyle = "#ffffff";
                _ctx.fillRect(this.x + 65, this.y - 10, 7, 5);
                _ctx.fillRect(this.x + 65, this.y - 37, 7, 5);
                /* tail */
                _ctx.restore();
                _ctx.fillRect(this.x, this.y - 40, 40, 40);
                _ctx.fillRect(this.x - 40, this.y - 25, 40, 10);

            } else if (this.xSpeed < 0) {

                /* head */
                _ctx.fillStyle = "#880015";
                _ctx.fillRect(this.x - 40, this.y - 40, 40, 40);
                _ctx.fillRect(this.x - 20, this.y - 50, 20, 10);
                _ctx.fillRect(this.x - 20, this.y, 20, 10);
                _ctx.save();
                _ctx.fillStyle = "#000";
                _ctx.fillRect(this.x - 70, this.y - 25, 10, 10);
                _ctx.fillRect(this.x - 35, this.y - 15, 10, 10);
                _ctx.fillRect(this.x - 35, this.y - 36, 10, 10);
                _ctx.fillStyle = "#f4d39d";
                _ctx.fillRect(this.x - 60, this.y - 32, 20, 25);
                _ctx.fillStyle = "#ffffff";
                _ctx.fillRect(this.x - 35, this.y - 10, 7, 5);
                _ctx.fillRect(this.x - 35, this.y - 37, 7, 5);
                /* tail */
                _ctx.restore();
                _ctx.fillRect(this.x, this.y - 40, 40, 40);
                _ctx.fillRect(this.x + 40, this.y - 25, 40, 10);

            } else if (this.ySpeed < 0) {

                /* head */
                _ctx.fillStyle = "#880015";
                _ctx.fillRect(this.x, this.y, 40, 40);
                _ctx.fillRect(this.x - 10, this.y + 20, 10, 20);
                _ctx.fillRect(this.x + 40, this.y + 20, 10, 20);
                _ctx.save();
                _ctx.fillStyle = "#000";
                _ctx.fillRect(this.x + 15, this.y - 30, 10, 10);
                _ctx.fillRect(this.x + 3, this.y + 5, 10, 10);
                _ctx.fillRect(this.x + 27, this.y + 5, 10, 10);
                _ctx.fillStyle = "#f4d39d";
                _ctx.fillRect(this.x + 7, this.y - 20, 25, 20);
                _ctx.fillStyle = "#ffffff";
                _ctx.fillRect(this.x + 3, this.y + 5, 5, 7);
                _ctx.fillRect(this.x + 31, this.y + 5, 5, 7);
                /* tail */
                _ctx.restore();
                _ctx.fillRect(this.x, this.y + 40, 40, 40);
                _ctx.fillRect(this.x + 15, this.y + 80, 10, 40);

            } else {

                /* head */
                _ctx.fillStyle = "#880015";
                _ctx.fillRect(this.x, this.y, 40, 40);
                _ctx.fillRect(this.x - 10, this.y, 10, 20);
                _ctx.fillRect(this.x + 40, this.y, 10, 20);
                _ctx.save();
                _ctx.fillStyle = "#000";
                _ctx.fillRect(this.x + 15, this.y + 60, 10, 10);
                _ctx.fillRect(this.x + 3, this.y + 25, 10, 10);
                _ctx.fillRect(this.x + 27, this.y + 25, 10, 10);
                _ctx.fillStyle = "#f4d39d";
                _ctx.fillRect(this.x + 7, this.y + 40, 25, 20);
                _ctx.fillStyle = "#ffffff";
                _ctx.fillRect(this.x + 3, this.y + 25, 5, 7);
                _ctx.fillRect(this.x + 31, this.y + 25, 5, 7);
                /* tail */
                _ctx.restore();
                _ctx.fillRect(this.x, this.y - 40, 40, 40);
                _ctx.fillRect(this.x + 15, this.y - 80, 10, 40);

            }
        }
    }
}
