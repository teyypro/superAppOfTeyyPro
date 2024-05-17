<script>
	import Taskbar from './TaskBar/Taskbar.svelte'
	import { dictionaryDS } from './store';
	import Dictionary from './Dictionary/Dictionary.svelte'
  import MainArea from './MainArea/MainArea.svelte';
  
</script>

<div id = 'taskbar'> 

        <Taskbar/>
    
</div>
<MainArea/>


    <Dictionary/> 

<style>
	 #taskbar{
        position: absolute;
    width: 100%;
    background-color: #ffffff;
    height: 5vh;
    display: flex;
    align-items: center;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    z-index: 5;
    }


</style>