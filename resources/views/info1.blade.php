@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('body')
<img id="rythmFighterBg" src="img/Background.png"></img>
<div align="center" style="overflow: auto; height: 100%">
  <FONT size="5%" color="#FFFFFF" face="arial">
 <style>
 background-color :
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
    background-color:<img id="rythmFighterBg" src="img/Background.png"></img>;
}
</style>


<div class="texte1">

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