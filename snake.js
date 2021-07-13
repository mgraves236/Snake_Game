class Snake {
    constructor() {
        this.x = 50;
        this.y = 100;
        this.xSpeed = 0;
        this.ySpeed = 0;

        this.direction = function (x, y) {
            this.xSpeed = x;
            this.ySpeed = y;
        }

        this.update = function () {
            _stage.save();
            _stage.clearRect(0,0, _canvas.width, _canvas.height);
            _stage.restore();
            this.x = this.x + this.xSpeed;
            this.y = this.y + this.ySpeed;
        }

        this.show = function () {
            if (this.xSpeed > 0) {

                /* head */
                _stage.fillStyle = "#880015";
                _stage.fillRect(this.x + 40, this.y - 40, 40, 40);
                _stage.fillRect(this.x + 40, this.y - 50, 20, 10);
                _stage.fillRect(this.x + 40, this.y, 20, 10);
                _stage.save();
                _stage.fillStyle = "#000";
                _stage.fillRect(this.x + 100, this.y - 25, 10, 10);
                _stage.fillRect(this.x + 65, this.y - 15, 10, 10);
                _stage.fillRect(this.x + 65, this.y - 36, 10, 10);
                _stage.fillStyle = "#f4d39d";
                _stage.fillRect(this.x + 80, this.y - 32, 20, 25);
                _stage.fillStyle = "#ffffff";
                _stage.fillRect(this.x + 65, this.y - 10, 7, 5);
                _stage.fillRect(this.x + 65, this.y - 37, 7, 5);
                /* tail */
                _stage.restore();
                _stage.fillRect(this.x, this.y - 40, 40, 40);
                _stage.fillRect(this.x - 40, this.y - 25, 40, 10);

            } else if (this.xSpeed < 0) {

                /* head */
                _stage.fillStyle = "#880015";
                _stage.fillRect(this.x - 40, this.y - 40, 40, 40);
                _stage.fillRect(this.x - 20, this.y - 50, 20, 10);
                _stage.fillRect(this.x - 20, this.y, 20, 10);
                _stage.save();
                _stage.fillStyle = "#000";
                _stage.fillRect(this.x - 70, this.y - 25, 10, 10);
                _stage.fillRect(this.x - 35, this.y - 15, 10, 10);
                _stage.fillRect(this.x - 35, this.y - 36, 10, 10);
                _stage.fillStyle = "#f4d39d";
                _stage.fillRect(this.x - 60, this.y - 32, 20, 25);
                _stage.fillStyle = "#ffffff";
                _stage.fillRect(this.x - 35, this.y - 10, 7, 5);
                _stage.fillRect(this.x - 35, this.y - 37, 7, 5);
                /* tail */
                _stage.restore();
                _stage.fillRect(this.x, this.y - 40, 40, 40);
                _stage.fillRect(this.x + 40, this.y - 25, 40, 10);

            } else if (this.ySpeed < 0) {

                /* head */
                _stage.fillStyle = "#880015";
                _stage.fillRect(this.x, this.y, 40, 40);
                _stage.fillRect(this.x - 10, this.y + 20, 10, 20);
                _stage.fillRect(this.x + 40, this.y + 20, 10, 20);
                _stage.save();
                _stage.fillStyle = "#000";
                _stage.fillRect(this.x + 15, this.y - 30, 10, 10);
                _stage.fillRect(this.x + 3, this.y + 5, 10, 10);
                _stage.fillRect(this.x + 27, this.y + 5, 10, 10);
                _stage.fillStyle = "#f4d39d";
                _stage.fillRect(this.x + 7, this.y - 20, 25, 20);
                _stage.fillStyle = "#ffffff";
                _stage.fillRect(this.x + 3, this.y + 5, 5, 7);
                _stage.fillRect(this.x + 31, this.y + 5, 5, 7);
                /* tail */
                _stage.restore();
                _stage.fillRect(this.x, this.y + 40, 40, 40);
                _stage.fillRect(this.x + 15, this.y + 80, 10, 40);

            } else {

                /* head */
                _stage.fillStyle = "#880015";
                _stage.fillRect(this.x, this.y, 40, 40);
                _stage.fillRect(this.x - 10, this.y, 10, 20);
                _stage.fillRect(this.x + 40, this.y, 10, 20);
                _stage.save();
                _stage.fillStyle = "#000";
                _stage.fillRect(this.x + 15, this.y + 60, 10, 10);
                _stage.fillRect(this.x + 3, this.y + 25, 10, 10);
                _stage.fillRect(this.x + 27, this.y + 25, 10, 10);
                _stage.fillStyle = "#f4d39d";
                _stage.fillRect(this.x + 7, this.y + 40, 25, 20);
                _stage.fillStyle = "#ffffff";
                _stage.fillRect(this.x + 3, this.y + 25, 5, 7);
                _stage.fillRect(this.x + 31, this.y + 25, 5, 7);
                /* tail */
                _stage.restore();
                _stage.fillRect(this.x, this.y - 40, 40, 40);
                _stage.fillRect(this.x + 15, this.y - 80, 10, 40);

            }
        }
    }
}
