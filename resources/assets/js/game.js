//Difficultés = 1: difficile 2: normal, 4: easy (pour un futur menu de selection.)
var difficulty = 2;

//On fabrique un tableau contenant des objets. Chaque objet est la caractéristique d'une musique avec son titre, son path vers son ogg/mp3 et son tempo/s
var songs = [{title:"Judgement Star", pathMp3:'/audio/song/minami-JudgementStar.mp3', pathOgg:'/audio/song/minami-JudgementStar.ogg', tempo:1/(190.04/60)}];

//Ratio en 16:9
var gameWidth = 1280*window.innerWidth/1280;
var gameHeight = 720*window.innerWidth/1280;

//Création de la fenêtre du jeu
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, 'rythmFighter', { preload: preload, create: create}, true);
var playList = [];
var music;

//Chargement des ressources et lancement de l'écran de chargement
function preload() {
   game.load.onFileComplete.add(loading, this);
   text = game.add.text(gameWidth/3, gameHeight/2, 'Loading...', { fill:'#ffffff', size:"20" });
   document.getElementById("rythmFighterBg").style.height = gameHeight;
   document.getElementById("rythmFighterBg").style.width = gameWidth;
   game.load.image('player1', 'img/_rocky/rocky01.png');
   game.load.image('player2', 'img/_ground/ground05.png');
   game.load.image('background', 'img/Background.png');
   $.each(songs, function(index, value){playList.push(value.pathMp3)});
   game.load.audio('song', playList);
}

//Affichage de l'écran de chargement et d ela progression
function loading(progress, cacheKey, success, totalLoaded, totalFiles){
  text.setText("Loading: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
  $("#loadingBar").css("width", progress + "%");
}

function create() {
  text.setText("Loading...");

  //Create player 1 & 2 with inputs
  p1 = new player(Phaser.Keyboard.Q, Phaser.Keyboard.S, Phaser.Keyboard.D, Phaser.Keyboard.Z);
  p2 = new player(Phaser.Keyboard.LEFT, Phaser.Keyboard.DOWN, Phaser.Keyboard.RIGHT, Phaser.Keyboard.UP);

  //Music set and volume control binding
  music = game.add.audio('song');
  music.volume = 1;
  music.onDecoded.add(startGame, this);

  keyVol = game.input.keyboard.addKeys({'down': Phaser.Keyboard.F1, 'up': Phaser.Keyboard.F2});
  keyVol.down.onDown.add(function(){if(music.volume >= 0.1){music.volume -= 0.1;}else{music.volume = 0}}, this);
  keyVol.up.onDown.add(function(){if(music.volume <= 0.9){music.volume += 0.1;}else{music.volume = 1}}, this);

}

//startGame se déclenche quand la musique est décodé par le navigateur
function startGame(){
  //Delete loading screen (loading bar and text)
  $(".meter").remove();

  //load background and img
  player1 = game.add.sprite(gameWidth/10, gameHeight/1.9, 'player1');
  player2 = game.add.sprite(gameWidth/1.25, gameHeight/1.9, 'player2');

  //Start music and timer
  countdown = 4;
  game.time.events.repeat(1000, 4, function(){text.setText(countdown -= 1);}, this);
  game.time.events.onComplete.add(function(){
    text.destroy();
    music.play();
    game.time.events.loop(Phaser.Timer.SECOND*songs[0].tempo*difficulty, beatLoop, this);
  });
}
//Action à executer à chaque boucle de temps (change en fonction de la variable difficulty)
function beatLoop(){
    console.log("Test"); //Pour test, un message est affiché en boucle dans la console
}

function counter() {
  p1.counter();
  p2.counter();
}
