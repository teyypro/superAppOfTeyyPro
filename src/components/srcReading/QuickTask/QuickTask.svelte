<script>
  import { onMount } from "svelte";
  import { QuickTrans, choseText, coordinateMouse, selectedText, selectedTextForQuickTask } from "../store.js";
  import { slide } from 'svelte/transition'
  import Translate from "./Translate.svelte";
  onMount(()=>{
        $QuickTrans = false
        let container = document.getElementById('containQuickTask')
        if (($coordinateMouse[0] + container.offsetWidth + 10) < window.innerWidth) {
        container.style.left = ($coordinateMouse[0] + 10) + 'px';
        } else {
            container.style.left = ($coordinateMouse[0] - container.offsetWidth - 50) + 'px';
        }
        if (($coordinateMouse[1] + 0.26 * window.innerHeight + 10) < window.innerHeight) {
                container.style.top = ($coordinateMouse[1] + 10) + 'px';
        } else {
            container.style.top = ($coordinateMouse[1] - 0.26 * window.innerHeight - 50) + 'px';
        }


        

    
    })
    function RUN(){
        
        $selectedTextForQuickTask = false
      
        var link = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ $choseText

        fetch(link)
        .then(res=>{
            if (res.ok){
                $selectedText = 'available'
               
            } else {
                $selectedText = 'notfound'
            }
        })
    }

    function savingown(){
        $selectedText = 'owning'
        $selectedTextForQuickTask = false
    }

    function HighLight(color,back){
      
        document.execCommand('backColor', false, back);
        document.execCommand('foreColor', false, color);
        
        window.getSelection().removeAllRanges()
   
    }
</script>

<div id = 'containQuickTask' in:slide={{duration:300}}>
    {#if $QuickTrans}
        <Translate/>
    {:else}
        <button id = "notTranslate" on:click = {()=>{$QuickTrans=!$QuickTrans}}><span class="material-symbols-outlined">
            deployed_code
            </span>pre_Translate</button>
    {/if}

    <div id="contai">
    <div id="tool">
    <button  id = 'buttask' on:click = {savingown}><span class="material-symbols-outlined">
        new_label
        </span></button>
        <button id = 'Nocolor' on:click= {()=>{HighLight('black','transparent')}}><span class="material-symbols-outlined">
            ink_eraser_off
            </span></button>
    </div>
    <div id ='containQuickHighlight' in:slide={{duration:600}}>
        <!-- NEON -->
<div class="color">
    <button class='quickHighlight' on:click={() => {HighLight('#174EA6','#D2E3FC')}} style="background-color: #D2E3FC;"></button>
    <button class='quickHighlight' on:click={() => {HighLight('#A50E0E','#FAD2CF')}} style="background-color: #FAD2CF;"></button>
    <button class='quickHighlight' on:click={() => {HighLight('#E37400','#FEEFC3')}} style="background-color: #FEEFC3;"></button>
    <button class='quickHighlight' on:click={() => {HighLight('#0D652D','#CEEAD6')}} style="background-color: #CEEAD6;"></button>
    <button class='quickHighlight' on:click={() => {HighLight('#202124','#F1F3F4')}} style="background-color: #F1F3F4;"></button>
</div>    
</div>
</div>
</div>
  
<style>
    #contai{
        display: flex;
    margin-top: 1vh;
    flex: 1;
    min-height: 12vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-inline: 2vh;
    }
    #tool{
        position: relative;
    width: 10vh;
    padding-inline: 0.5vh;
    background: transparent;
    border: 1px solid #eeeeee;
    border-radius: 1vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    }
    #tool:hover{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .color{
        position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    }
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
    padding-right: 0;
    width: 51vh;
    max-height: 26vh;
    height: max-content;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    background-color: #ffffff;
    }

    #buttask{
        position: relative;
    width: 4vh;
    aspect-ratio: 1;
    border: 0;
    display: flex;
    border-radius: 0.8vh;
    color: #535353;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    }

    #buttask:active{
        
        color:#535353;
    }

    #containQuickHighlight{
        position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    }

    .quickHighlight{
        height: 3.5vh;
    aspect-ratio: 1;
    border-radius: 0;
    margin: 0;
    border: 1px solid #ffffff;
    transition: 0.1s ease-in-out;
    
    }

    .quickHighlight:hover{
        transition: 0.1s;
    scale: 1.05;
    cursor: pointer;
    filter: saturate(10);
    border: 0;
        
    }
    .quickHighlight:active{
        scale: 0.95;
        filter: saturate(5);
    }
    #Nocolor{
        position: relative;
    background-color: transparent;
    display: flex;
    aspect-ratio: 1;
    height: 4vh;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    }
</style>