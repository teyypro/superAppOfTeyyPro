<script>
    import ConvertedText from './ConvertedText.svelte'
    import { convertedTextTess, isConvertingTess} from '../store.js'
    import Converting from './Converting.svelte';
    import { slide } from 'svelte/transition'
    function Exit(){
        $isConvertingTess = false;
        $convertedTextTess =''
       
    }

    function Copy(){
        let copytext = document.getElementById('contaiTextConverted')
        copytext.focus()
        document.execCommand('selectAll');
        document.execCommand("copy")
        window.getSelection().removeAllRanges()

        document.getElementById('copycap').innerText = "Copied"
        setTimeout(()=>{
            document.getElementById('copycap').innerText = "Copy"
        },2000)
    }
</script>
<div id = "containAllConverted" transition:slide={{duration:1000}}>
<div id = 'contaiconverted'>
    <div id = 'containCE'>
        <button on:click = {Exit}>exit</button>
        <button on:click = {Copy} id = 'copycap'>copy</button>
    </div>
    {#if $convertedTextTess}
    <ConvertedText/>
    {:else}
    <Converting/>
    {/if}

</div>
</div>



<style>
#contaiconverted{
    position: absolute;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    border-left: 0.1vh solid #999999;
}



#containCE{
    position: absolute;
    top: 0;
    width: 100%;
    height: 5vh;
    background-color: #fefefe;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s;

}
#containCE:hover{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: 0.5s;
    z-index:999;
}
#containAllConverted{
    position: relative;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 0;
    height: 100%;
    width: 28vw;
}

button{
    position: relative;
    height: 3vh;
    background-color: transparent;
    width: max-content;
    padding-inline: 1vh;
    margin-inline: 1vh;
    display: flex;
    border: 0;
    align-items: center;
    border-radius: 0.5vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    color: #1d1d1d;
}

button:hover{
    background-color: #1d1d1d;
    color:#fefefe
}
</style>