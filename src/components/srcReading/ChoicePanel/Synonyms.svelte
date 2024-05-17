<script>
import { stepDic ,choseText } from "../store.js";
import { onMount  } from "svelte"; 
let zIndex = 0
let loaded //chờ loadd thay đổi thì update
    stepDic.subscribe((value)=>{
        if (value == 'syn'){
            zIndex = 1
        } else zIndex = 0
    })
    let synonymsList
    onMount(()=>{
        loaded = false
        let huptext = $choseText
    var urlsyn = "https://api.datamuse.com/words?rel_syn="+huptext
  
  fetch(urlsyn)
  .then(res => res.json())
  .then( result => {
    synonymsList = []
    result.map(createSyn)
    
    loaded =true
    function createSyn(Syn){
    
      synonymsList.push(Syn.word)
        

      }
    
    })
}
    )
</script>
<div class = 'containerSyn' style = {`z-index:${zIndex};`} >
    {#if loaded==true}
    {#each synonymsList as Syn}
    <div class="SynWord">{Syn}</div>
    {/each}
    {/if}
</div>



<style>
    .containerSyn{
     position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #1c1c1c;
    top: 4vh;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow: auto;
    flex-direction: row;
    align-content: flex-start;
}
.containerSyn::-webkit-scrollbar {
  width: 0;
}
.SynWord:hover{
    background-color: #fefefe;
    color: #1d1d1d;
    scale: 1.1;
}
    .SynWord{
        position: relative;
    width: max-content;
    height: 3vh;
    padding-inline: 3vh;
    background-color: #eeeeee;
    color: #535353;
    margin: 1vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    line-height: 5vh;
    border-radius: 1vh;
    font-size: 2vh;
    font-weight: bold;
    font-family: monospace;
    }
</style>