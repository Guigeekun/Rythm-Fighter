@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('body')
<img id="rythmFighterBg" src="./img/Background.png"></img>

<form action="/game" method="get">
   <button class="btn" type="submit" formaction="/game">play</button>
 </form>

 <form action="/info" method="get">
    <button class="btn" type="submit" formaction="/info">check rules</button>
  </form>
@stop

@section('scripts')
@stop
