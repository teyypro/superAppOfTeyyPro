<script>
  import { onMount } from "svelte";


 


  import CharsContain from "../Chars/CharsContain.svelte";
import ChoicesPanel from "../ChoicesPanel/ChoicesPanel.svelte";
  import MeansContain from "../Means/MeansContain.svelte";
  import MixContain from "../Mix/MixContain.svelte";

  import ResultContain from "../Result/ResultContain.svelte";
  import WordsContain from "../Words/WordsContain.svelte";

  import EnterBoard from "./EnterBoard.svelte";
  import { choice } from "../store";

   

   
</script> 


<div id = 'mainArea'>
    
 
    <EnterBoard/>
  
    
          
    {#if $choice =='choices'}
        <ChoicesPanel/>
    {:else if $choice == 'chars'}
        <CharsContain/>
    {:else if $choice =='words'}
        <WordsContain/>
    
    {:else if $choice == 'means'}
        <MeansContain/>
    {:else if $choice == 'mix'}
        <MixContain/>
    {:else if $choice == 'result'}
        <ResultContain/>
    {/if}
    
</div>


<style>
 
    #mainArea{
        position: absolute;
    background-color: white;
    right: 0vh;
    bottom: 0;
    top: 5vh;
    left: 0vh;
    padding: 4vh;
    z-index:-1;
    }
   
</style>