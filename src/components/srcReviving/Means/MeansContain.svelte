<script>

    import { AnsList, LisEnter, MaxSlide, MinSlide, onSide, resMean,  resWord} from "../store"

  import { onMount } from "svelte";
  import MeansBack from "./MeansBack.svelte";
  import FinishButtonMeans from './FinishButtonMeans.svelte'
  import MeansNext from './MeansNext.svelte'
  import MeansBoard from './MeansBoard.svelte'
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
<div id = 'containMeans' transition:scale={{duration:500}}>
    {#if $MaxSlide && $MinSlide}
        <MeansBack/>
        <FinishButtonMeans/>
    {:else if $MaxSlide && !$MinSlide}
        <FinishButtonMeans/>
    {:else if $MinSlide}
        <MeansNext/>
    {:else}
        <MeansBack/>
        <MeansNext/>
    {/if}
    
    <div id ='containMeansSlide'>
        <div id = 'slideContain'>
            {#each $LisEnter as element,i}
                <MeansBoard words = {$resWord[i]}  means = {$resMean[i]} sort = {i}/> 
            {/each} 
        </div>
    </div>
</div>

<style>
    #containMeans{
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    #containMeansSlide{
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