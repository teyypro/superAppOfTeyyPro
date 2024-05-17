<script>
  import { onMount } from "svelte";
  import { choice, resWord,resMean,CusList, reswholekey, resultTF, choiceOpt} from "../store";
  import { slide, blur } from 'svelte/transition'
    export let sort
    let color
    onMount(()=>{
        
        if ($resultTF[sort]){
            color = '#139487'
        } else {
            color = '#ff6464'
        }
    })
</script>
<div class = 'ansboard' in:slide={{duration:1000}}>
    <div class = 'ansWords'>{$resWord[sort]}</div>

    <div class = 'ansMeans'>{$resMean[sort]}</div>
    <div class = 'yourAns'  in:blur={{duration:1000}}>
        {#if $choiceOpt == 'chars'}
        <div class='truefalse' style='background-color: {color};'>{$reswholekey[sort]}</div>
        {:else }
        <div class='truefalse' style='background-color: {color};'>{$CusList[sort]}</div>
   
            {/if}
    </div>
</div>

<style>
    .truefalse{
        font-size: 2.2vh;
    font-family: monospace;
    width: max-content;
    padding-inline: 2vh;
    border-radius: 1vh;
    height: max-content;
    color: white;
    padding-block: 0.5vh;
    }
    .ansboard {
        position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    margin-block: 1vh;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    border-radius: 1vh;
    transition: 0.3s ease-in-out;
    }
    .ansboard:hover{
        transition: 0.1s ease-in-out;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    }
    .ansWords{
        padding: 1vh;
    font-size: 3vh;
    font-family: monospace;
    font-weight: bolder;
    flex: 1;
    }
  
    .ansMeans{
        padding: 1vh;
    font-size: 3vh;
    font-family: monospace;
    font-weight: bolder;
    flex: 1;
    }
    .yourAns{
        padding: 1vh;
    font-size: 3vh;
    font-family: monospace;
    font-weight: bolder;
    flex: 1;
    }
</style>