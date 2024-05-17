<script>
  import { selectedText } from "../store";
  import { slide } from 'svelte/transition'
    function Backene(){
        $selectedText = ''
    }
</script>

<button id = 'backene' on:click = {Backene}></button>

<div id = 'noresult' transition:slide={{duration:300}}>Opp!! No data found.</div>


<style>
    #backene{
        position: fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        opacity: 0;
    }
    #noresult{
        position: fixed;
    top: 0;
    transform: translate(-50%,94vh);
    left: 50%;
    width: 15vw;
    height: 5vh;
    background-color: #fb4242;
    color: #eeeeee;
    font-size: 2.5vh;
    font-family: cursive;
    border-radius: 1vh;
    text-align: center;
    padding-inline: 0vh;
    line-height: 5vh;
    z-index: 99;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    }
</style>