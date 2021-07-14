let _canvas;
let _ctx;
let _snake;
let _food;

setUp();

window.requestAnimationFrame(mainGame);

function setUp() {
    _canvas = document.getElementById("canvas");
    _ctx = _canvas.getContext("2d");
    _canvas.width = 800;
    _canvas.height = 800;
    drawBoard();
    _food = new Food();
    _food.randomPos();
    _snake = new Snake();
    _snake.show();
}

function drawBoard() {
    _ctx.fillStyle = "rgba(255,20,147,0.45)";
    for (let j = 0; j < 40; j++) {
        for (let i = 0; i < 40; i++) {
            if (j%2 === 0) {
                _ctx.fillRect(80 * i, 40 * j, 40, 40);
            } else {
                _ctx.fillRect(40 + 80 * i, 40 * j, 40, 40);
            }
        }
    }
}

const snakeSpeed = 3;
let lastRenderTime = 0;
let gameOver = false;

function mainGame(currentTime) {

   window.requestAnimationFrame(mainGame);
   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return;
   lastRenderTime = currentTime;

    window.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowUp') {
            _snake.direction(0, -1);
        } else if (e.key === 'ArrowDown') {
            _snake.direction(0, 1);
        } else if (e.key === 'ArrowLeft') {
            _snake.direction(-1, 0);
        } else if (e.key === 'ArrowRight') {
            _snake.direction(1, 0);
        }
    });
    console.log(_snake.length);
    _snake.eat();
    _snake.update();
    _snake.show();

}


