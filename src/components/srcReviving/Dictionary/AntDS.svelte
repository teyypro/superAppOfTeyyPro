<script>
    import { stepDS , enterText} from "../store.js";
    import { onMount } from 'svelte'
        let zIndex = 0
        let loaded 
        stepDS.subscribe((value)=>{
            if (value == 'ant'){
                zIndex = 1
            } else zIndex = 0
        })
        let antonymsList 
    
        onMount(()=>{
            loaded = false
            let huptext = $enterText        
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
    background-color: #ffffff;
    top: 6vh;
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
        .AntWord{
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

        .AntWord:hover{
            border: 0;
    color: #1d2956; 
    border-radius: 1.5vh;
    background-color: #1d295617;
     
        }
    </style>