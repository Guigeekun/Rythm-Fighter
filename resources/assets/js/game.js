
var game = new Phaser.Game('90', '90', Phaser.AUTO, 'gameContainer', { preload: preload, create: create, update: update });

function preload() {
   game.load.image('ground', 'img/_ground/ground05.png');
}

function create() {
game.add.sprite(0, 0, 'ground');
}

function update() {
}
