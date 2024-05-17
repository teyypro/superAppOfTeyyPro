<script>

    import { AnsList, CusList, LisEnter, MaxSlide, MinSlide, MixRes, onSide, resMean,  resWord} from "../store"

  import { onMount } from "svelte";
  import MixBack from "./MixBack.svelte";
  import FinishButtonMix from './FinishButtonMix.svelte'
  import MixNext from './MixNext.svelte'
  import MKeyBoard from "./MKeyBoard.svelte";
  import MWordBoard from './MWordBoard.svelte'
 
  import MMeanBoard from "./MMeanBoard.svelte";
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
<div id = 'containMixs' transition:scale={{duration:500}}>
    {#if $MaxSlide && $MinSlide}
        <MixBack/>
        <FinishButtonMix/>
    {:else if $MaxSlide && !$MinSlide}
        <FinishButtonMix/>
    {:else if $MinSlide}
        <MixNext/>
    {:else}
        <MixBack/>
        <MixNext/>
    {/if}
    
    <div id ='containMixsSlide'>
        <div id = 'slideContain'>
            {#each $MixRes as element,i}
                {#if $MixRes[i] == 0}
                    <MKeyBoard words = {$resWord[i]}  means = {$resMean[i]} sort = {i}/>
                {:else if $MixRes[i] == 1}
                <MWordBoard words = {$resWord[i]}  means = {$resMean[i]} sort = {i}/>
                {:else if $MixRes[i] == 2}
                <MMeanBoard words = {$resWord[i]}  means = {$resMean[i]} sort = {i}/>
                {/if}
              
            {/each} 
        </div> 
    </div>
</div>

<style>
    #containMixs{
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    #containMixsSlide{
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