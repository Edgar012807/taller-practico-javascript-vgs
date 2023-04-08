console.log({maps});
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load',startGame);
function startGame(){
    // codigo
    // game.fillRect(0,0,100,100);
    // game.clearRect(50,50,50,50);
    // game.clearRect(0,0,30,30);
    game.font = '25px Verdana'
    game.fillStyle = 'red';
    game.textAlign = 'end'
    game.fillText('edgar',45,41);
}