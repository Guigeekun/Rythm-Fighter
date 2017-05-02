//Classe pour contruire les joueurs.
class player {
  constructor(left, down, right, sprite, reversed){ //Create player object with inputs and sprite name that was loaded in preload
    this._pv = 150;
    this._combo = false;
    this._action = 0;
    this.reversed = reversed || false;
    this.inputs = game.input.keyboard.addKeys({'left': left, 'down': down, 'right': right});
    this.spriteName = sprite;
    this.inputs.down.onDown.add(this._down, this);
    this.inputs.left.onDown.add(this._left, this);
    this.inputs.right.onDown.add(this._right, this);
  }
  //Public methods (These are realy obvious, add more if you want ^^):
  addPv(value){
    //play animation when you get hit
    this._pv += value;
    if(this._pv > 0){
      game.add.tween(this.healthBar).to({width: (this.getPv()*this.bmd2.width)/150}, 300, Phaser.Easing.Linear.None, true);
      if(this._pv >= 80*150/100){
        this.bmd.ctx.fillStyle = '#80FF00';
        this.bmd.ctx.fill();
      }else if (this._pv >= 30*150/100){
        this.bmd.ctx.fillStyle = '#FFFF00';
        this.bmd.ctx.fill();
      }else{
        this.bmd.ctx.fillStyle = '#DF0101';
        this.bmd.ctx.fill();
      }
    }else {
      this.healthBar.destroy();
      return endGame();
    }
  }
  setCombo(value){
    this._combo = value;
  }
  spawn(spawnX, spawnY, width, height){
    this.sprite = game.add.sprite(spawnX, spawnY, this.spriteName); //Spawn the player sprite at given coordinates
    if(this.reversed){
      this.sprite.anchor.setTo(1, 1);
    }else{
      this.sprite.anchor.setTo(0, 1);
    }
    this.sprite.scale.setTo(width*0.1, height*0.1);
  }
  spawnHealthBar(barWidth, barHeight, x, y){
    //Create Bitmap images
    this.bmd = game.add.bitmapData(barWidth,barHeight);
    this.bmd.ctx.beginPath();
    this.bmd.ctx.rect(0,0,barWidth,barHeight);
    this.bmd.ctx.fillStyle = '#00685e';
    this.bmd.ctx.fill();
    this.bmd2 = game.add.bitmapData(barWidth,barHeight+6);
    this.bmd2.ctx.beginPath();
    this.bmd2.ctx.rect(0,0,barWidth,barHeight+6);
    this.bmd2.ctx.fillStyle = '#000000';
    this.bmd2.ctx.fill();

    this.healthBarBg = game.add.sprite(x,y,this.bmd2);
    this.healthBarBg.anchor.y = 0.5;
    this.healthBar = game.add.sprite(x,y,this.bmd);
    this.healthBar.anchor.y = 0.5;
    if(this.reversed){
      this.healthBar.angle =180;
      this.healthBarBg.angle =180;
    }
  }
  playAnimation(){
    if(this._action == 1){
      //play animation CAC
    }
    if(this._action == 2){
      //play animation CAST
    }
    if(this._action == 3){
      //play animation PRD
    }
  }
  actionReset(){
    this._action = 0;
  }
  //Return values (they're also realy obvious):
  getPv(){
    return this._pv;
  }
  getAction(){
    return this._action;
  }
  isCombo(){
    return this._combo;
  }
  //Private methods (underscore is a convention, even if it doesn't work in javascript ^^"):
  //1: CAC    2: CAST    3: GUARD
  _left(){
    if(this._action == 0){
      if(this.reversed){
        this._action = 1;
      }else{
        if(this._combo){
          this._action = 0;
        }else{
          this._action = 3;
        }
      }
    }
  }
  _down(){
    if(this._action == 0){
      this._action = 2;
    }
  }
  _right(){
    if(this._action == 0){
      if(this.reversed){
        if(this._combo){
          this._action = 0;
        }else{
          this._action = 3;
        }
      }else{
        this._action = 1;
      }
    }
  }
}

class Music { //Beware, this is realy FAT !!!
  constructor(keyDown, keyUp, audioType){
    //define volume change inputs
    this.inputs = game.input.keyboard.addKeys({'down': keyDown, 'up': keyUp});
    this.inputs.down.onDown.add(this._volDown, this);
    this.inputs.up.onDown.add(this._volUp, this);

    //Object variables
    this.player;
    this.current = {}; //Curently loaded song, defined in load() method
    this.audioType = audioType;
    this.titleList = [];
    this.mp3Paths = [];
    this.oggPaths = [];
    this.tempo = [];
    this.startAt = [];
  }
  addSongs(songs){
    try{
      if(Array.isArray(songs)){ //It can be an array of song objects or just one object
        $.each(songs, function(index, value){
          this.titleList.push(value.title);
          this.mp3Paths.push(value.pathMp3);
          this.oggPaths.push(value.pathOgg);
          this.tempo.push(value.tempo);
          this.startAt.push(value.startAt);
        });
      }else if(typeof songs === "object"){
        this.titleList.push(songs.title);
        this.mp3Paths.push(songs.pathMp3);
        this.oggPaths.push(songs.pathOgg);
        this.tempo.push(songs.tempo);
        this.startAt.push(songs.startAt);
      }
    }
    catch(err){
      console.log(err);
    }
  }
  load(format, title){
    try{
      if(format.toLowerCase() == "mp3"){
        game.load.audio(this.audioType, this.mp3Paths[this.titleList.indexOf(title)]);
      }else if (format.toLowerCase() == "ogg"){
        game.load.audio(this.audioType, this.oggPaths[this.titleList.indexOf(title)]);
      }
      this.current = {title: title,
        pathMp3: this.mp3Paths[this.titleList.indexOf(title)],
        pathOgg: this.oggPaths[this.titleList.indexOf(title)],
        tempo: this.tempo[this.titleList.indexOf(title)],
        startAt: this.startAt[this.titleList.indexOf(title)]}
    }
    catch(err){
      console.log(err);
    }
  }
  decode(callBack){ //Decode audio and run function when it finish
    this.player = game.add.audio(this.audioType);
    this.player.volume = 1;
    if(typeof callBack !== "undefined"){
      this.player.onDecoded.add(callBack, this);
    }
  }
  startPlaying(startVol, endVol, duration, endCallback, marker = ""){ //Start the song with fadeIn effect and custom parameters (that are obvious to understand)
    this.player.volume = startVol;
    this.player.play(marker, this.current.startAt);
    this.player.fadeTo(duration, endVol);
    if(typeof endCallback !== "undefined"){try{this.player.onStop.add(endCallback, this);}catch(err){console.log(err);}}
  }
  playing(){ //return the current playing song object (title, path, tempo...)
    return this.current;
  }
  //Private function for volume change
  _volDown(){
    if(this.player.volume >= 0.1){
      this.player.volume -= 0.1;
    }else{
      this.player.volume = 0
    }
  }
  _volUp(){
    if(this.player.volume <= 0.9){
      this.player.volume += 0.1;
    }else{
      this.player.volume = 1
    }
  }
}
