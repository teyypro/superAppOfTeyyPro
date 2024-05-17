<script>
    import {  CusList, AnsList, resWord,  choice, resScore, resultTF } from "../store";
  
    function Ans(){
      console.log($CusList) //dapan cus
      console.log($AnsList)
      console.log($resWord) //dapsan c
      $choice = 'result'
      let d = 0
      let resTF = new Array($CusList.length).fill(false)
      for (let i = 0; i<$CusList.length;i++){
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