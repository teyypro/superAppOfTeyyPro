<script>

    import { AnsList, LisEnter, MaxSlide, MinSlide, onSide, resMean, resWord } from "../store"

  import { onMount } from "svelte";
  import WordsBack from "./WordsBack.svelte";
  import FinishButtonWords from './FinishButtonWords.svelte'
  import WordsNext from './WordsNext.svelte'
  import WordsBoard from './WordsBoard.svelte'
  import { scale} from 'svelte/transition'
  $AnsList = []
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
<div id = 'containWords' transition:scale={{duration:500}}>
    {#if $MaxSlide && $MinSlide}
        <WordsBack/>
        <FinishButtonWords/>
    {:else if $MaxSlide && !$MinSlide}
        <FinishButtonWords/>
    {:else if $MinSlide}
        <WordsNext/>
    {:else}
        <WordsBack/>
        <WordsNext/>
    {/if}
    
    <div id ='containWordsSlide'>
        <div id = 'slideContain'>
            {#each $LisEnter as element,i}
                <WordsBoard words = {$resWord[i]} means = {$resMean[i]} sort = {i}/> 
            {/each} 
        </div>
    </div>
</div>

<style>
    #containWords{
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    #containWordsSlide{
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