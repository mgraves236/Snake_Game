class Food {
    constructor() {
        this.x = 0;
        this.y = 0;

        this.randomPos = function() {
            /*TODO only positions on grid*/
            this.x = Math.floor(Math.random() * _);
            this.y = Math.floor(Math.random() * _canvas.height);
        }

        this.getFood = function() {
            _ctx.fillStyle = "#d08111";
            _ctx.fillRect(this.x, this.y, 40, 40);
        }
    }
}