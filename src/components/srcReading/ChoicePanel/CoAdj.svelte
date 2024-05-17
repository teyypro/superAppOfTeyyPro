<script>
    import { stepDic ,choseText } from "../store.js";
    import { onMount  } from "svelte"; 
    let zIndex = 0
    let loaded //chờ loadd thay đổi thì update
        stepDic.subscribe((value)=>{
            if (value == 'coA'){
                zIndex = 1
            } else zIndex = 0
        })
        let coAList
        onMount(()=>{
            loaded = false
            let huptext = $choseText
        var urlcoA = "https://api.datamuse.com/words?rel_jjb="+huptext
      
      fetch(urlcoA)
      .then(res => res.json())
      .then( result => {
        coAList = []
        result.map(createcoA)
        
        loaded =true
        function createcoA(coA){
        
          coAList.push(coA.word)
            
    
          }
        
        })
    }
        )
    </script>
    <div class = 'containercoA' style = {`z-index:${zIndex};`} >
        {#if loaded==true}
        {#each coAList as coA}
        <div class="coAWord">{coA+" "+$choseText}</div>
        {/each}
        {/if}
    </div>
    
    
    
    <style>
        .containercoA{
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
.containercoA::-webkit-scrollbar {
  width: 0;
}
.coAWord:hover{
    background-color: #fefefe;
    color: #1d1d1d;
    scale: 1.1;
}
    .coAWord{
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