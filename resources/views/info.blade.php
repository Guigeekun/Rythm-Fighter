@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('body')
<div align="center">
<img id="rythmFighterBg" src="images/Background.png"></img>
<FONT size="30" color="#FFFFFF" face="arial">
<h2><u>voici les regles</h2></u>
<h1><u>un jeu de combat</u></h1>
<P> ce jeu a été pensé comme un jeu de combat :c' est a dire que le but du jeu est de faire chuter les points de vies de l'adversaire a 0<p>
<p>vous avez le choix entre plusieurs types d'attaques :
  <p>la petite attaque
  <p>la grande attaque
  <p>la guard
  <p> et la guard break
    <h1><u>u jeu basé sur le principe du pierre feuille ciseaux </h1></u>
 <p>meme s'il reste plus compliqué (heureusement) le principe reste le meme.
  <p>chaques attaques representent pour d'autres leurs faiblesses
    <p>voici le tableau de chaques faiblesses :
      <table style="width:100%"> 
</font>

@stop
@section('scripts')
<script>
$(function(){
  $('#rythmFighterBg').css('width', $(window).width())
                  .css('height', $(window).height());
});



</script>
@stop
