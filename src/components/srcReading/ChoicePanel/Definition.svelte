<script>
  import { onMount } from "svelte";
  import { blur } from 'svelte/transition'
    import { choseText, stepDic } from "../store.js";
 
    let zIndex = 0
    stepDic.subscribe((value)=>{
        if (value == 'defi'){
            zIndex = 1
        } else zIndex = 0
    })

    let fetchValue = {
            "word":"",
            "pronon":"",
            "board":[
              
            ]
          }
    //API DÈINITION
    onMount(()=>{
        let huptext = $choseText
        var link = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ `${huptext}`
        
          let contaiFile
          
    fetch(link)
      .then( res => res.json())
      .then(result => {

        result.map(run1)
        function run1(resultNew){
          fetchValue.word = resultNew.word
          fetchValue.pronon = resultNew.phonetic
          resultNew.meanings.map(run2)
          //phonetic vs word here
          console.log(fetchValue)
        }
        function run2(meaningsNew){
          contaiFile = {
              "type":"",
              "deex":[
                
              ]
            }
          contaiFile.type = meaningsNew.partOfSpeech
          meaningsNew.definitions.map(run3)
          console.log(contaiFile,"finishedrun2")
          fetchValue.board.push(contaiFile)
        }
        function run3(definitionsNew){
         
          console.log(definitionsNew.definition+"run3")
          let deSam = {
                  "defi":"",
                  "exam": ""
                }
          deSam.defi = definitionsNew.definition
          if (definitionsNew.example!=undefined){
            deSam.exam = "Ex: "+definitionsNew.example
          } else {
            deSam.exam = ''
          }
          
          contaiFile.deex.push(deSam)
         
          
          
        }
      
      })
      .catch( error => {
        document.write(error)
      })

      .finally(()=>{
    })
  }
    )
    function Saving(definition,words){
    
    let vocData = JSON.parse(localStorage.getItem('vocabulary'));
    let date = `${new Date().getUTCDate()} - ${new Date().getUTCMonth()+1} - ${new Date().getUTCFullYear()}`
    if (vocData.length === 0 || vocData[0].day !== date) {
let newDay = {};
newDay["day"] = date;
newDay["content"] = [];
vocData.unshift(newDay);
}

     let con = {}
    con["word"] = words
    con["definition"] = definition
    vocData[0].content.push(con)

  localStorage.setItem('vocabulary', JSON.stringify(vocData));

    
 

  }
</script>

<div class = 'containerPath' style = {`z-index:${zIndex};`}>
  <div id = 'containerWord'>
    <div id = 'word'>{$choseText}</div>
    
  
</div>
  {#each fetchValue.board as types}
  {#if types.type== 'noun'}
  <div class = 'partOfSpeech' style = 'background-color:#ff6961'>{types.type}</div>
  {:else if types.type == 'verb'}
  <div class = 'partOfSpeech' style = 'background-color:#ffb480'>{types.type}</div>
  {:else if types.type == 'adjective'}
  <div class = 'partOfSpeech' style = 'background-color:#f8f38d'>{types.type}</div>
  {:else if types.type == 'adverb'}
  <div class = 'partOfSpeech' style = 'background-color:#42d6a4'>{types.type}</div>
  {:else if types.type == 'preposition'}
  <div class = 'partOfSpeech' style = 'background-color:#08cad1'>{types.type}</div>
  {:else if types.type == 'conjunction'}
  <div class = 'partOfSpeech' style = 'background-color:#59adf6'>{types.type}</div>
  {:else if types.type == 'interjection'}
  <div class = 'partOfSpeech' style = 'background-color:#9d94ff'>{types.type}</div>
  {:else if types.type == 'pronoun'}
  <div class = 'partOfSpeech' style = 'background-color:#c780e8'>{types.type}</div>
  {/if}
    {#each types.deex as defiexam}
    <div class ='MeaningClass' transition:blur={{duration:500}}>
        <button class = 'savevo' on:click = {()=>{Saving(defiexam.defi,$choseText)}}>save</button>
        <div class = 'DefiEng'>{defiexam.defi}</div>
        <div class = 'ExEng'>{defiexam.exam}</div>
    </div>
    {/each}
  {/each}
</div>

<style>

.savevo{
  position: absolute;
    right: 0.4vh;
    top: 0.4vh;
    height: max-content;
    padding: 0.5vh;
    border: 0;
    border-radius: 0.7vh;
    color: #535353;
    background-color: transparent;
    transition: 0.5s ease-in-out;
    font-weight: bold;
    font-size: 1.5vh;

  }

  .savevo:hover{
    background-color: #1d1d1d;
    color:#fefefe;
  }
 
.containerPath{
  position: absolute;
    width: 100%;
    background-color: #1c1c1c;
    bottom: 0;
    top: 4vh;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: auto;
    flex-direction: column;
}
.containerPath::-webkit-scrollbar {
  width: 0;
}
.partOfSpeech{
  position: relative;
    margin-bottom: 1vh;
    height: max-content;
    color:#1d1d1d;
    width: max-content;
    padding: 0.6vh;
    padding-inline: 2vh;
    margin-inline: 1vh;
    display: flex;
    border: 0;
    align-items: center;
    border-radius: 1vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
  
}
.MeaningClass{
  position: relative;
    width: 90%;
    height: max-content;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-bottom: 1vh;
    background-color: #eeeeee;
    border: 0;
    color: #1d1d1d;
    border-radius: 1vh;
    flex-direction: column;
    padding-block: 1vh;
}

.DefiEng{
  background-color: transparent;
    color: black;
    font-size: 2vh;
    font-weight: bold;
    font-family: monospace;
    left: 1vh;
    position: relative;
    width: 80%;
    height: max-content;
}

.ExEng{
  position: relative;
    width: 80%;
    height: max-content;
    background-color: transparent;
    color: black;
    font-size: 1.5vh;
    font-weight: bold;
    font-family: monospace;
    left: 1vh;
    top: 0.5vh;
}


    #containerWord{
      position: relative;
    width: 100%;
    background-color: transparent;
    height: 7vh;
    display: flex;
    font-family: monospace;
    align-items: center;
    font-weight: bold;
    flex-wrap: wrap;
    }

    #word{
      background-color: transparent;
    position: relative;
    width: 90%;
    left: 5%;
    height: 6vh;
    font-size: 4.2vh;
    font-weight: bolder;
    top: 1vh;
    color: #eeeeee;
    font-family: monospace;
    }


   
</style>