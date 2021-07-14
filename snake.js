let _scl = 40;

class Snake {
    constructor() {
        this.body = [];
        this.body[0] = new Point(80, 80);
        this.length = 1;
        this.xSpeed = 1;
        this.ySpeed = 0;
    }

    direction(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    eat() {
        if (this.body[0].x === _food.x && this.body[0].y - _scl === _food.y) {
            _food.randomPos();
            this.grow();
        }
    }

    grow() {
        this.length++;
        this.body.push(new Point(0,40 * this.length));
    }

    update() {
        let x = this.body[0].x + this.xSpeed * _scl;
        let y = this.body[0].y + this.ySpeed * _scl;
        if (x > 750 || x < 40
            || y > 790 || y < 0) {

            /* TODO game over */

        } else {
            this.body[0].x = x;
            this.body[0].y = y;
        }
    }

    show() {
        _ctx.save();
        _ctx.clearRect(0, 0, _canvas.width, _canvas.height);
        drawBoard();
        _food.getFood();
        _ctx.restore();
        if (this.xSpeed > 0) {

            /* head */
            _ctx.fillStyle = "#880015";
            _ctx.fillRect(this.body[0].x + 40, this.body[0].y - 40, 40, 40);
            _ctx.fillRect(this.body[0].x + 40, this.body[0].y - 50, 20, 10);
            _ctx.fillRect(this.body[0].x + 40, this.body[0].y, 20, 10);
            _ctx.save();
            _ctx.fillStyle = "#000";
            _ctx.fillRect(this.body[0].x + 100, this.body[0].y - 25, 10, 10);
            _ctx.fillRect(this.body[0].x + 65, this.body[0].y - 15, 10, 10);
            _ctx.fillRect(this.body[0].x + 65, this.body[0].y - 36, 10, 10);
            _ctx.fillStyle = "#f4d39d";
            _ctx.fillRect(this.body[0].x + 80, this.body[0].y - 32, 20, 25);
            _ctx.fillStyle = "#ffffff";
            _ctx.fillRect(this.body[0].x + 65, this.body[0].y - 10, 7, 5);
            _ctx.fillRect(this.body[0].x + 65, this.body[0].y - 37, 7, 5);
            /* body */
            _ctx.restore();
            for (let i = 0; i < this.length; i++) {
                _ctx.fillRect(this.body[i].x, this.body[i].y - 40, 40, 40);
            }
            /* tail */
            /* TODO multiply the tail by the length*/
            //_ctx.fillRect(this.body[0].x, this.body[0].y - 40, 40, 40);
            _ctx.fillRect(this.body[0].x - 40, this.body[0].y - 25, 40, 10);

        } else if (this.xSpeed < 0) {

            /* head */
            _ctx.fillStyle = "#880015";
            _ctx.fillRect(this.body[0].x - 40, this.body[0].y - 40, 40, 40);
            _ctx.fillRect(this.body[0].x - 20, this.body[0].y - 50, 20, 10);
            _ctx.fillRect(this.body[0].x - 20, this.body[0].y, 20, 10);
            _ctx.save();
            _ctx.fillStyle = "#000";
            _ctx.fillRect(this.body[0].x - 70, this.body[0].y - 25, 10, 10);
            _ctx.fillRect(this.body[0].x - 35, this.body[0].y - 15, 10, 10);
            _ctx.fillRect(this.body[0].x - 35, this.body[0].y - 36, 10, 10);
            _ctx.fillStyle = "#f4d39d";
            _ctx.fillRect(this.body[0].x - 60, this.body[0].y - 32, 20, 25);
            _ctx.fillStyle = "#ffffff";
            _ctx.fillRect(this.body[0].x - 35, this.body[0].y - 10, 7, 5);
            _ctx.fillRect(this.body[0].x - 35, this.body[0].y - 37, 7, 5);
            /* tail */
            _ctx.restore();
            _ctx.fillRect(this.body[0].x, this.body[0].y - 40, 40, 40);
            _ctx.fillRect(this.body[0].x + 40, this.body[0].y - 25, 40, 10);

        } else if (this.ySpeed < 0) {

            /* head */
            _ctx.fillStyle = "#880015";
            _ctx.fillRect(this.body[0].x, this.body[0].y, 40, 40);
            _ctx.fillRect(this.body[0].x - 10, this.body[0].y + 20, 10, 20);
            _ctx.fillRect(this.body[0].x + 40, this.body[0].y + 20, 10, 20);
            _ctx.save();
            _ctx.fillStyle = "#000";
            _ctx.fillRect(this.body[0].x + 15, this.body[0].y - 30, 10, 10);
            _ctx.fillRect(this.body[0].x + 3, this.body[0].y + 5, 10, 10);
            _ctx.fillRect(this.body[0].x + 27, this.body[0].y + 5, 10, 10);
            _ctx.fillStyle = "#f4d39d";
            _ctx.fillRect(this.body[0].x + 7, this.body[0].y - 20, 25, 20);
            _ctx.fillStyle = "#ffffff";
            _ctx.fillRect(this.body[0].x + 3, this.body[0].y + 5, 5, 7);
            _ctx.fillRect(this.body[0].x + 31, this.body[0].y + 5, 5, 7);
            /* tail */
            _ctx.restore();
            _ctx.fillRect(this.body[0].x, this.body[0].y + 40, 40, 40);
            _ctx.fillRect(this.body[0].x + 15, this.body[0].y + 80, 10, 40);

        } else {

            /* head */
            _ctx.fillStyle = "#880015";
            _ctx.fillRect(this.body[0].x, this.body[0].y, 40, 40);
            _ctx.fillRect(this.body[0].x - 10, this.body[0].y, 10, 20);
            _ctx.fillRect(this.body[0].x + 40, this.body[0].y, 10, 20);
            _ctx.save();
            _ctx.fillStyle = "#000";
            _ctx.fillRect(this.body[0].x + 15, this.body[0].y + 60, 10, 10);
            _ctx.fillRect(this.body[0].x + 3, this.body[0].y + 25, 10, 10);
            _ctx.fillRect(this.body[0].x + 27, this.body[0].y + 25, 10, 10);
            _ctx.fillStyle = "#f4d39d";
            _ctx.fillRect(this.body[0].x + 7, this.body[0].y + 40, 25, 20);
            _ctx.fillStyle = "#ffffff";
            _ctx.fillRect(this.body[0].x + 3, this.body[0].y + 25, 5, 7);
            _ctx.fillRect(this.body[0].x + 31, this.body[0].y + 25, 5, 7);
            /* tail */
            _ctx.restore();
            _ctx.fillRect(this.body[0].x, this.body[0].y - 40, 40, 40);
            _ctx.fillRect(this.body[0].x + 15, this.body[0].y - 80, 10, 40);

        }
    }
}
