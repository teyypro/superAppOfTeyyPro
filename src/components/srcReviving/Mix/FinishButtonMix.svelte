<script>
    import {  CusList, AnsList, resWord,  choice, resScore, resultTF, LisEnter, choiceOpt, MixRes } from "../store";
  
    function Ans(){
    
      CusList.update((value)=>{
        console.log(value,"value")
        for (let i = 0; i<$LisEnter.length; i++){
         
          if ($MixRes[i]!=0){
          
            value[i] = document.getElementById('inputMixs'+`${i}`).value
          }
          
}   return value
      })
      
      console.log($CusList) //dapan cus
    
      console.log($resWord) //dapsan c
      $choice = 'result'
      let d = 0
      let resTF = new Array($CusList.length).fill(false)
      for (let i = 0; i<$CusList.length;i++){
        console.log ($CusList[i],":::::",$AnsList[i])
        if ($CusList[i] == $AnsList[i]){
          resTF[i]=true
          d++
      }
    }
    resultTF.update(()=>{
      return resTF
    })

    $resScore = d

   
  }
</script>
  
  <button class = 'finish' on:click ={Ans}>done</button>
  
  <style>
   .finish{
    position: absolute;
    height: 4vh;
    background-color: transparent;
    width: max-content;
    padding-inline: 2vh;
    margin-inline: 1vh;
    display: flex;
    border: 0;
    align-items: center;
    border-radius: 1.2vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    color: #999999;
    right: 0;
    top: 1vh;
    transition:0.2s ease-in-out;
      }
      .finish:hover{
        background-color: #1d1d1d;
        color: #fefefe;
      }
  </style>