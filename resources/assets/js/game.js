var gameWidth = 1280*window.innerWidth/1280;
var gameHeight = 720*window.innerWidth/1280;
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, 'rythmFighter', { preload: preload, create: create, update: update, render: render }, true);

function preload() {
   document.getElementById("rythmFighterBg").style.height = gameHeight;
   document.getElementById("rythmFighterBg").style.width = gameWidth;
   game.load.image('player1', 'img/_rocky/rocky01.png');
   game.load.image('player2', 'img/_ground/ground05.png');
   game.load.image('background', 'img/Background.png');
   game.load.image('test', 'img/_ground/ground08');
   game.load.audio('song', ['/audio/song/minami-JudgementStar.mp3', '/audio/song/minami-JudgementStar.ogg']);
}
var counter = 0;
var music;

function create() {
  //load background and img
  player1 = game.add.sprite(gameWidth/10, gameHeight/1.9, 'player1');
  player2 = game.add.sprite(gameWidth/1.25, gameHeight/1.9, 'player2');

  game.input.touch.preventDefault = false;
  music = game.add.audio('song');
      music.play();
  game.input.onDown.add(changeVolume, this);

//key mapping maintenant faut remplir les fonctions et reflechir à comment on fait ^^
   keyDOWN1 = game.input.keyboard.addKey(Phaser.Keyboard.S);
   keyDOWN1.onDown.add(DOWN1, this);

   keyLEFT1 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
   keyLEFT1.onDown.add(LEFT1, this);

   keyRIGHT1 = game.input.keyboard.addKey(Phaser.Keyboard.D);
   keyRIGHT1.onDown.add(RIGHT1, this);

   keyUP1 = game.input.keyboard.addKey(Phaser.Keyboard.Z);
   keyUP1.onDown.add(UP1, this);
//P1 mapping = Z,Q,S,D

   keyDOWN2 = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
   keyDOWN2.onDown.add(DOWN2, this);

   keyLEFT2 = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
   keyLEFT2.onDown.add(LEFT2, this);

   keyRIGHT2 = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
   keyRIGHT2.onDown.add(RIGHT2, this);

   keyUP2 = game.input.keyboard.addKey(Phaser.Keyboard.UP);
   keyUP2.onDown.add(UP2, this);
//P2 mapping UP,LEFT,DOWN,RIGHT
var tempo=0.68;
game.time.events.loop(Phaser.Timer.SECOND * tempo, Counter, this);

}

function Counter() {
p1_action=0
p2_action=0

    //  A bouncey ball sprite just to visually see what's going on.

    var ball = game.add.sprite(game.world.randomX, 0, 'ball');

    game.physics.enable(ball, Phaser.Physics.ARCADE);

    ball.body.bounce.y = 0.9;
    ball.body.collideWorldBounds = true;


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

function LEFT1(){
  p1_action=2
}
function DOWN1(){
  p1_action=3
}
function RIGHT1(){
  p1_action=4
}
function UP1(){
  p1_action=1
}
function LEFT2(){
  p2_action=2
}
function DOWN2(){
  p2_action=3
}
function RIGHT2(){
  p2_action=4
}
function UP2(){
  p2_action=1
}
var v1 = 0
