<script>
  import { endInput, listwordSug, startInput, formchosedNum } from "../store";
    function UpdateWord(sen){
       
        let value = document.getElementById(`inputForm${$formchosedNum}`).value 
        value = value.slice(0,$startInput)+sen+value.slice($endInput,value.length-1)
        console.log(value)
        document.getElementById(`inputForm${$formchosedNum}`).value = value
        document.getElementById(`inputForm${$formchosedNum}`).focus()
    }
</script>
<div id = 'wordSuggestBoard'>
    {#each $listwordSug as words}
    <button class = 'wordsug' on:click = {()=>{UpdateWord(words)}}>{words}</button>
    {/each}
</div>

<style>
    #wordSuggestBoard {
        position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
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
    button:active{
        scale:0.95;
        background-color: #535353;
        color:#eeeeee;

    }
    button:hover{
        padding-block: 0.3vh;
        background-color: #eeeeee;
        color:#1d1d1d;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
</style>