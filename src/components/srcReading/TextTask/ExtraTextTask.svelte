<script>
    import { moreless,dictionaryDS, isConvertingTess, convertedTextTess, noteTF } from "../store.js"
    import { scale } from 'svelte/transition'
    function Right(){
        document.execCommand("justifyRight",false,null)
    }

    function Left(){
        document.execCommand("justifyLeft",false,null)
    }

    function Center(){
        document.execCommand("justifyCenter",false,null)
    }

    function Full(){
        document.execCommand("justifyFull",false,null)
    }

    function Dictest(){
        $dictionaryDS =!$dictionaryDS
        if ($dictionaryDS == true){
            $isConvertingTess = false;
            $convertedTextTess =''
        }
    }

</script>
<div class = "group3" in:scale={{duration:500}}>
    <button id = "left" on:click ={Left}><span class="material-symbols-outlined">
        format_align_left
        </span>left</button>
    <button id = "center" on:click ={Center}><span class="material-symbols-outlined">
        format_align_center
        </span>center</button>
    <button id = "right" on:click ={Right}><span class="material-symbols-outlined">
        format_align_right
        </span>right</button>
    <button id = "justify" on:click ={Full}><span class="material-symbols-outlined">
        format_align_justify
        </span>justify</button>
 
    </div>

<div class = "container" in:scale={{duration:1000}}>

<button id = 'dic' on:click ={Dictest} class = 'extrabut'><span class="material-symbols-outlined">
    dictionary
    </span>dictionary</button>
<button id = 'return' on:click = {()=>{$moreless = "more"}} class = 'extrabut'><span class="material-symbols-outlined">
    arrow_range
    </span></button>
</div>

<style>

    #return{
        padding-left:2vh;
    }
span{
        padding: 0;
    margin-right: 1vh;
    font-size: 2.5vh;
}

    button:hover{
        cursor: pointer;
        padding-block: 0.3vh;
        background-color: #eeeeee;
        color:#1d1d1d;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }

     .container{
        position: absolute;
        right: 0;
        height: 2vh;
        width: 94%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    
    }

    button{
        background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: #535353;
    transition: 0.1s;
    width: max-content;
        display: flex;
    align-items: center;
  
        border-radius: 0.5vh;
        font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    padding-inline:1vh;
    margin-inline:1vh;
 
    }

  

    .group3{
        position: relative;
    display: flex;
    left: 0;
    z-index: 1;
    }
</style>

