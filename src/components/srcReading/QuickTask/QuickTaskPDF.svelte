<script>
  import { onMount } from "svelte";
  import { choseText, coordinateMouse, selectedText,selectedTextForQuickTaskPDF } from "../store.js";
  import { slide } from 'svelte/transition'
  onMount(()=>{
        let container = document.getElementById('containQuickTask')
        if (($coordinateMouse[0]+container.offsetWidth) < window.innerWidth){
            container.style.left = $coordinateMouse[0] +'px'
        } else {
            container.style.left = $coordinateMouse[0]-container.offsetWidth +'px'
        }
        if (($coordinateMouse[1]+container.offsetHeight) < window.innerHeight){
            container.style.top = $coordinateMouse[1] +'px'
        } else {
            container.style.top = $coordinateMouse[1]-container.offsetHeight +'px'
        }

    
    })
    function RUN(){
        
        $selectedTextForQuickTaskPDF = false
      
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
        $selectedTextForQuickTaskPDF = false
    }

</script>

<div id = 'containQuickTask' transition:slide={{duration:300}}>
    <button id = 'translate' class = 'buttask' on:click={RUN}>Find</button>
    <button id = 'saveown' class = 'buttask' on:click = {savingown}>Own-Saving</button>

</div>


<style>
    #containQuickTask{
        width: max-content;
    height: 4vh;
    background-color: #1d1d1d;
    position: fixed;
    z-index: 2;
    border-radius: 1vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding-inline: 0.5vh;
    }

    .buttask{
        position: relative;
    width: max-content;
    border: 0;
    border-radius: 0.8vh;
    height: 3vh;
    color: white;
    background-color: transparent;
 
    }

    .buttask:hover{
        background-color:#fefefe;
        color:#1d1d1d;
    }

</style>