var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'Rythm-Fighter', { preload: preload, create: create, update: update });

function preload() {
   game.load.image('ground', 'public/img/_ground/ground05.png');
   game.load.audio('song', ['audio/song/minami-JudgementStar.mp3', 'audio/song/minami-JudgementStar.ogg']);

}

function create() {
game.add.sprite(0, 0, 'ground');

music = game.add.audio('song');

    music.play();

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


function update() {
}
