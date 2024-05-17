<script>
  import { dayDisplay, onSortSaveVoca } from "../store";
  import ChooseDay from "./ChooseDay.svelte";
  import DayDisplay from "./DayDisplay.svelte";
  import Daychoice from "./Daychoice.svelte";
  import SaveVocaBoard from "./SaveVocaBoard.svelte";
  
 
  
</script>

<div id = 'containDaskSave'>
    {#key $onSortSaveVoca}
    {#if $onSortSaveVoca == 'none'}
        <Daychoice></Daychoice>
        <ChooseDay/>
    {:else}
        <Daychoice></Daychoice>
        <SaveVocaBoard/>
    {/if}
    {/key}
    {#if $dayDisplay}
        <DayDisplay/>
    {/if}
    
    
</div>


<style>
 
    #containDaskSave {
        position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fefefe;
    display: flex;
    justify-content: flex-end;
    }
</style>