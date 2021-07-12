var _canvas;
var _stage;
var _snake;

function setCanvas() {
    _canvas = document.getElementById("canvas");
    _stage = _canvas.getContext("2d");
    _canvas.width = 800;
    _canvas.height = 800;

    setGame();
}


function setGame() {
    _snake = new Snake();
    _snake.show();

    window.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowUp') {
            _snake.direction(0, -10);
        } else if (e.key === 'ArrowDown'){
            _snake.direction(0, 10);
        } else if (e.key === 'ArrowLeft') {
            _snake.direction(-10, 0);
        } else if (e.key === 'ArrowRight') {
            _snake.direction(10, 0);
        }
        _snake.update();
        /*
        * TODO pass direction to show() and adjust the tail and snout
         */
        _snake.show();
    });

}

setCanvas();

