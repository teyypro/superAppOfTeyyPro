<script>
    import PdFtask from "../PDFviewer/PDFtask.svelte";
import {  imageList, imageTF } from "../store.js";

    function Change(){
        $imageTF = true
        $imageList = []
    }
</script>

<div class = 'container'>

<button id = 'uploadBoard' on:click={Change}><span class="material-symbols-outlined">
    add_photo_alternate
    </span>add images</button>
</div>
<PdFtask/> 
<style>

span{
        padding: 0;
    margin-right: 1vh;
    font-size: 3.5vh;
}
.container{
    position: absolute;
    height: 2vh;
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    }


    button{
        background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: #eeeeee;
    transition: 0.1s;
    height: max-content;
    display: flex;
    align-items: center;
    width: max-content;
    padding-inline: 1vh;
    margin-inline: 0.5vw;
    border-radius: 0.5vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    z-index:1;
    }

    button:hover{
        padding-block: 0.3vh;
        background-color: #eeeeee;
        color:#1d1d1d;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
</style>