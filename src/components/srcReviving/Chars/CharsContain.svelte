<script>
  import CharsNext from "./CharsNext.svelte";
    import { LisEnter, MaxSlide, MinSlide, onSide, resMean,  resWord } from "../store"
  import CharsBoard from "./CharsBoard.svelte";
  import { onMount } from "svelte";
  import CharsBack from "./CharsBack.svelte";
  import FinishButton from "./FinishButton.svelte";
  import { scale} from 'svelte/transition'
  onMount(()=>{
    if ($LisEnter.length == 1){
        $MaxSlide = true
        $MinSlide = false
    } else {
        $MinSlide = true
        $MaxSlide = false
    }
    $onSide = 0
  })
</script>
<div id = 'containChars' transition:scale={{duration:500}}>
    {#if $MaxSlide && $MinSlide}
        <CharsBack/>
        <FinishButton/>
    {:else if $MaxSlide && !$MinSlide}
        <FinishButton/>
    {:else if $MinSlide}
        <CharsNext/>
    {:else}
        <CharsBack/>
        <CharsNext/>
    {/if}
    
    <div id ='containCharsSlide'>
        <div id = 'slideContain'>
            {#each $LisEnter as element,i}
                <CharsBoard words = {$resWord[i]}  means = {$resMean[i]} sort = {i}/> 
            {/each} 
        </div>
    </div>
</div>

<style>
    #containChars{
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    #containCharsSlide{
        top: 5vh;
    position: absolute;
    width: 100%;
    bottom: 5vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    }

    #slideContain{
        position: relative;
    width: max-content;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    transition: 0.5s ease-in-out;
    }
</style>