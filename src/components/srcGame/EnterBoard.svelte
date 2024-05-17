<script>
  import { onMount } from "svelte";
  import { ContentBig, ExtractContent, TFedit , LeftContent, MiddleContent, RightContent, prevLeft, prevRight} from "./store.js";
 
        onMount(()=>{
            document.getElementById('content').value = $ContentBig
        })
    function Done(){
      
        let plot = document.getElementById('content').value
        if (plot == ''){
            alert("You haven't enter anything!✌️")
    } else {
        $ContentBig = plot
        console.log($ContentBig)
        $ExtractContent = plot.split(" ")
        $TFedit = false

    
        let middle = $ExtractContent[0]
        let keyPlace = parseInt(middle.length/2-1)

        $LeftContent = ""
        $prevLeft = middle.substring(0,keyPlace)
        $MiddleContent = middle.substring(keyPlace,keyPlace+1)
        $RightContent =  '\u200B'+ " " + $ExtractContent[1]+" "+$ExtractContent[2]+" "+$ExtractContent[3]
        $prevRight = middle.substring(keyPlace+1,middle.length)
    }
}
</script>

<div id="containEnterBoard">
   
    <button id = 'done' on:click={()=>{Done()}}><span class="material-symbols-outlined">
        expand_more
        </span></button>
    <textarea id = "content" spellcheck="false"></textarea>
    
</div>
<div id="background"></div>


<style>
    span{
font-size: 3.5vh;
    }
    #containEnterBoard {
        position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 74vh;
    background-color: #eeeeee;
    z-index: 1;
    aspect-ratio: 2;
    display: flex;
    align-items: center;
    border-radius: 5vh;
    flex-direction: column;
    justify-content: center;
    }

 

    #content{
        position: relative;
    height: 79%;
    border-radius: 2vh;
    width: 90%;
    padding: 3vh;
    background-color: #ffffff;
    resize: none;
    font-size: 3vh;
    }

    #done{
          position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 1vh;
    width: 7vh;
    height: 3vh;
    display: flex;
    border: 1px solid #535353;
    background-color: transparent;
    color: #535353;
    border-radius: 1vh;
    align-items: flex-start;
    justify-content: center;
    }

    #done:hover{
        border:0;
        background-color: #535353;
        color:#eeeeee;
    }
    #background{
        top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    }
</style>