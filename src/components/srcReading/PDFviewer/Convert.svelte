<div id ='container2choice' transition:slide={{duration:300}}>

<button on:click ={Vn}>VN-convert</button>
<button on:click ={Tess}>ENG-convert</button>
<button on:click = {Des}>exit</button>
</div>

<script>
    import { onMount } from "svelte";
    import { slide } from 'svelte/transition'
    export let top
    export let right
    function Des(){
    $captureTF = false;
    $captureLink = '';
   }
    onMount(()=>{

        let contain = document.getElementById("container2choice")
        contain.style.top = top.toString() + 'px'
        contain.style.right = right.toString() +'px'
    })

    //tesseract js
    import { createWorker } from 'tesseract.js';
    import { convertedTextTess, isConvertingTess, nowlinkTess,captureTF, captureLink } from "../store.js";
async function Tess(){
    $isConvertingTess = true
    $captureTF = false
    console.log("tesseringcting")
    const worker = await createWorker('eng');
    const ret = await worker.recognize($nowlinkTess);
    $convertedTextTess = ret.data.text;
    await worker.terminate();
}

async function Vn(){
    $isConvertingTess = true
    $captureTF = false
    console.log("tesseringcting")
    const worker = await createWorker('vie');
    const ret = await worker.recognize($nowlinkTess);
    $convertedTextTess = ret.data.text;
    await worker.terminate();
}
//.......................tesseract


</script>

<style>
    
    #container2choice{
        position: absolute;
    z-index: 9999;
    display: flex;
    width: max-content;
    background-color: #1d1d1d;
    border-radius: 1vh;
    padding: 0.5vh;
    }

    button{
        position: relative;
    height: max-content;
    background-color: transparent;
    width: max-content;
    display: flex;
    border: 0;
    align-items: center;
    border-radius: 0.5vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    color: #fefefe;
    padding-inline: 2vh;

    }

    button:hover{
        background-color: #fefefe;
        color:#1d1d1d;
    }

</style>