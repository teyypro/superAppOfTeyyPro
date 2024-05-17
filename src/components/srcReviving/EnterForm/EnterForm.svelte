<script>
  import { onMount } from "svelte";
  import { choice, endInput, formchosedNum, listwordSug, resMean, resWord, startInput, suggestTF, suggestUpdate } from "../store";
  import { wordlist } from '../wordslist'
  import { scale} from 'svelte/transition'
     export let sort
   let theme 
   let fontTheme
     function getColorByDivision(n) {
        console.log(n) 
        switch(n % 4) {
        case 1:
            theme = "#d2e3fc";
            fontTheme = "#174ae6" // Cam
            break;
        case 2:
            theme = "#fad2cf";
            fontTheme = "#a50e0e" // Vàng
            break;
        case 3:
            theme = "#feefc3";
            fontTheme = "#e37400" // Xanh
            break;
        case 0:
            theme = "#ceead6";
            fontTheme = "#0d652d" // Đỏ
            break;
    }
    
} 

     onMount(()=>{
       getColorByDivision(sort+1)




    document.getElementsByClassName("words")[sort].value = $resWord[sort]
  
    document.getElementsByClassName("means")[sort].value = $resMean[sort]
    })
   
    function TestInput(event){
        event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    let input = event.target;
    let cursorPosition = input.selectionStart;
    let text = input.value;
    let startIndex = cursorPosition;
    let endIndex = cursorPosition;

    // Find the start of the word
    while (startIndex > 0 && text[startIndex - 1] !== ' ') {
      startIndex--;
    }

    // Find the end of the word
    while (endIndex < text.length && text[endIndex] !== ' ') {
      endIndex++;
    }
    $startInput = startIndex
    $endInput = endIndex
    let fiword = text.substring(startIndex, endIndex);
    if (fiword[0]!=" "){
   let finalList = wordlist.filter(word => word.startsWith(fiword)).slice(0, 5)
   $listwordSug = finalList
   $suggestTF = true
   $suggestUpdate=!$suggestUpdate
   console.log(finalList)
}
/*


let matches = findBestMatch(word, wordlist);
console.log(matches)
let topMatches = matches.ratings
  .sort((a, b) => b.rating - a.rating) // Sort the matches by rating in descending order
  .slice(0, 10) // Take the top 10 matches

let similarWords = topMatches.map(match => match.target);

console.log(similarWords);
  */
    }
   
    function ClickChose(){
        $suggestTF = true
        $formchosedNum = sort
        $listwordSug = []
    }

    function Blur(){
        setTimeout(()=>{$suggestTF = false},100)
    }

    function Rist(event){
        event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    }
</script>

<div class = 'containTitleName' transition:scale={{duration:500}} >
    <span class="material-symbols-outlined" style = 'color:{fontTheme};'>
        keyboard_arrow_right
        </span>
<textarea style = "color:{fontTheme};" rows="1" type = 'text' class = 'words' on:input={()=>{TestInput(event)}} on:click ={ClickChose} id = {`inputForm${sort}`} on:blur ={Blur} spellcheck="false" lang="en" autocomplete="off"></textarea>
<textarea style="background-color: {theme}; color: {fontTheme};" rows="1" type = 'text' class = 'means' on:input={()=>{Rist(event)}} spellcheck="false" lang="en" autocomplete="off"></textarea>
</div>
<style>
    span{
        font-size: 4vh;
    padding: 0;
    padding-top: 2vh;
    margin: 0;
    color: #ffffff;
    }
    .words{
        background-color: transparent;
    min-height: 7vh;
    border-radius: 2vh;
    color: #eeeeee;
    width: 39vh;
    font-family: monospace;
    font-size: 4vh;
    margin: 2vh;
    margin-bottom: 0;
    transition: 0.5s ease-in-out;
    align-content: center;
    resize: none;
    }

   

    .means{
      
    min-height: 9vh;
    border-radius: 4vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
    color: #ffffff;
    width: 42vh;
    font-family: monospace;
    font-size: 3vh;
    padding-block: 1vh;
    padding-inline: 3vh;
    align-content: center;
    transition: 0.5s ease-in-out;
    resize: none;
    }

    .containTitleName{
        position: relative;
    height: fit-content;
    display: flex;
    border-radius: 5vh;
    width: 50vh;
    margin-bottom: 3vh;
    margin-inline:1.5vh;
    background-color: #ffffff;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    min-height: 23.5vh;
    flex-wrap: wrap;
    align-content: space-between;
 
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

    }

    .containTitleName:hover{
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
</style>