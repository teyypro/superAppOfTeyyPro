<script>
    import { stepDS , enterText } from "../store.js";
    import { onMount  } from "svelte"; 
    let zIndex = 0
    let A 
    let loaded =false //chờ loadd thay đổi thì update
        stepDS.subscribe((value)=>{
            if (value == 'coN'){
                zIndex = 1
            } else zIndex = 0
        })
        let coNList
        onMount(()=>{
            loaded = false
            let huptext = $enterText
            var urlcoN = "https://api.datamuse.com/words?rel_jja="+huptext
      
      fetch(urlcoN)
      .then(res => res.json())
      .then( result => {
        coNList = []
        result.map(createcoN)
         //translate
            openGoogleTranslator.TranslateLanguageData({
                listOfWordsToTranslate: [coNList],
                fromLanguage: "en",
                toLanguage: "vi",
            })
            .then((data) => {
                console.log(coNList,data)
                A = data[0].translation.split(",")
                console.log(A,":::::::::::::::::::")
            })
            .finally(()=>{
                loaded =true
                console.log("true")
            })
        function createcoN(coN)
        {coNList.push($enterText+" "+coN.word)}
        
        })
    }
        )
    </script>
    <div class = 'containercoN' style = {`z-index:${zIndex};`} >
        {#if loaded}
        {#each coNList as coN,i}
        <div class="coNWord">{coN}
        <div class = "meanWord">{A[i]}</div>
        </div>
        {/each}
        {/if}
    </div>
    
    
    
    <style>
         .meanWord{
            color: #1d2a57;
    line-height: 3vh;
    font-size: 2vh;
        }
            .containercoN{
                position: absolute;
    width: 100%;
    height: 93%;
    background-color: #ffffff;
    top: 7vh;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow: auto;
        }
    .containercoN::-webkit-scrollbar {
  width: 0;
}
        .coNWord{
           position: relative;
    width: max-content;
    height: fit-content;
    padding-inline: 2vh;
    background-color: transparent;
    color: #1d2956;
    margin: 1.5vh;
    border-radius: 2vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 0.5vh;
    line-height: 5vh;
    font-size: 3vh;
    font-weight: bold;
    font-family: monospace;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    flex-direction: column;
        }

        .coNWord:hover{
            transition:0.2s;
            border: 0;
    color: #1d2956; 
    border-radius: 1.5vh;
    background-color: #1d295617;
 }
    </style>