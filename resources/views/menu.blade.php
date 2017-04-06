@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('body')
<img id="rythmFighterBg" src="./img/Background.png"></img>

<form action="/game" method="get">
   <button type="submit" formaction="/game">play</button>
 </form>

 <form action="/info" method="get">
    <button type="submit" formaction="/info">check rules</button>
  </form>
@stop

@section('scripts')
<script>
$(function(){
  $('#rythmFighterBg').css('width', $(window).width())
                  .css('height', $(window).height());
});
</script>

@stop
