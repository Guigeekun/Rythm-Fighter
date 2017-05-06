@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('body')
<img id="rythmFighterBg" src="img/Background.png"></img>
<div align="center" style="overflow: auto; height: 100%">
  <FONT size="5%" color="#FFFFFF" face="arial">
    
  <h1><u>Règles du jeu</h1></u>
        <style>

header, footer {
    padding: 1em;
    color: white;
    background-color: black;
    clear: left;
    text-align: center;
}



nav ul {
    list-style-type: none;
    padding: 0;
}
   
nav ul a {
    text-decoration: none;
}

article {
    margin-left: 170px;
    border-left: 1px solid gray;
    padding: 1em;
    overflow: hidden;
}
</style>


<div class="container">

<header>
   <h1>un jeu de combat</h1>
</header>
<article>
    
    <P>Ce jeu a été pensé comme un jeu de combat: c'est à dire que le but du jeu est de faire chuter les points de vies de l'adversaire a 0; en plus d'etre un jeu qui se joue EXCLUSIVEMENT à 2 joueurs.</p>
      <br>vous avez le choix entre plusieurs types d'attaques:</br>
      <style>
      table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
td, th {
    border: 1px solid #FFFFFF;
    text-align: left;
    padding: 8px;
    background-color:#999999;
}
</style>
<table>
  <tr>
    <th>attaques</th>
    <th>touches j1</th> 
    <th>touches j2</th>
  </tr>
  <tr>
    <td><img id="cac" src="img/icon/prd-icon.png" style="width:100px;height:100px;"></img></td>
    <td><h1>q</h1></td>
    <td>touche directionnelle gauche</td>
   
  </tr>
  <tr>
    <td><img id="cast" src="img/icon/cast-icon.png" style="width:100px;height:100px;"></td>
    <td><h1>s</h1></td>
    <td>touche directionnelle basse</td>
    
  <tr>
    <td><img id="guard" src="img/icon/cac-icon.png" style="width:100px;height:100px;"></td>
    <td><h1>d</h1></td>
    <td>touche directionnelle droite</td>
    
  </tr>
</table>
</article>
      
      <style>
   
nav ul a {
    text-decoration: none;
}

article {
    margin-left: 170px;
    border-left: 1px white;
    padding: 1em;
    overflow:hidden ;
}
</style>


<div class="container">

<header>
   <h1>Un jeu basé sur le pierre feuille ciseau</h1>
</header>
  

<article>
 
    <p>le principe de ce jeu est est basé sur le "pierre-feuille-ciseau" :
    voici les forces et les faiblesses des 3 attaques :</p>
    <img id="schema" src="img/icon/schema.png" style="width:500px;height:400px;"></img>
</article>
    
      <style>

header, footer {
    padding: 1em;
    color: white;
    background-color: black;
    clear: left;
    text-align: center;
}



nav ul {
    list-style-type: none;
    padding: 0;
}
   
nav ul a {
    text-decoration: none;
}

article {
    margin-left: 170px;
    border-left: 1px solid gray;
    padding: 1em;
    overflow: hidden;
}
</style>


<div class="container">

<header>
   <h1>l'importance du rythme</h1>
</header>
  
<nav>
  <ul>
   
  </ul>
</nav>
<article>
     <p>cependant, ce jeu est plus complexe qu'un pierre feuille ciseau classique puisqu'il comprend également la dimension rythmique:</p>
     <br></br>
     <br>toutes les attaques seront effectuées sur le temps de la musique, ou à contre temps.</br>
     <br>un joueur peut attaquer à contre temps si celui-ci inflige des dégats à l'adversaire sur le temps de la musique</br>
     <br></br>
     <br>appuyer sur une touche affiche en dessous du personnage l'attaque qui sera jouée, informant ainsi l'adversaire</br>
     <br>Il est donc fortement conseillé d'entrer son attaque au dernier moment, afin de donner le moins d'opportunité possible à son adversaire de s'adapter.
     la barre suivante :<img id="cac" src="img/icon/prd-icon.png" style="width:500px;height:100px;"></img>     aidera le joueur à respecter le rythme</br>
     </article>
  </font>
</div>
@stop

@section('scripts')
@stop
