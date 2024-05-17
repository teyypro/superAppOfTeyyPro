<script>
  import CancelControl from "./CancelControl/CancelControl.svelte";
import EditButton from "./EditButton.svelte";
  import EnterBoard from "./EnterBoard.svelte";
import Left from "./MainCompo/Left.svelte";
  import Middle from "./MainCompo/Middle.svelte";
  import Right from "./MainCompo/Right.svelte";

  import ToolControl from "./ToolControl/ToolControl.svelte";


  import { LeftContent, MiddleContent, RightContent, TFedit, theme} from './store.js'
</script>

<div id = 'container' style = "background-color: {$theme?'#ffffff':'#000000'};">
    
    <div class = 'compose' id = "left"><Left realContentLeft = {$LeftContent}/></div>
    <div class = 'compose' id = "middle"><Middle realContentMid = {$MiddleContent}/></div>
    <div class = 'compose' id = "right"><Right realContentRight = {$RightContent}/></div>
    

   
        
</div>

<ToolControl/>

<CancelControl/>

{#if $TFedit}
    <EnterBoard/>
{/if}
<style>

    #container{
        position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    }
    .compose{
        height: 7vh;
    display: flex;
   
    align-items: center;
    }
    #left{
        flex: 1;
    justify-content: right;
    }
    #middle{
    width: max-content;

    justify-content: center;
    }
    #right{
        flex: 1;
    justify-content: left;

    }
</style>