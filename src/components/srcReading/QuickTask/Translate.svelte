<script>
  import { choseText, enterText } from "../store";
  import { slide } from 'svelte/transition'
  import ButtonMore from "./ButtonMore.svelte";
  let tf = false
    let content = ""
    openGoogleTranslator.TranslateLanguageData({
        listOfWordsToTranslate: [$choseText],
        fromLanguage: "en",
        toLanguage: "vi",
  })
  .then((data) => {
    console.log($choseText,data)
    content = data[0].translation
    tf = true
  })

  //check dictioary ipa
  let rasChange = false
  let text = $choseText
        var link = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ `${text}`

        fetch(link)
        .then(res=>{
            if (res.ok){
                
                rasChange = true
                $enterText = text
                
           
            } else {
                rasChange = false
            }
        })
    
</script>
  

<div id = "containTrans" >
    {#if !tf}
    <div class = 'trans' transition:slide={{duration:10}}>Translating...🤞</div>
    {:else}
    <div class = 'trans' in:slide={{duration:300}}>{content}
        {#if rasChange}
        <ButtonMore/>
        {/if}</div>
    {/if}
    
</div>

<style>
    .trans{
        color: #1d2956;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 2.5vh;
    align-items: center;
    }

    #containTrans{
        position: relative;
    flex: 1.5;
    height: 100%;
    max-height: 24vh;
    padding: 0;
    border-radius: 1vh;
    margin: 1vh;
    padding-right: 1vh;
    margin-right: 0;
    background-color: transparent;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #ffffff;
}

    #containTrans::-webkit-scrollbar {
    width: 4px;
    border-radius: 16px;
}
#containTrans::-webkit-scrollbar-thumb {
    background-color: #53535340;
    border-radius: 16px;
}
#containTrans::-webkit-scrollbar-thumb:hover {
    background-color: #535353;
    border-radius: 16px;
}
#containTrans::-webkit-scrollbar-track {
    background-color: #eeeeee;
    border-radius: 16px;
}
</style>