<script>
    import { stepDS , enterText } from "../store.js";
    import { onMount  } from "svelte"; 
    let zIndex = 0
    let loaded //chờ loadd thay đổi thì update
        stepDS.subscribe((value)=>{
            if (value == 'syn'){
                zIndex = 1
            } else zIndex = 0
        })
        let synonymsList
        onMount(()=>{
            loaded = false
            let huptext = $enterText
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
    background-color: #ffffff;
    top: 6vh;
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
        .SynWord{
            position: relative;
    width: max-content;
    height: 5vh;
    padding-inline: 2vh;
    background-color: transparent;
    color: #1d2956;
    margin: 1.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.5vh solid #eeeeee;
    line-height: 5vh;
    border-radius: 0;
    font-size: 3vh;
    font-weight: bold;
    font-family: monospace;
    cursor: pointer;
        }

        .SynWord:hover{
            border: 0;
    color: #1d2956; 
    border-radius: 1.5vh;
    background-color: #1d295617;
        }
    </style>