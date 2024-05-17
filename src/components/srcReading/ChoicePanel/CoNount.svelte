<script>
    import { stepDic ,choseText } from "../store.js";
    import { onMount  } from "svelte"; 
    let zIndex = 0
    let loaded //chờ loadd thay đổi thì update
        stepDic.subscribe((value)=>{
            if (value == 'coN'){
                zIndex = 1
            } else zIndex = 0
        })
        let coNList
        onMount(()=>{
            loaded = false
            let huptext = $choseText
        var urlcoN = "https://api.datamuse.com/words?rel_jja="+huptext
      
      fetch(urlcoN)
      .then(res => res.json())
      .then( result => {
        coNList = []
        result.map(createcoN)
        
        loaded =true
        function createcoN(coN){
        
          coNList.push(coN.word)
            
    
          }
        
        })
    }
        )
    </script>
    <div class = 'containercoN' style = {`z-index:${zIndex};`} >
        {#if loaded==true}
        {#each coNList as coN}
        <div class="coNWord">{$choseText+" "+coN}</div>
        {/each}
        {/if}
    </div>
    
    
    
    <style>
        .containercoN{
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
.containercoN::-webkit-scrollbar {
  width: 0;
}
.coNWord:hover{
    background-color: #fefefe;
    color: #1d1d1d;
    scale: 1.1;
}
    .coNWord{
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