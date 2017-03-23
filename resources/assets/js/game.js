
var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'Rythm-Fighter', { preload: preload, create: create, update: update, render: render });

function preload() {
   game.load.image('ground', 'img/_ground/ground05.png');
   game.load.audio('song', ['public/audio/song/minami-JudgementStar.mp3', 'public/audio/song/minami-JudgementStar.ogg']);
}

var music

function create() {
  game.stage.backgroundColor = '#182d3b';
//  game.add.sprite(640, 370, 'ground');
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
function action_table()
}
var v1 = 0
