let _scl = 40;

class Snake {
    constructor() {
        this.body = [];
        this.body[0] = [
            80,
            80
        ];
        this.xSpeed = 1;
        this.ySpeed = 0;
    }

        direction(x, y) {
            this.xSpeed = x;
            this.ySpeed = y;
        }

      eat() {
        console.log(this.body[0][0] + "  " + _food.x);
          if (this.body[0][0] === _food.x
              && this.body[0][1] === _food.y) {
              _food.randomPos();
          }
      }


        update() {
            let x = this.body[0][0] + this.xSpeed * _scl;
            let y = this.body[0][1] + this.ySpeed * _scl;
            if (x > 750 || x < 40
                || y > 790 || y < 0) {

                /* TODO game over */

            } else {
                this.body[0][0] = x;
                this.body[0][1] = y;
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
                _ctx.fillRect(this.body[0][0] + 40, this.body[0][1] - 40, 40, 40);
                _ctx.fillRect(this.body[0][0] + 40, this.body[0][1] - 50, 20, 10);
                _ctx.fillRect(this.body[0][0] + 40, this.body[0][1], 20, 10);
                _ctx.save();
                _ctx.fillStyle = "#000";
                _ctx.fillRect(this.body[0][0] + 100, this.body[0][1] - 25, 10, 10);
                _ctx.fillRect(this.body[0][0] + 65, this.body[0][1] - 15, 10, 10);
                _ctx.fillRect(this.body[0][0] + 65, this.body[0][1] - 36, 10, 10);
                _ctx.fillStyle = "#f4d39d";
                _ctx.fillRect(this.body[0][0] + 80, this.body[0][1] - 32, 20, 25);
                _ctx.fillStyle = "#ffffff";
                _ctx.fillRect(this.body[0][0] + 65, this.body[0][1] - 10, 7, 5);
                _ctx.fillRect(this.body[0][0] + 65, this.body[0][1] - 37, 7, 5);
                /* tail */
                _ctx.restore();
                _ctx.fillRect(this.body[0][0], this.body[0][1] - 40, 40, 40);
                _ctx.fillRect(this.body[0][0] - 40, this.body[0][1] - 25, 40, 10);

            } else if (this.xSpeed < 0) {

                /* head */
                _ctx.fillStyle = "#880015";
                _ctx.fillRect(this.body[0][0] - 40, this.body[0][1] - 40, 40, 40);
                _ctx.fillRect(this.body[0][0] - 20, this.body[0][1] - 50, 20, 10);
                _ctx.fillRect(this.body[0][0] - 20, this.body[0][1], 20, 10);
                _ctx.save();
                _ctx.fillStyle = "#000";
                _ctx.fillRect(this.body[0][0] - 70, this.body[0][1] - 25, 10, 10);
                _ctx.fillRect(this.body[0][0] - 35, this.body[0][1] - 15, 10, 10);
                _ctx.fillRect(this.body[0][0] - 35, this.body[0][1] - 36, 10, 10);
                _ctx.fillStyle = "#f4d39d";
                _ctx.fillRect(this.body[0][0] - 60, this.body[0][1] - 32, 20, 25);
                _ctx.fillStyle = "#ffffff";
                _ctx.fillRect(this.body[0][0] - 35, this.body[0][1] - 10, 7, 5);
                _ctx.fillRect(this.body[0][0] - 35, this.body[0][1] - 37, 7, 5);
                /* tail */
                _ctx.restore();
                _ctx.fillRect(this.body[0][0], this.body[0][1] - 40, 40, 40);
                _ctx.fillRect(this.body[0][0] + 40, this.body[0][1] - 25, 40, 10);

            } else if (this.ySpeed < 0) {

                /* head */
                _ctx.fillStyle = "#880015";
                _ctx.fillRect(this.body[0][0], this.body[0][1], 40, 40);
                _ctx.fillRect(this.body[0][0] - 10, this.body[0][1] + 20, 10, 20);
                _ctx.fillRect(this.body[0][0] + 40, this.body[0][1] + 20, 10, 20);
                _ctx.save();
                _ctx.fillStyle = "#000";
                _ctx.fillRect(this.body[0][0] + 15, this.body[0][1] - 30, 10, 10);
                _ctx.fillRect(this.body[0][0] + 3, this.body[0][1] + 5, 10, 10);
                _ctx.fillRect(this.body[0][0] + 27, this.body[0][1] + 5, 10, 10);
                _ctx.fillStyle = "#f4d39d";
                _ctx.fillRect(this.body[0][0] + 7, this.body[0][1] - 20, 25, 20);
                _ctx.fillStyle = "#ffffff";
                _ctx.fillRect(this.body[0][0] + 3, this.body[0][1] + 5, 5, 7);
                _ctx.fillRect(this.body[0][0] + 31, this.body[0][1] + 5, 5, 7);
                /* tail */
                _ctx.restore();
                _ctx.fillRect(this.body[0][0], this.body[0][1] + 40, 40, 40);
                _ctx.fillRect(this.body[0][0] + 15, this.body[0][1] + 80, 10, 40);

            } else {

                /* head */
                _ctx.fillStyle = "#880015";
                _ctx.fillRect(this.body[0][0], this.body[0][1], 40, 40);
                _ctx.fillRect(this.body[0][0] - 10, this.body[0][1], 10, 20);
                _ctx.fillRect(this.body[0][0] + 40, this.body[0][1], 10, 20);
                _ctx.save();
                _ctx.fillStyle = "#000";
                _ctx.fillRect(this.body[0][0] + 15, this.body[0][1] + 60, 10, 10);
                _ctx.fillRect(this.body[0][0] + 3, this.body[0][1] + 25, 10, 10);
                _ctx.fillRect(this.body[0][0] + 27, this.body[0][1] + 25, 10, 10);
                _ctx.fillStyle = "#f4d39d";
                _ctx.fillRect(this.body[0][0] + 7, this.body[0][1] + 40, 25, 20);
                _ctx.fillStyle = "#ffffff";
                _ctx.fillRect(this.body[0][0] + 3, this.body[0][1] + 25, 5, 7);
                _ctx.fillRect(this.body[0][0] + 31, this.body[0][1] + 25, 5, 7);
                /* tail */
                _ctx.restore();
                _ctx.fillRect(this.body[0][0], this.body[0][1] - 40, 40, 40);
                _ctx.fillRect(this.body[0][0] + 15, this.body[0][1] - 80, 10, 40);

            }
        }
}
