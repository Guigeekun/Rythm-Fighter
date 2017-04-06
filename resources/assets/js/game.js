var gameWidth = 1280*window.innerWidth/1280;
var gameHeight = 720*window.innerWidth/1280;
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, 'rythmFighter', { preload: preload, create: create, update: update, render: render }, true);

function preload() {
   game.load.image('player1', 'img/_rocky/rocky01.png');
   game.load.image('player2', 'img/_ground/ground05.png');
   game.load.image('background', 'img/Background.png');
   game.load.audio('song', ['/audio/song/minami-JudgementStar.mp3', '/audio/song/minami-JudgementStar.ogg']);
}

var music

function create() {
  //load background and img
  player1 = game.add.sprite(gameWidth/10, gameHeight/1.9, 'player1');
  player2 = game.add.sprite(gameWidth/1.25, gameHeight/1.9, 'player2');

  game.input.touch.preventDefault = false;
  music = game.add.audio('song');
      music.play();
  game.input.onDown.add(changeVolume, this);
}

function changeVolume(pointer) {

    if (pointer.y < 100)
    {
        music.mute = false;
    }
    else if (pointer.y < 300)
    {
        music.volume += 0.1;
    }
    else
    {
        music.volume -= 0.1;
    }

}

function update() {
}
function action_table(){
}
function render(){
}
var v1 = 0
