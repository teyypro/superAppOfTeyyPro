<script>
    import Taskbar from "./TaskBar/Taskbar.svelte";
      import Taskboard from "./TaskBoard/Taskboard.svelte";
      import Textarea from "./TextArea/Textarea.svelte";
      import Dictionary from './Dictionary/Dictionary.svelte'
    import { dictionaryDS, editBoard} from "./store.js"
      import EditBoard from "./EditBoard/EditBoard.svelte";
      import AnswerSheet from "./TaskBoard/AnswerSheet.svelte";
    </script>
    <div id = 'taskbar'> 
     
            <Taskbar/>
        
    </div>
    <div id = 'conLis'>
        
    <Textarea/>
    <div id = 'contaitask'>
    
    <AnswerSheet/>
    </div>
    </div>
    
  
        <Dictionary/>

    
    {#if $editBoard}
        <EditBoard/>
    {/if}
    
    <style>
        #conLis{
            position: absolute;
    top: 5vh;
    height: 95vh;
    width: 100%;
    display: flex;
    background-color: #F0F4F9;
    
        }
        #contaitask{
            position: relative;
    display: flex;
    width: 30vw;
    margin-top: 4vh;
    margin-bottom: 4vh;
    flex-direction: column;
    margin-right: 4vh;

        }
        #taskbar{
            position: absolute;
    width: 100%;
    background-color: #ffffff;
    height: 5vh;
    display: flex;
    align-items: center;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    z-index: 1;
        }
    
    
    </style>