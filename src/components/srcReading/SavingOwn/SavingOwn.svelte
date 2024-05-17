<script>
  import { onMount } from "svelte";
  import { choseText, enterText, selectedText } from "../store";
    onMount(()=>{
        document.getElementById('enterText').value = $choseText
    })
    function Exit(){
        $selectedText = false
    }

    function Done(){
        $selectedText = false
        let vocData = JSON.parse(localStorage.getItem('vocabulary'));
      let date = `${new Date().getUTCDate()} - ${new Date().getUTCMonth()+1} - ${new Date().getUTCFullYear()}`
      if (vocData.length === 0 || vocData[0].day !== date) {
  let newDay = {};
  newDay["day"] = date;
  newDay["content"] = [];
  vocData.unshift(newDay);
}

       let con = {}
      con["word"] = document.getElementById('enterText').value
      con["definition"] = document.getElementById('meanenter').value
      vocData[0].content.push(con)

    localStorage.setItem('vocabulary', JSON.stringify(vocData));

    }
</script>

<div id ='containSavingOwn'>
    <div class = 'containOwn'>
       
        <input  id = 'enterText' type = 'text' placeholder ="Enter words/clauses">
    </div>
    <div class = 'containOwn'>
      
        <input  id = 'meanenter' type = 'text' placeholder="Extract sentences/meanings">
    </div>
    <button id = 'exit' class = 'minibut' on:click = {Exit}>cancel</button>
<button id = 'done' class = 'minibut' on:click = {Done}>done</button>
</div>


<style>

#done{
    right: 0;
  }
  #exit{
    left:0;
  }
       .minibut{
        position: absolute;
    margin: 1vh;
    top: 0;
    font-family: monospace;
    border: 0;
    border-radius: 1vh;
    width: 8vh;
    font-size: 2vh;
    font-weight: bold;
    height: 3vh;
    background-color: transparent;
    color: #fefefe;
       }

       .minibut:hover{
        color:#1d1d1d;
        background-color:#fefefe
       }
    input{
        border-radius: 1vh;
    background-color: #eeeeee;
    position: relative;
    height: 100%;
    border: 0;
    text-align: start;
    color: #1d1d1d;
    display: flex;
    vertical-align: top;
    padding: 1vh;
    margin: 0.5vh;
    font-weight: bold;
    font-size: 2vh;
    font-family: monospace;
    transition: 0.5s;
    }
    input:hover{
        background-color: #fefefe;
        transition: 0.5s;
    }
 
    .containOwn{
        position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    }
    #containSavingOwn{
        position: fixed;
    top: 6vh;
    width: 56vw;
    height: 13vh;
    background-color: #1d1d1d;
    z-index: 99;
    left: 50%;
    transform: translate(-50%);
    border-radius: 2vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0.5vh;
    padding-top: 4.5vh;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
</style>