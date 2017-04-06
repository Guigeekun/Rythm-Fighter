@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('scripts')
<script src="./js/game.js"></script>
@stop

@section('gameDiv')
<div id="rythmFighter">
  <img id="rythmFighterBg" src="./img/Background.png"></img>
</div>
@stop
