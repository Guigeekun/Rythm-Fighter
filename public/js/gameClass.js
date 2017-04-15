//Classe pour contruire les joueurs.
class player {
  constructor(left, down, right, up){
    this.pv = 100;
    this.stun = false;
    this.action = 0;
    this.inputs = game.input.keyboard.addKeys({'left': left, 'down': down, 'right': right, 'up': up});
    this.inputs.up.onDown.add(this._up, this);
    this.inputs.down.onDown.add(this._down, this);
    this.inputs.left.onDown.add(this._left, this);
    this.inputs.right.onDown.add(this._right, this);
  }
  //Méthodes publiques:
  pvAdd(value){
    this.pv += value;
  }
  stun(value){
    this.stun = value;
  }
  counter(){
    this.action = 0;
    this.stun = true;
  }
  //Retour de variables de l'objet:
  pv(){
    return this.pv;
  }
  isStunned(){
    return this.stun;
  }
  action(){
    return this.action;
  }
  //Méthodes privés (underscore par convention, même si ne fonctionne pas dans javascript ^^"):
  _left(){
    if(!this.isStunned()){
      this.action = 1;
    }else{this.action = 0;}
  }
  _down(){
    if(!this.isStunned()){
      this.action = 2;
    }else{this.action = 0;}
  }
  _right(){
    if(!this.isStunned()){
      this.action = 3;
    }else{this.action = 0;}
  }
  _up(){
    if(!this.isStunned()){
      this.action = 4;
    }else{this.action = 0;}
  }
}
