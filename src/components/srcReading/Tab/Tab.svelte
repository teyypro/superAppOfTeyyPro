<script>
    import { onMount } from "svelte";
    import { onTab, typesFile, taskbar, tab, isOning} from "../store.js";

    export let numtab = 0   //này là draft
    let containerTab 
    export let pagenum = 0 // này là trang thứ
    let backcolor = 'transparent'
    function change(){
        $onTab = pagenum; 
        console.log(pagenum)
        $taskbar = $typesFile[pagenum-1]
       
    }

    function Closing(){
        $isOning[pagenum-1] = false
        $taskbar = $typesFile[pagenum-2]

    }
    let backgroundlor = 'transparent'
    let fontcolorback  = '#ffffff'
    onMount(()=>{
        containerTab = "containerTab" + (pagenum).toString()
        if (pagenum==$onTab){
            backcolor = '1px solid #535353'
            console.log(backcolor)
        } else {
            backcolor = '0'
        }
        if ($typesFile[pagenum-1] == 'pdf'){
            backgroundlor = '#fad2cf'
            fontcolorback = '#a50e0e'
        } else 
        if ($typesFile[pagenum-1] == 'text'){
            backgroundlor = '#d2e3fc'
            fontcolorback = '#174ea6'
        } else 
        if ($typesFile[pagenum-1] == 'image'){
            backgroundlor = '#ceead6'
            fontcolorback = '#0d652d'
        }
  
    })
  
</script>

<div class = 'container' id = {containerTab} style ={`border:${backcolor}; background-color:${backgroundlor}`}>
<button id = 'tab' on:click={change} style ={`font-color:${fontcolorback}`}>{numtab}</button>
<button id = 'close' on:click = {Closing}>X</button>
</div>

<style>

    #close{
        position: absolute;
    height: max-content;
    width: max-content;
    background-color: transparent;
    right: 0.5vh;
    color: #eeeeee;
    display: flex;
    border: 0;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5vh;
    padding: 0.3vh;
    text-align: center;
    }

    #close:hover{
        background-color: black;
        color:white;
    border-radius: 0.5vh;
    }
    .container{
        position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2vh;
    background-color: transparent;
    border-radius: 1vh;
    transition:0.5s;
    

}
.container::-webkit-scrollbar {
  width: 0;
}

    #tab{
        background-color: transparent;
    width: 100%;
    height: 5vh;
 
    border: 0;
    font-family: monospace;
    font-size: 2vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 1vh;
    font-weight: bold;
    cursor:pointer;
    }

 
</style>