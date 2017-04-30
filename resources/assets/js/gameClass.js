//Classe pour contruire les joueurs.
class player {
  constructor(left, down, right, up, sprite){ //Create player object with inputs and sprite name that was loaded in preload
    this._pv = 150;
    this._stun = 0; //Number of turn the player is stunned
    this._action = 0;
    this.inputs = game.input.keyboard.addKeys({'left': left, 'down': down, 'right': right, 'up': up});
    this.spriteName = sprite;
    this.inputs.up.onDown.add(this._up, this);
    this.inputs.down.onDown.add(this._down, this);
    this.inputs.left.onDown.add(this._left, this);
    this.inputs.right.onDown.add(this._right, this);
  }
  //Public methods (These are realy obvious, add more if you want ^^):
  pvAdd(value){
    this._pv += value;
  }
  setStun(value){
    this._stun = value;
  }
  counter(){
    this._action = 0;
    this._stun = true;
  }
  spawn(spawnX, spawnY, width, height){
    this.sprite = game.add.sprite(spawnX, spawnY, this.spriteName); //Spawn the player sprite at given coordinates
    this.sprite.scale.setTo(width*0.1, height*0.1);
  }
  //Return values (they're also realy obvious):
  getPv(){
    return this._pv;
  }
  timeOfStun(){
    return this._stun;
  }
  isStunned(){
    if(this._stun <= 0){
      return false;
    }else{
      return true;
    }
  }
  action(){
    return this._action;
  }
  //Private methods (underscore is a convention, even if it doesn't work in javascript ^^"):
  _left(){ //For now, it sets action value to the given command and prevent from changing it when the player is stunned
    if(!this.isStunned()){
      this._action = 1;
    }else{this._action = 0;}
  }
  _down(){
    if(!this.isStunned()){
      this._action = 2;
    }else{this._action = 0;}
  }
  _right(){
    if(!this.isStunned()){
      this._action = 3;
    }else{this._action = 0;}
  }
  _up(){
    if(!this.isStunned()){
      this._action = 4;
    }else{this._action = 0;}
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
