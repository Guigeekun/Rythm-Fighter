//Difficulties = 1: Hard 2: normal, 4: easy (Selection menu in the future ?)
var difficulty = 2;

//Ration 16:9
var gameWidth;
var gameHeight;

//Music global variable
var music;

//Game window creation
var game = new Phaser.Game("100", "100", Phaser.CANVAS, 'rythmFighter', { preload: preload, create: create}, true);


//load sprites and ressources
function preload() {
  gameWidth = $("#rythmFighter").width();
  gameHeight = $('#rythmFighter').height();

  //clear cache to prevent some decodeAudioData error (maybe ?)
  game.cache.destroy();

  //Loading state function
   game.load.onFileComplete.add(loading, this);

   //add loading text
   text = game.add.text(0, 0, 'Loading...', { fill:'#ffffff', size:"20" });

   //Load game sprites, there will be more in the future
   game.load.image('player1', 'img/_rocky/rocky01.png');
   game.load.image('player2', 'img/_ground/ground05.png');
   game.load.image('background', 'img/Background.png');

   //Create music object and add song to playlist then load it in ogg format
   music = new Music(Phaser.Keyboard.F1, Phaser.Keyboard.F2, 'song');
   music.addSongs({title:"Judgement Star", pathMp3:'/audio/song/minami-JudgementStar.mp3', pathOgg:'/audio/song/minami-JudgementStar.ogg', tempo:1/(190.04/60), startAt:13.2}); //We add one song to the playlist
   music.load("ogg", "Judgement Star");//We load a specific song in the game and we use the ogg format (can also be mp3)
}

//Loading screen display loop
function loading(progress, cacheKey, success, totalLoaded, totalFiles){
  text.setText("Loading: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
  $("#loadingBar").css("width", progress + "%");

}

function create() {
  //Set text to "loading..." because we can't know the time the browser takes to decode the music
  text.setText("Loading...");

  //Create player 1 & 2 with inputs and sprites
  p1 = new player(Phaser.Keyboard.Q, Phaser.Keyboard.S, Phaser.Keyboard.D, Phaser.Keyboard.Z, 'player1');
  p2 = new player(Phaser.Keyboard.LEFT, Phaser.Keyboard.DOWN, Phaser.Keyboard.RIGHT, Phaser.Keyboard.UP, 'player2');

  //Decode music and callback function
  music.decode(startGame);
}

//startGame run when the music is decoded by the browser
function startGame(){
  //Delete loading bar and add player sprites on specific coordinates.
  $(".meter").remove();
  p1.spawn(gameWidth/11, gameHeight/1.9, gameWidth*0.01, gameWidth*0.01);
  p2.spawn(gameWidth/1.25, gameHeight/1.9, gameWidth*0.01, gameWidth*0.01);

  //Start countdown, then music and timer
  countdown = 4;
  countdownTimer = game.time.create()//Create a new timer called countdownTimer
  countdownTimer.repeat(1000, 4, function(){text.setText(countdown -= 1);}, this);
  countdownTimer.onComplete.add(function(){ //When countdown is finished, do that:
    countdownTimer.destroy(); //kill the now useless countdownTimer
    text.destroy(); //Remove the countdown text
    music.startPlaying(0, 1, 5000, endGame); //Start music with fadeIn from volume 0 to 1 in 5 seconds (5000 ms)
    beatLoopTimer = game.time.create(); //Create new timer for beatloop
    beatLoopTimer.loop(Phaser.Timer.SECOND*music.playing().tempo*difficulty, beatLoop, this); //music.playing() return an object of the current playing song, then we get the tempo of it
    beatLoopTimer.start(); //Start the beatLoopTimer when we finished setting it up
  });
  countdownTimer.start(); //Start the countdownTimer when we finished setting it up

  //Health bar j1
  var bmd = game.add.bitmapData(300,40);
           bmd.ctx.beginPath();
           bmd.ctx.rect(0,0,600,30);
           bmd.ctx.fillStyle = '#00685e';
           bmd.ctx.fill();

           healthBarJ1 = game.add.sprite(100,100,bmd);
           healthBarJ1.anchor.y = 0.5;

//Health bar j2
var bmd2 = game.add.bitmapData(300,40);
          bmd2.ctx.beginPath();
          bmd2.ctx.rect(0,0,600,30);
          bmd2.ctx.fillStyle = '#00685e';
          bmd2.ctx.fill();

          healthBarJ2 = game.add.sprite(gameWidth-400,100,bmd2);
          healthBarJ2.anchor.y = 0.5;

}
//executed on each beat (change with difficulty)
function beatLoop(){
  console.log("Test"); //Test message
  console.log(p1.getPv());
  console.log(p2.getPv());

//health bar update
  barWidthJ1 = healthBarJ1.width;
    healthBarJ1.width = p1.getPv() * 2;

  barWidthJ2 = healthBarJ2.width;
    healthBarJ2.width = p2.getPv() * 2;

  if (p1.action==1){
    //animation CAC pour J1 ici
  }

  if (p1.action==p2.action && p1.action!=0){
      console.log("Blink")
  }
  if (p1.action==1 && p2.action==2){
    p1.pvAdd(-10);
  }
  if (p1.action==2 && p2.action==1){
    p1.pvAdd(-10);
  }

}

//Executed when music end (or when a player reach 0 pv)
function endGame(){
  beatLoopTimer.destroy(); //kill the beatloop timer (or it will run even if the game has ended)
  console.log('end');
}

function counter() {
  p1.counter();
  p2.counter();
}
