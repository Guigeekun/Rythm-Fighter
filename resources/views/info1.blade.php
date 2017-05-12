@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('body')
<img id="rythmFighterBg" src="img/Background.png"></img>
<div align="center" style="overflow: auto; height: 100%">
  <FONT size="5%" color="#FFFFFF" face="arial">
 

<h1><u>Règles du jeu</h1></u>                              

<header>
   <h1>un jeu de combat</h1>
</header>
<article>
    <div class="text">
    <P>Ce jeu a été pensé comme un jeu de combat: c'est à dire que le but du jeu est de faire chuter les points de vies de l'adversaire a 0; en plus d'etre un jeu qui se joue EXCLUSIVEMENT à 2 joueurs.</p>
      <br>vous avez le choix entre plusieurs types d'attaques:</br>
      </div>
    


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
    <td><img id="cast" src="img/icon/cast-icon.png" style="width:100px;height:100px;"></img></td>
    <td><h1>s</h1></td>
    <td>touche directionnelle basse</td>
    
  <tr>
    <td><img id="guard" src="img/icon/cac-icon.png" style="width:100px;height:100px;"></img></td>
    <td><h1>d</h1></td>
    <td>touche directionnelle droite</td>
    <footer>
    copie right mes couilles
    </footer>
  </tr>
</table>
</article>
<nav>
  <ul>
    <li><a href="/info1">un jeu de combat</a></li>
    <br></br>
    <br></br>
    <br></br>
    <li><a href="/info2">un jeu basé sur le pierre-feuille-ciseau</a></li>
    <br></br>
    <br></br>
    <br></br>
    <li><a href="/info3">l'importance du rythme</a></li>
  </ul>
      </nav>
       <footer>
    copie right mes couilles
    </footer>
</div>
 </font>