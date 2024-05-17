<script>
    import { finalanswerTF, result, testAns } from "../store";
    import AnswerForm from "./AnswerForm.svelte";
  
      function Check(){
          testAns.update(value=>{
                  return []
              })
          var ui = document.getElementsByClassName('answer');
          Array.from(ui).forEach(test);
  
      function test(element, index) {
          console.log(element.value)
          if ($result[index] == element.value){
              testAns.update(value=>{
                  return [...value,"#08f26e"]
              })
          }
          else{
              testAns.update(value=>{
                  return [...value,"#ff0033"]
              })
          }
        
      }
      $finalanswerTF = true
      console.log($testAns)
      }
  </script>
  <div id = 'answersheet'>
      <h1><span class="material-symbols-outlined">
              dashboard
      
          </span>Answer Sheet</h1>
      <div id = 'answercontain'>
      {#each $result as res,i}
          
         <AnswerForm content = {res} sort = {i+1}/>
         {#if $result.length-1==i}
          <button id = 'check' on:click = {Check}>check</button>
         {/if}
      {/each}
  </div>
  </div>
  
  <style>
      span{
          font-size: 5vh;
      margin-right: 2%;
      }
    
      h1{
          display: flex;
      align-items: center;
      font-size: 4vh;
      width: 91%;
      justify-content: flex-start;
      border-bottom: 1px solid #eeeeee;
      color: #535353;
      padding-bottom: 2%;
      }
      #check{
          position: relative;
      height: max-content;
      background-color: #1D1D1D;
      width: max-content;
      padding: 01vh;
      padding-inline: 3vh;
      display: flex;
      align-items: center;
      border-radius: 2vh;
      font-size: 2.5vh;
      font-family: monospace;
      margin: 2vh;
      font-weight: bold;
      color: #EEEEEE;
      bottom: 1vh;
      right: 0;
      transition: 1s;
  }
      #check:hover{
          background-color: #535353;
          color:#eeeeee;
          border:0;
     
          transition:0.5s;
          scale:1.1;
      }
      
  
      #answersheet{
          position: relative;
      background-color: #ffffff;
      display: flex;
      flex-grow: 1;
      flex-wrap: nowrap;
      padding-top: 1vh;
      padding-bottom: 0;
      justify-content: flex-start;
      flex-direction: column;
      border-radius: 2vh;
      transition: 0.5s;
      overflow-y: auto;
      overflow-x: hidden;
      align-items: center;
      cursor: pointer;
      }
      #answersheet:hover{
          transition: 0.2s;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      
      }
      #answersheet::-webkit-scrollbar {
          width: 1vh;
      border-radius: 0.5vh;
      background-color: transparent;
  }
  
  #answersheet::-webkit-scrollbar-thumb {
      background-color: #eeeeee;
      border-radius: 1vh;
      cursor: pointer;
  }
  </style>