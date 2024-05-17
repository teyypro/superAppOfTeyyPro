<script>
  import { onMount } from "svelte";
  import { QuickTrans, choseText, coordinateMouse, selectedText, selectedTextForQuickTaskPDF } from "../store.js";
  import { slide } from 'svelte/transition'
  import Translate from "./TranslatePDF.svelte";
  onMount(()=>{
        $QuickTrans = false
        let container = document.getElementById('containQuickTask')
        if (($coordinateMouse[0] + container.offsetWidth + 10) < window.innerWidth) {
        container.style.left = ($coordinateMouse[0] + 10) + 'px';
        } else {
            container.style.left = ($coordinateMouse[0] - container.offsetWidth) + 'px';
        }
        if (($coordinateMouse[1] + 0.26 * window.innerHeight + 10) < window.innerHeight) {
                container.style.top = ($coordinateMouse[1] + 10 + 0.05*window.innerHeight) + 'px';
        } else {
            container.style.top = ($coordinateMouse[1] - 0.26 * window.innerHeight + 0.05*window.innerHeight +10) + 'px';
        }


        

    
    })


 
</script>

<div id = 'containQuickTask' in:slide={{duration:300}}>
    {#if $QuickTrans}
        <Translate/>
    {:else}
        <button id = "notTranslate" on:click = {()=>{$QuickTrans=!$QuickTrans}}><span class="material-symbols-outlined">
            deployed_code
            </span>pre_Translate</button>
    {/if}

    
</div>
  
<style>
  
    #notTranslate{
        position: relative;
    flex: 1.5;
    min-height: 13vh;
    padding: 0;
    font-size: 2vh;
    border-radius: 1vh;
    color: #535353;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #ffffff;
    }
    #notTranslate:hover{
        border:1px solid #eeeeee;
    color: #1d1d1d;
   
    }

    
    span{
        color: #535353;
    font-size: 3vh;
    }

    span:hover{
        color: #1d1d1d;
        
    }
    #containQuickTask{
        position: absolute;
    display: flex;
    border-radius: 2vh;
    padding: 1vh;
    width: 48vh;
    max-height: 26vh;
    height: max-content;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    background-color: #ffffff;
    }


   
</style>