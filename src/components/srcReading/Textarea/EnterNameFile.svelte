<script>
    import { onTab, step, tab, typesFile, preventReloadFile, taskbar } from "../store.js";
    let dataName =""
    import { slide, scale } from 'svelte/transition'
    function updateNameFile(){
       
        $tab[$onTab-1] = dataName
        $taskbar = $typesFile[$onTab-1]
      
        if ($typesFile[$onTab-1] == "text"){
             $step[$onTab-1] = "RunText" //hidden the input name
            
        } else if ($typesFile[$onTab-1] == "pdf"){
            $step[$onTab-1] = "RunPDF"// RUN PDF VIEWER
            
        } else if ($typesFile[$onTab-1] == "image"){
            $step[$onTab-1] = "RunImage"// RUN PDF VIEWER
            
        }
        }
        function handleKeyPress(event) {
    if (event.key === 'Enter') {
      updateNameFile()//enter
    }
  }
</script>

<div id = 'container' in:slide={{duration:1000}}>
    <h1 in:scale={{duration:500}}>Tab's name</h1>
    <input placeholder="Enter the name's tab here ✌️" bind:value={dataName} spellcheck="false" on:keypress={handleKeyPress}>
    <div in:scale={{duration:500}} id = 'congesture'>
     <button on:click = {()=>{$step[$onTab-1] = "selectfile"}} id = 'cancel'>Back</button>
     <button on:click = {()=>{updateNameFile()}} id ='next'>Create</button>
    </div>
</div>

<style>
    h1{
        position: relative;
    width: 45vw;
    font-size: 3vw;
    margin-top: 2vw;
    margin-bottom: 1vw;
    font-family: sans-serif;
    }
    #congesture{
        position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin: 2vw;
    width: 46vw;
    }
    #container{
           position: absolute;
    top: 50%;
    left: 50%;
    aspect-ratio: 3;
    width: 50vw;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 2vw;
    flex-wrap: nowrap;
    justify-content: space-between;
    }

    input{
        position: relative;
    width: 44vw;
    height: 5vh;
    border: 0;
    padding-inline: 1vh;
    font-family: monospace;
    font-size: 2vh;
    font-weight: bolder;
    border-bottom: solid 1px #535353;
}

    input:focus{
        outline: none;
    transition: 0.5s;
    border-radius: 0.5vw;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    #cancel{
        position: relative;
    right: 0;
    background-color: transparent;
    border-radius: 0.8vw;
    color: #535353;
    height: 2.5vw;
    font-size: 1.5vw;
    font-family: monospace;
    aspect-ratio: 3;
    margin-right: 2vw;
    border: solid 1px #535353;
    }

    #next{
        position: relative;
    right: 0;
    background-color: #535353;
    border-radius: 0.8vw;
    border: 0;
    color: #eeeeee;
    height: 2.5vw;
    font-size: 1.5vw;
    font-family: monospace;
    aspect-ratio: 3;
    }

    #next:hover{
        background-color: #1d1d1d;
        color:#fefefe;
        transition:0.2s;
        scale:0.95;
    }

    #cancel:hover{
        background-color: #1d1d1d;
        color:#fefefe;
        transition:0.2s;
        scale:0.95;
    }
</style>