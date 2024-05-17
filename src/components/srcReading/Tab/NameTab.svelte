<script>
  import { nameTF, onTab, tab } from "../store.js";
  import { scale } from 'svelte/transition'


</script>
<button in:scale={{duration:500}} id = 'contaiNameDiv' on:click={()=>{$nameTF= false}}>{$tab[$onTab-1]}</button>

<style>
    #contaiNameDiv{
        position: fixed;
    z-index: 100;
    width: max-content;
    height: 4vh;
    background-color: #1d1d1d;
    left: 1vh;
    bottom: 1vh;
    border-radius: 1vh;
    color: #eeeeee;
    font-size: 2vh;
    font-weight: bold;
    border: 0;
    font-family: monospace;
    padding-inline: 3vh;
    opacity: 0.5;
    }

    #contaiNameDiv:hover{
        opacity:1
    }
</style>