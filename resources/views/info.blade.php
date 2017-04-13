@extends('layouts.main')

@section('title', 'Rythm Fighter')

@section('body')
<img id="rythmFighterBg" src="./img/Background.png"></img>
@stop
@section('scripts')
<script>
$(function(){
  $('#rythmFighterBg').css('width', $(window).width())
                  .css('height', $(window).height());
});
</script>
@stop
