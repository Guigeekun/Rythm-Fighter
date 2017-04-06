@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('gameDiv')
<div id="rythmFighter">
  <img id="rythmFighterBg" src="./img/Background.png"></img>
</div>
@stop

@section('scripts')
<script src="./js/game.js"></script>
@stop
