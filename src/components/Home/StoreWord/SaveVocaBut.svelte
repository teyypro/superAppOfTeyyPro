<script>
  import { stepDay } from "../store";
  import { slide } from 'svelte/transition'
    let backcolor = 'transparent'
    let color = '#535353'
    export let date,sort
    stepDay.subscribe((value)=>{
        if (value == sort){
            backcolor = '#535353'
            color = '#eeeeee'
        } else {
            backcolor = 'transparent'
            color = '#535353'
        }
    })
    function Update(){
        $stepDay = sort
    }
</script>
<button on:click ={Update} style ={`background-color:${backcolor}; color:${color}`} in:slide={{duration:1000}}>{date}</button>

<style>
    button {
        height: 4vh;
    border-radius: 1vh;
    font-size: 2.5vh;
    font-weight: bold;
    padding-block: 3vh;
    display: flex;
    font-family: monospace;
    
    width: 28vh;
    align-items: center;
    justify-content: center;
    }

    button:hover{
        scale:1.05;
       box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        }
        button:active{
            transition:0.1s;
            scale:0.9;
        }
</style>