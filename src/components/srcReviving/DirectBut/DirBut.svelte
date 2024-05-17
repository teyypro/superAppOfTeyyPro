<script>
  import { resWord, resPart, resMean, choice, AnsList, LisEnter,CusList, reswholekey } from "../store";
    function Back(){
        $choice = 'enter'
       
    }
    function Next(){
        let uiWord = Array.from(document.getElementsByClassName('words'))
        let uiPart = Array.from(document.getElementsByClassName('parts'))
        let uiMean = Array.from(document.getElementsByClassName('means'))

        uiWord.forEach((element,i) => {
            uiWord[i] = element.value
        })
        uiPart.forEach((element,i) => {
            uiPart[i] = element.value
        })
        uiMean.forEach((element,i) => {
            uiMean[i] = element.value
        })

        $resWord = uiWord
        $resPart = uiPart
        $resMean = uiMean
        
        console.log($resMean,$resPart,$resWord)
        $choice = 'choices'
        // reset Answer cuar customer 
        CusList.update(()=>{ return new Array($LisEnter.length).fill("")})
    
        //reset answer of chuong trinh de push khi add
        $AnsList = new Array($LisEnter.length)
        $reswholekey = []
    }

</script>
{#if $choice == 'enter'}
<button class = 'next'  on:click = {Next}>next<span class="material-symbols-outlined">
    navigate_next
    </span></button>
{:else if $choice = 'choices'}
<button class = 'next'  on:click = {Back}>home</button>
{/if}

<style>
    span{
        
    }
    .next{
        position: absolute;
    height: 3vh;
    background-color: rgb(0, 0, 0);
    width: max-content;
    padding-inline: 2vh;
    margin-inline: 1vh;
    display: flex;
    border: 0;
    align-items: center;
    border-radius: 0.5vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    color: white;
    right: 0;
    }

  
</style>