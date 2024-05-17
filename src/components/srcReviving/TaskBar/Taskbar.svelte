<script>
    import { choice, dictionaryDS, suggestTF, suggestUpdate } from "../store.js"
  import WordSuggestBoard from "../wordSuggest/wordSuggestBoard.svelte";
  import TaskChoice from "./TaskChoice.svelte";
  import TaskEnterBoard from "./TaskEnterBoard.svelte";
    import TaskResult from "./TaskResult.svelte"





   


     function Dictest(){
        $dictionaryDS =!$dictionaryDS
    }
</script>


  

    <div id = "containerExtra">
     
       <div id = 'containsuggest'>
            
            {#if $suggestTF}
                {#key $suggestUpdate}
                    <WordSuggestBoard/>
                {/key}
            {/if}
       </div>
       <div id = 'containgesture'> 
        {#if $choice == 'enter'}
        <TaskEnterBoard/>
        {:else if $choice == 'choices'}
        <TaskChoice/>
        {:else}
        <TaskResult/>
        {/if}
        <button id = 'dic' on:click ={Dictest} class = 'extrabut'><span class="material-symbols-outlined">
            dictionary
            </span>dictionary</button>
    </div>
        
       
   
    

</div>
    

<style>
#containsuggest{
    position: relative;
    flex-grow: 1;
    height: 100%;
}
    #containgesture{
        position: relative;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    width: max-content;
    }


    button{
        background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: #535353;
    transition: 0.1s;
    width: max-content;
        display: flex;
    align-items: center;
  
        border-radius: 0.5vh;
        font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    padding-inline:1vh;
    margin-inline:1vh;
 
    }

    button:hover{
        padding-block: 0.3vh;
        background-color: #eeeeee;
        color:#1d1d1d;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
    button:active{
        scale:0.95;
        background-color: #535353;
        color:#eeeeee;
        
    }
    #containerExtra{
        position: absolute;
    display: flex;
    align-items: center;
    right: 0;
    left: 0;
    height: 100%;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    }

 
   
    span{
        font-size: 3vh;
    }
 




   


   

    
</style>