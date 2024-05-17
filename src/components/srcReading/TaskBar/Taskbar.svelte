<script>
    import TextTask from "../TextTask/TextTask.svelte";
    import ExtraTextTask from "../TextTask/ExtraTextTask.svelte";
    import { dictionaryDS, moreless, selectedText, tab, taskbar,  captureTF, imageTF, isOning, selectedTextForQuickTask, nameTF, selectedTextForQuickTaskPDF } from "../store.js"
  
    import Textarea from "../Textarea/Textarea.svelte";
    import {onMount} from 'svelte'

    import ImageTask from "../ImageTask/ImageTask.svelte";
    import ChoicePanel from "../ChoicePanel/ChoicePanel.svelte";
    import Dictionary from "../Dictionary/Dictionary.svelte";
    import PdFtask from "../PDFviewer/PDFtask.svelte";
    import UpopCap from "../PDFviewer/UpopCap.svelte";
  
    import UpBoard from "../UploadImage/UpBoard.svelte";
  import QuickTask from "../QuickTask/QuickTask.svelte";
  import NameTab from "../Tab/NameTab.svelte";
  import ContainPage from "./ContainPage.svelte";
  import SavingOwn from "../SavingOwn/SavingOwn.svelte";
  import NoResult from "../ChoicePanel/NoResult.svelte";
  import QuickTaskPdf from "../QuickTaskPDF/QuickTaskPDF.svelte";
  

  onMount(()=>{
    if (!localStorage.getItem('vocabulary')) {
    // If the item doesn't exist, set it in localStorage
    localStorage.setItem('vocabulary', JSON.stringify([]));
    console.log("okkkkkkkkkkkkkk")
  } else {
    console.log('ádsd')
  }
  })

</script>

<div class = "taskbar">
    
    {#if $taskbar == "text"}
      
        {#if $moreless == "more"}
        <TextTask/>
        {:else} 
        <ExtraTextTask/>
        {/if}
    {:else if $taskbar == "image"}
    
        <ImageTask/>
       
    {:else if $taskbar == "pdf"}
        
        <PdFtask/>
    {/if}

    {#if $selectedText == 'available'}
        <ChoicePanel/>
    {:else if $selectedText == 'owning'}
        <SavingOwn/>
    {:else if $selectedText == 'notfound'}
        <NoResult/>
    {/if}

    {#if $selectedTextForQuickTask}
        <QuickTask/>
    {/if}
    
    {#if $selectedTextForQuickTaskPDF}
    <QuickTaskPdf/>
{/if}
    
 
    <Dictionary/>
   

    {#if $captureTF}
    <UpopCap/>
    {/if}

   
    

    {#if $imageTF}
    <UpBoard/>
    {/if}

    {#if $nameTF}
        <NameTab/>
    {:else}
        <ContainPage/>
    {/if}
</div>

{#each $tab as item,i}
{#if $isOning[i]} 
    
    <Textarea content = {item} page = {i+1}/>
 {/if} 
{/each}



<style>
 

    .taskbar{
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
