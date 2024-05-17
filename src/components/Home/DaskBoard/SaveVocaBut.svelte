<script>
  import { dayDisplay, onDay, onSortSaveVoca } from "../store";

    export let date,sort
    function Update(){
        $onDay = date
        $onSortSaveVoca = sort
        $dayDisplay = false
    }
</script>
<button on:click ={Update}>{date}</button>

<style>
    button {
        height: 4vh;
    margin: 1vh;
    border-radius: 1vh;
    font-size: 2vh;
    font-weight: bold;
    font-family: monospace;
    background-color: transparent;
    color: #1d1d1d;
    width: 32vh;
    }

    button:hover{
        background-color: #1d1d1d;
        color:#fefefe;
    }
</style>