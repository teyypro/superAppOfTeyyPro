<script>
  import { LisEnter, resScore } from "../store";
import AnsBoard from "./AnsBoard.svelte";

</script>
<div id = 'bigContain'>
    <div id ='statusContain'>
        <div id = 'score'>{$resScore} of {$LisEnter.length}</div>
      
    </div>
    <div id = 'resTiltle'>
        <div class = 'restile'>WORDS/CLAUSES</div>
        <div class = 'restile'>MEANINGS</div>
        <div class = 'restile'>YOUR ANSWER</div>
    </div>
    <div id = 'resContain'>
        {#each $LisEnter as element,i}
            <AnsBoard sort ={i}/>
        {/each}
        
    </div>
</div>

<style>
    #score{
        font-size: 4vh;
    font-family: monospace;
    font-weight: bold;
    padding: 1vh;
    padding-inline: 3vh;
    color: #fefefe;
    border-radius: 1.5vh;
    background-color: #1d1d1d;
    }

    .restile{
        padding: 1vh;
    font-size: 4vh;
    font-family: monospace;
    font-weight: bolder;
    flex: 1;
    color: #535353;
    }
    #bigContain{
        position: absolute;
    top: 4vh;
    bottom: 4vh;
   
    left: 4vw;
    right: 3vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    }

    #statusContain{
        position: relative;
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 2vh;
    }
    #resContain{
        position: relative;
    width: 100%;
    height: 64vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1vh;
    top: 1vh;
    }
    #resTiltle{
        position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    border-bottom: 0.2vh solid #535353;
    }
</style>