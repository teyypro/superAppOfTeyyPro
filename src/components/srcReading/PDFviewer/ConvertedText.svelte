<script>
     import { blur } from 'svelte/transition'
    import { convertedTextTess } from '../store.js';
    import {  choseText, coordinateMouse, onTab, selectedText, selectedTextForQuickTask } from '../store.js'
    let pagenow = 'textword' + ($onTab-1).toString()
    let prevText =''
let text = ''
    function TestSelection(event){
        console.log("bug here")
        prevText = text
        text = document.getSelection().toString()
        
        //SỬ LÝ ĐẦU VÀO Ở ĐÂY
        if ((text!="") && (text!=prevText)){
            console.log(text)
           
            $choseText = text
            coordinateMouse.update(()=>{
                console.log(event.clientX, event.clientY)
                return [event.clientX, event.clientY]
            })
            
            console.log($coordinateMouse[0],$coordinateMouse[1])
            $selectedTextForQuickTask = true
        } else {
            $selectedTextForQuickTask = false
            $selectedText = false
        }
    }
      
    function Delte(){
    $selectedTextForQuickTask = false
  
    }

</script>

<div id="contaiTextConverted" role="button" tabindex="0" aria-label="Back" contenteditable="true" spellcheck="false" on:mouseup={TestSelection}  on:mousedown={Delte} transition:blur={{duration:500}}>{$convertedTextTess}</div>

<style>
    #contaiTextConverted{
        position: absolute;
    top: 5vh;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    padding: 2vh;
    padding-top: 1vh;
    color: #1d1d1d;
    background-color: #fefefe;
    font-family: monospace;
    font-size: 2.5vh;
    }

    #contaiTextConverted:focus{
        outline:none;
    }
</style>