//Classe pour contruire les joueurs.
class player {
  constructor(left, down, right, sprite, reversed){ //Create player object with inputs and sprite name that was loaded in preload
    this._pv = 300;
    this._maxPv = this._pv
    this._combo = false;
    this._action = -1;
    this._win = 0;
    this.spriteName = sprite;
    this.reversed = reversed || false;
    this.inputs = game.input.keyboard.addKeys({'left': left, 'down': down, 'right': right});
    this.inputs.down.onDown.add(this._down, this);
    this.inputs.left.onDown.add(this._left, this);
    this.inputs.right.onDown.add(this._right, this);
  }
  //Public methods (These are realy obvious, add more if you want ^^):
  addPv(value){
    //play animation when you get hit
    this._pv += value;
    if(this._pv > 0){
      this.anim.damage.play().onComplete.add(function(){this.anim.static.play("", true)}, this);
      game.add.tween(this.healthBar).to({width: (this.getPv()*this.bmd2.width)/this._maxPv}, 200, Phaser.Easing.Linear.None, true);
      if(this._pv >= 80/100*this._maxPv){
        this.bmd.ctx.fillStyle = '#80FF00';
        this.bmd.ctx.fill();
      }else if (this._pv >= 30/100*this._maxPv){
        this.bmd.ctx.fillStyle = '#FFFF00';
        this.bmd.ctx.fill();
      }else{
        this.bmd.ctx.fillStyle = '#DF0101';
        this.bmd.ctx.fill();
      }
    }else {
      this.healthBar.width = 0;
      this.anim.death.play().onComplete.add(function(){this.anim.spawn.play().onComplete.add(function(){this.anim.static.play("", true)}, this)}, this);
      return endGame();
    }
  }
  setCombo(value){
    this._combo = value;
  }
  spawn(spawnX, spawnY, width, height){
    if (this.reversed){
      this.icon = game.add.sprite(gameWidth*0.68, gameHeight*0.83, 'icon', 0);
    }else{
      this.icon = game.add.sprite(gameWidth*0.05, gameHeight*0.83, 'icon', 4);
    }
    this.icon.scale.setTo((gameWidth/1600)/2,(gameHeight/900)/2);
    this.sprite = game.add.sprite(spawnX, spawnY, this.spriteName); //Spawn the player sprite at given coordinates
    if(this.reversed){
      this.sprite.anchor.setTo(1, 1);
    }else{
      this.sprite.anchor.setTo(0, 1);
    }
    this.sprite.width = width;
    this.sprite.height = height;
    this.anim = {'static': this.sprite.animations.add('statique' + this.spriteName, [0, 1, 2, 3], 7),
    'damage': this.sprite.animations.add('damage' + this.spriteName,[17], 15),
    'death': this.sprite.animations.add('death' + this.spriteName,[51,52,53,54,55,56,57,58,59], 12.67),
    'spawn': this.sprite.animations.add('death' + this.spriteName,[59,58,57,56,55,54,53,52,51], 12.67),
    'cac': this.sprite.animations.add('cac' + this.spriteName, [68,69,70,71,72,73,74,75,76,77,78,79,80,81], 22.17),
    'cast': this.sprite.animations.add('cast' + this.spriteName, [85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101], 26.92),
    'def': this.sprite.animations.add('def' + this.spriteName, [102,103,104,105,106,107,108,109,110,111,112,113], 19)}
    this.anim.static.play("", true);
  }

  spawnHealthBar(barWidth, barHeight, x, y){
    //Create Bitmap images
    this.winCounter = game.add.text(x, y - barHeight/2, "Win : " + this._win,{ fill:'#ffffff', size:gameWidth*0.01 });
    this.winCounter.anchor.y = 1;
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
      this.healthBar.angle = 180;
      this.healthBarBg.angle = 180;
      this.winCounter.anchor.x = 1;
    }
  }
  playAnimation(){
    if(this._action == 1){
      this.anim.cac.play().onComplete.add(function(){this.anim.static.play("", true)}, this);
    }
    if(this._action == 2){
      this.anim.cast.play().onComplete.add(function(){this.anim.static.play("", true)}, this);
    //  if (this.reversed == 0){
    //  game.add.tween(this.sprite).to({x: this.sprite.x-0.20*gameWidth},300,Phaser.Easing.Linear.None, true).onComplete.add(function(){game.add.tween(this.sprite).to({x: this.sprite+0.2*gameWidth},300,Phaser.Easing.Linear.None, true)});
    //  }
    }
    if(this._action == 3){
      this.anim.def.play().onComplete.add(function(){this.anim.static.play("", true)}, this);
    }
  }
  addWin(){
    this._win += 1;
    this.winCounter.setText("Win : " + this._win)
  }
  actionReset(){
    this._action = 0;
    if(this.reversed){
      this.icon = game.add.sprite(gameWidth*0.68, gameHeight*0.83, 'icon', 0);
    }else{
      this.icon = game.add.sprite(gameWidth*0.05, gameHeight*0.83, 'icon', 4);
    }
      this.icon.scale.setTo((gameWidth/1600)/2,(gameHeight/900)/2);
}
  reset(){
    this._pv = this._maxPv;
    game.add.tween(this.healthBar).to({width: (this.getPv()*this.bmd2.width)/this._maxPv}, 200, Phaser.Easing.Linear.None, true);
    this.bmd.ctx.fillStyle = '#00685e';
    this.bmd.ctx.fill();
    this._combo = false;
    this._action = -1;
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
  getWin(){
    return this._win;
  }
  //Private methods (underscore is a convention, even if it doesn't work in javascript ^^"):
  //1: CAC    2: CAST    3: GUARD
  _left(){
    if(this._action == 0){
      if(this.reversed){
        this.icon = game.add.sprite(gameWidth*0.68, gameHeight*0.83, 'icon',1);
        this._action = 1;
      }else{
        if(this._combo){
          this._action = 0;
        }else{
          this._action = 3;
          this.icon = game.add.sprite(gameWidth*0.05, gameHeight*0.83, 'icon',7);
        }
      }
    }
    this.icon.scale.setTo((gameWidth/1600)/2,(gameHeight/900)/2);
  }
  _down(){
    if(this._action == 0){
      if(this.reversed){
          this.icon = game.add.sprite(gameWidth*0.68, gameHeight*0.83, 'icon',2);
      }else{
          this.icon = game.add.sprite(gameWidth*0.05, gameHeight*0.83, 'icon',6);
      }
      this._action = 2;
    }
    this.icon.scale.setTo((gameWidth/1600)/2,(gameHeight/900)/2);
  }
  _right(){
    if(this._action == 0){
      if(this.reversed){
        if(this._combo){
          this._action = 0;
        }else{
          this.icon = game.add.sprite(gameWidth*0.68, gameHeight*0.83, 'icon',3);
          this._action = 3;
        }
      }else{
        this._action = 1;
        this.icon = game.add.sprite(gameWidth*0.05, gameHeight*0.83, 'icon',5);
      }
    }
    this.icon.scale.setTo((gameWidth/1600)/2,(gameHeight/900)/2);
  }
}

class Music { //Beware, this is realy FAT !!!
  constructor(keyDown, keyUp, audioType){
    //define volume change inputs
    this.inputs = game.input.keyboard.addKeys({'down': keyDown, 'up': keyUp});
    this.inputs.down.onDown.add(this._volDown, this);
    this.inputs.up.onDown.add(this._volUp, this);

    //Object variables
    this._lock = true;
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
  startPlaying(startVol, endVol, duration, endCallback, restart, marker = ""){ //Start the song with fadeIn effect and custom parameters (that are obvious to understand)
    this._lock = false;
    this.player.volume = startVol;
    if(!restart){
      this.player.play(marker, this.current.startAt);
    }else {
      this.player.restart(marker, this.current.startAt);
    }
    this.player.fadeTo(duration, endVol);
    if(typeof endCallback !== "undefined"){try{this.player.onStop.add(endCallback, this);}catch(err){console.log(err);}}
  }
  playing(){ //return the current playing song object (title, path, tempo...)
    return this.current;
  }
  endMusic(){
    this.player.fadeOut(1000);
    this._lock = true;
  }
  //Private function for volume change
  _volDown(){
    if(!this._lock){
      if(this.player.volume >= 0.1){
        this.player.volume -= 0.1;
      }else{
        this.player.volume = 0
      }
    }
  }
  _volUp(){
    if(!this._lock){
      if(this.player.volume <= 0.9){
        this.player.volume += 0.1;
      }else{
        this.player.volume = 1
      }
    }
  }
}
