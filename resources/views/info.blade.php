@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('body')
<img id="rythmFighterBg" src="img/Background.png"></img>
<div align="center" style="overflow: auto; height: 100%">
  <FONT size="5%" color="#FFFFFF" face="arial">
    <h1><u>Règles du jeu</h1></u>
    <h2><u>un jeu de combat</u></h2>
    <P>Ce jeu a été pensé comme un jeu de combat: c'est à dire que le but du jeu est de faire chuter les points de vies de l'adversaire a 0; en plus d'etre un jeu qui se joue EXCLUSIVEMENT à 2 joueurs.</p>
      <br>vous avez le choix entre plusieurs types d'attaques:
      <br><u>-l'attaque à distance:</u></br>
      <p>touche: </p>
      <br>joueur 1: ;joueur 2: </br>
      <br></br>
      <br><u>-l'attaque puissante</u></br>
      <br>touches:</br>
      <br>joueur 1: ;joueur 2: </br>
      <br><u>-la guard </u></br>
      <br>touches:</br>
      <br>joueur 1: ;joueur 2: </br>
     <h2><u>un jeu basé sur le principe du pierre feuille ciseaux</u></h2>
    <p>le principe est le même :
    <br>Chaques attaques representent pour d'autres leurs faiblesses et peuvent être trié selon le tableau suivant:
    <table style="width:100%">
    <h2><u>l'importance du rythme de la musique</h2></u>
     <p>cependant, ce jeu reste plus compliqué qu'un pierre feuille ciseau classique puisqu'il y a également la dimension du rythme qui se rajoute aux regles:</p>
     <br></br>
     <br>toutes les attaques serons effectués sur le temps de la musique, ou en contre temps.</br>
     <br>un joueur peut attaquer en contre temps si il inflige des dégats a l'adversaire sur le temps de la musique</br>
     <br></br>
     <br>appuyer sur une touche affiche un petit icone en dessous du personnage, qui informera l'autre joueur sur la prochaine attaque effectué </br>
     <br>Il est donc fortement conseillé d'entrer votre attaque au dernier moment affin de donner le moins possible l'opportunité avotre adversaire de s'adapter à votre attaque</br>
  </font>
</div>
@stop

@section('scripts')
@stop
