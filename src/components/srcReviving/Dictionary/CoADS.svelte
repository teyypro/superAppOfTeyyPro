<script>
    import { stepDS , enterText } from "../store.js";
    import { onMount  } from "svelte"; 
    let zIndex = 0
    let A 
    let loaded =false //chờ loadd thay đổi thì update
        stepDS.subscribe((value)=>{
            if (value == 'coA'){
                zIndex = 1
            } else zIndex = 0
        })
        let coAList
        onMount(()=>{
            loaded = false
            let huptext = $enterText
        var urlcoA = "https://api.datamuse.com/words?rel_jjb="+huptext
      
      fetch(urlcoA)
      .then(res => res.json())
      .then( result => {
        coAList = []
        result.map(createcoA)
         //translate
            openGoogleTranslator.TranslateLanguageData({
                listOfWordsToTranslate: [coAList],
                fromLanguage: "en",
                toLanguage: "vi",
            })
            .then((data) => {
                console.log(coAList,data)
                A = data[0].translation.split(",")
                console.log(A,":::::::::::::::::::")
            })
            .finally(()=>{
                loaded =true
                console.log("true")
            })
        function createcoA(coA)
        {coAList.push(coA.word+" "+$enterText)}
        
        })
    }
        )
       
    </script>
    <div class = 'containercoA' style = {`z-index:${zIndex};`} >
        {#if loaded}
        {#each coAList as coA,i}
        <div class="coAWord">{coA}
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
          .containercoA{
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
    .containercoA::-webkit-scrollbar {
  width: 0;
}
        .coAWord{
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

        .coAWord:hover{
            transition:0.2s;
            border: 0;
    color: #1d2956; 
    border-radius: 1.5vh;
    background-color: #1d295617;
     
        }
    </style>