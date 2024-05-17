<script>
    import { blur } from 'svelte/transition'
    import {  enterText, stepDS } from "../store.js";
    import { onMount } from "svelte";
  import BookMark from './BookMark.svelte';
    let zIndex = 0
    let idOnTranslate
    let A = []
    let FinishFetch = false
    let Check
    stepDS.subscribe((value)=>{
        if (value == 'defi'){
            zIndex = 1
        } else zIndex = 0
    })

    let fetchValue = {
            "word":"",
            "board":[
              
            ]
          }
    //API DÈINITION
    onMount(()=>{
      $stepDS = "defi"
        idOnTranslate = 0
        let huptext = $enterText
        var link = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ `${huptext}`
        
          let contaiFile
          TranslateOne($enterText)
    fetch(link)
      .then( res => res.json())
      .then(result => {
        
        result.map(run1)
        function run1(resultNew){
          fetchValue.word = resultNew.word
          
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
          A.push(definitionsNew.definition+"1805")// ddaayr het definition do
          //"#/#" để tách ra 
          
          if (definitionsNew.example!=undefined){
            deSam.exam = definitionsNew.example
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
       
       console.log(A,">>>>>>>>>>>>>>>>>>>>>>>")
        openGoogleTranslator.TranslateLanguageData({
        listOfWordsToTranslate: [A],
        fromLanguage: "en",
        toLanguage: "vi",
  })
  .then((data) => {
    console.log(data[0].translation,"M<<<<<<<<<<<<<<<<<<<<<<<<")
          A = data[0].translation

          let separate = A.split(/1805,Để |1805,|1805/g);

          // Chuyển đổi chữ cái đầu của các từ sau ký tự "#/#," thành chữ in hoa
          for (var i = 1; i < separate.length; i++) {
              separate[i] = separate[i].charAt(0).toUpperCase() + separate[i].slice(1);
          }
          A = separate
          Check = Array(A.length).fill(false)
          console.log(A,"::::::::::::")
          FinishFetch = true
  });
    })
  }
    )
    

    function Saving(definition,words,index){
      Check[index] = true
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



    //Translate funtion return 1 value
    let mean ="..."
    function TranslateOne(Char){
      openGoogleTranslator.TranslateLanguageData({
        listOfWordsToTranslate: [Char],
        fromLanguage: "en",
        toLanguage: "vi",
  })
  .then((data) => {
    console.log(data[0].translation,"???????????????????")
    mean = data[0].translation;
  });
}

//     //Adapting color to text each PART OF SPEECH
//     function AdaptColor(pos){
   
//     switch (pos) {
//         case 'noun':
//             return '#ff6961';
//         case 'verb':
//             return '#ffb480';
//         case 'adjective':
//             return '#f8f38d';
//         case 'adverb':
//             return '#42d6a4';
//         case 'preposition':
//             return '#08cad1';
//         case 'conjunction':
//             return '#59adf6';
//         case 'interjection':
//             return '#9d94ff';
//         case 'pronoun':
//             return '#c780e8';
//         default:
//             return '#1d1d1d;'; // Trong trường hợp không khớp với bất kỳ loại nào
    
//     }
// }

      function Translate(){
        idOnTranslate++
       
        return A[idOnTranslate-1]
      }
</script>

<div class = 'containerPath' style = {`z-index:${zIndex};`}>
  <div id = 'containerWord'>
    <div id = 'word'>{$enterText}</div>
    <div id = 'mean'>{mean}</div>
   
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
    <div class ='MeaningClass' in:blur={{duration:500}}>
      
        <div class = 'DefiEng'>{defiexam.defi}</div>
        <BookMark definition = {defiexam.defi} words = {$enterText}></BookMark> 
      {#key FinishFetch}
        {#if FinishFetch}
            <div class = 'translateCap'>{Translate()}</div>
        {/if}
      {/key}

        <div class = 'ExEng'>{defiexam.exam}</div>
      </div>
    {/each}
  {/each}
</div>

<style>
.translateCap{
  position: relative;
    width: 80%;
    height: max-content;
    background-color: transparent;
    color: #1d2a57;
    font-size: 2.2vh;
    font-weight: lighter;
    font-family: monospace;
    left: 1vh;
    top: 0.5vh;
}

.containerPath{
  position: absolute;
    width: 100%;
    height: 95%;
    background-color: #ffffff;
    top: 7vh;
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
    background-color: transparent;
    width: 100%;
    padding-block: 0.5vh;
    padding-inline: 5.5vh;
    margin-inline: 1vh;
    color: #1d2a57;
    display: flex;
    border: 0;
    align-items: center;
    border-radius: 1.5vh;
    font-size: 3vh;
    font-family: sans-serif;
    font-weight: bold;
    margin-bottom: 2vh;
    justify-content: center;  
}
.MeaningClass{
  position: relative;
    width: 95%;
    height: max-content;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-bottom: 1vh;
    background-color: transparent;
    border: 0;
    flex-direction: column;
    padding-bottom: 1.5vh;
    border-bottom: 1px solid #eeeeee;
  
}
.MeaningClass::after{
  content:"";
}
.DefiEng{
  background-color: transparent;
    color: #1d2956;
    font-size: 2.8vh;
    font-weight: bold;
    font-family: monospace;
    left: 1vh;
    position: relative;
    width: 80%;
    height: max-content;
    transition: 1s;
    border-left: 0.1px solid;
    padding-left: 1vh;
}

.ExEng{
  position: relative;
    width: 80%;
    height: max-content;
    background-color: transparent;
    color: #1d2a57;
    font-size: 1.8vh;
    font-weight: bold;
    font-family: monospace;
    left: 1vh;
    top: 0.5vh;
    font-style: italic;
}


    #containerWord{
      position: relative;
    width: 100%;
    background-color: transparent;
    height: max-content;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    }

    #word{
      background-color: transparent;
    position: relative;
    width: 90%;
    left: 5%;
    height: max-content;
    margin-top: 1vh;
    word-wrap: break-word;
    font-size: 6vh;
    font-weight: bolder;
    top: 1vh;
    color: #1d2956;
    font-family: sans-serif;
    }

    #mean{
      background-color: transparent;
    position: relative;
    width: 90%;
    left: 5%;
    height: max-content;
    margin-bottom: 3vh;
    word-wrap: break-word;
    font-size: 3vh;
    font-weight: bolder;
    top: 1vh;
    color: #1d2956;
    font-family: sans-serif;
    }
  
</style>