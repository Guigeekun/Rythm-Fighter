//Difficulties = 1: Hard 2: normal, 4: easy (Selection menu in the future ?)
var difficulty = 2;
var counterTime = false;
var gameWidth;
var gameHeight;

//Music global variable
var music;

//Game window creation
var game = new Phaser.Game("100", "100", Phaser.CANVAS, 'rythmFighter', { preload: preload, create: create}, true);


//load sprites and ressources
function preload() {
  gameWidth = game.world.width;
  gameHeight = game.world.height;

  //Loading state function
  game.load.onFileComplete.add(loading, this);

  //add loading text
  text = game.add.text(gameWidth*0.5, gameHeight*0.5, 'Loading...', { fill:'#ffffff', size:"20" });
  text.anchor.setTo(0.5, 0.5)

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
  p1 = new player(Phaser.Keyboard.Q, Phaser.Keyboard.S, Phaser.Keyboard.D, 'player1');
  p2 = new player(Phaser.Keyboard.LEFT, Phaser.Keyboard.DOWN, Phaser.Keyboard.RIGHT, 'player2', true);

  //Decode music and callback function
  music.decode(startGame);
}

//startGame run when the music is decoded by the browser
function startGame(){

  //Delete loading bar and add player sprites on specific coordinates.
  $(".meter").remove();
  p1.spawn(gameWidth*0.165, gameHeight*0.8, gameWidth*0.01, gameWidth*0.01);
  p2.spawn(gameWidth*0.835, gameHeight*0.8, gameWidth*0.01, gameWidth*0.01);

  //Health bars
  p1.spawnHealthBar(gameWidth*0.33, gameHeight*0.05, gameWidth*0.0825, gameHeight*0.1);
  p2.spawnHealthBar(gameWidth*0.33, gameHeight*0.05, gameWidth*0.9175, gameHeight*0.1);

  //Start countdown, then music and timer
  countdown = 4;
  countdownTimer = game.time.create()//Create a new timer called countdownTimer
  countdownTimer.repeat(1000, 4, function(){text.setText(countdown -= 1);

     text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
      //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
      text.setTextBounds(0, 100, gameWidth, gameHeight);}, this);
  countdownTimer.onComplete.add(function(){ //When countdown is finished, do that:
    countdownTimer.destroy(); //kill the now useless countdownTimer
    text.destroy(); //Remove the countdown text
    music.startPlaying(0, 1, 5000, endGame); //Start music with fadeIn from volume 0 to 1 in 5 seconds (5000 ms)
    beatLoopTimer = game.time.create(); //Create new timer for beatloop
    beatLoopTimer.loop(Phaser.Timer.SECOND*music.playing().tempo*difficulty/2, beatLoop, this); //music.playing() return an object of the current playing song, then we get the tempo of it
    beatLoopTimer.start(); //Start the beatLoopTimer when we finished setting it up
  });
  countdownTimer.start(); //Start the countdownTimer when we finished setting it up

}
//executed on each beat (change with difficulty)
function beatLoop(){
  p1Action = p1.getAction();
  p2Action = p2.getAction();

  if(!counterTime){
    p1.playAnimation();
    p2.playAnimation();
    //battle system
    if (p1Action != 0 || p2Action != 0 ){
      if(p1Action == p2Action && p1Action != 3 && p2Action != 3){
        console.log("blink");
      }else if ((p1Action == 1 && (p2Action == 2 || p2Action == 0)) || (p1Action == 2 && (p2Action == 3 || p2Action == 0)) || (p1Action == 3 && (p2Action == 2 || p2Action == 0))){
        p2.addPv(-10);
        p1.setCombo(true);
        p1.actionReset();
      }else if ((p2Action == 1 && (p1Action == 2 || p1Action == 0)) || (p2Action == 2 && (p1Action == 3 || p1Action == 0)) || (p1Action == 3 && (p2Action == 2 || p1Action == 0))){
        p1.addPv(-10);
        p2.setCombo(true);
        p2.actionReset();
      }
    }
    counterTime = true;
  }else {
    if(p1Action != 0 && p1.isCombo()){
      p2.addPv(-5);
    }else if (p2Action != 0 && p2.isCombo()) {
      p1.addPv(-5);
    }
    p1.actionReset();
    p2.actionReset();
    counterTime = false;
  }
}

//Executed when music end (or when a player reach 0 pv)
function endGame(){
  beatLoopTimer.destroy(); //kill the beatloop timer (or it will run even if the game has ended)
  console.log('end');
}
