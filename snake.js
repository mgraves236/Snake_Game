class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
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
            _stage.fillStyle = "#7a1d1d";
            _stage.fillRect(this.x, this.y, 40, 40);
        }
    }
}
