var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'Rythm-Fighter', { preload: preload, create: create, update: update });

function preload() {
   game.load.image('ground', 'public/img/_ground/ground05.png');
}

function create() {
game.add.sprite(0, 0, 'ground');
}

function update() {
}
