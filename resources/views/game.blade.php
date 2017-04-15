@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('scripts')
<script src="./js/gameClass.js"></script>
<script src="./js/game.js"></script>
@stop

@section('body')
<div class="meter">
  <span id="loadingBar" style="width: 0%"></span>
</div>
<div id="rythmFighter">
  <img id="rythmFighterBg" src="./img/Background.png"></img>
</div>
@stop
