<script>
import { stepDic , choseText} from "../store.js";
import { onMount } from 'svelte'
    let zIndex = 0
    let loaded 
    stepDic.subscribe((value)=>{
        if (value == 'ant'){
            zIndex = 1
        } else zIndex = 0
    })
    let antonymsList 

    onMount(()=>{
        loaded = false
        let huptext = $choseText
    var urlant = "https://api.datamuse.com/words?rel_ant="+huptext
  
  fetch(urlant)
  .then(res => res.json())
  .then( result => {
    antonymsList = []
    result.map(createAnt)
    loaded = true
    function createAnt(Ant){
      
      antonymsList.push(Ant.word)
        

      }
    
    })
}
    )
</script>
<div class = 'containerAnt' style = {`z-index:${zIndex};`} >
    {#if loaded==true}
    {#each antonymsList as Ant}
    <div class="AntWord">{Ant}</div>
    {/each}
    {/if}
</div>

<style>
     .containerAnt{
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
.containerAnt::-webkit-scrollbar {
  width: 0;
}
.AntWord:hover{
    background-color: #fefefe;
    color: #1d1d1d;
    scale: 1.1;
}
    .AntWord{
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