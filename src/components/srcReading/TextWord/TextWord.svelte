<script>
    import {onMount} from 'svelte'
    import { scale } from 'svelte/transition'
    import {  choseText, coordinateMouse, onTab, selectedText, selectedTextForQuickTask } from '../store.js'
    let pagenow = 'textword' + ($onTab-1).toString()
    onMount(()=>{
         document.getElementById(pagenow).addEventListener("click",()=>{
        console.log(document.queryCommandValue("fontName"))
          document.getElementById("font").value = document.queryCommandValue("fontName")
          document.getElementById("size").value = document.queryCommandValue("fontSize")
    })
    })
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
    let count =0 
    function countWords(event) {
    let num = event.target.innerText;
   console.log(num)
    count = num.trim().split(/\s+/).length;
  }
</script>

<div contenteditable="true" role="button" tabindex="0" aria-label="Back" on:input={countWords} id ={pagenow} class = "textwrite" on:mouseup={TestSelection} on:mousedown={Delte} spellcheck="false"></div>
<div in:scale={{duration:1000}} id = "countword" >{count}</div>
<style>
    #countword{
        writing-mode: vertical-rl;
    letter-spacing: 0.3vh;
    position: absolute;
    top: 10vh;
    text-orientation: upright;
    width: 3vh;
    height: 13vh;
    background-color: #1d1d1d;
    left: 0;
    border-radius: 0vh;
    color: #ffffff;
    display: flex;
    padding-inline: 1vh;
    font-family: sans-serif;
    font-size: 2vh;
    font-weight: bold;
    padding-right: 0.5vh;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    }
 
    .textwrite{
        background-color: rgb(255, 255, 255);
    /* width: 100vw; */
    padding: 4vh;
    padding-left:6vh;
    /* height: 97%; */
    left: 0;
    top: 0;
    position: absolute;
    bottom: 0;
    overflow: auto;
    color: black;
    right: 0;
    }

    .textwrite:focus{
        outline:none;
    }

    .textwrite::-webkit-scrollbar {
    width: 5px;
}

.textwrite::-webkit-scrollbar-thumb {
    background-color: #535353;
    cursor: pointer;
}

.textwrite::-webkit-scrollbar-track {
    background-color: transparent;
}
</style>