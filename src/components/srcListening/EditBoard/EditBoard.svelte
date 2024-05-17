<script>
    import { onMount } from "svelte";
    import { slide } from 'svelte/transition'
    import { finalanswerTF, lenWord, numWord, result , editBoard, ongoingText } from "../store.js";
    import Taskboard from "../TaskBoard/Taskboard.svelte";
      onMount(()=>{
          document.getElementById('TextEdit').value =  $ongoingText==undefined ? "":$ongoingText
          document.getElementById('TextEdit').addEventListener('input', function() {
      // Lưu lại văn bản đã chỉnh sửa vào biến
      console.log(document.getElementById('TextEdit').value   )
      document.getElementById('TextEdit').innerHTML = document.getElementById('TextEdit').value;
      // Sử dụng biến này cho mục đích xử lý tiếp theo, ví dụ: lưu vào cơ sở dữ liệu, xử lý, v.v.
  });
     
      })
      function Finish(){
          $editBoard = false  
        
      }
     
     
      function Convert(){
          var yt = document.getElementsByClassName('answer');
          Array.from(yt).forEach(test);
  
      function test(element) {
          element.value =''
      }
          $finalanswerTF = false
          result.update(value =>{
              return []
          })
          $numWord = document.getElementById('numword').value
          $lenWord = document.getElementById('lenword').value
          $ongoingText = document.getElementById('TextEdit').value
          let text = $ongoingText
          console.log(text)
        
  const regex = /\w+\’\w+|\b\w+\b|[^\w\s\n]|\n|\s/g;
  
  let matches = [];
  let match;
  while ((match = regex.exec(text))) {
    matches.push(match[0]);
  }
  
        //let ui = text.split(/\W+/).filter(word => word && word != "'");
        
        //let ui = text.match(/\w+\’\w+|\b\w+\b/g)
        let ui = matches
      let v = $lenWord
      let r = $numWord
      let a = Math.round(ui.length/$numWord)
      let yep 
      function testText(text) {
          console.log("testtext")
          var pattern = /^[a-zA-Z0-9]+$/;
          return pattern.test(text);
      }
      
      for (let i=0; i<=r-1; i++){
          if (i==r-1){
              let max = ui.length-1
            let l = max
            let d = 0
            while (i*a<l){
              if (testText(ui[l])){
                  d++
              }
              if (d == v){
                
                   break 
              }
              l=l-1
            }
  
             yep = Math.floor(Math.random() * (max - i*a + 1)) + i*a
            while (!testText(ui[yep]) || (yep>l)){
                  yep = Math.floor(Math.random() * (max - i*a + 1)) + i*a
                 
                  }
                  l = yep
                  let S = ""
                  d= 0
                  while (l<max){
                      if (testText(ui[l])){
                          
                          if (d==v-1)
                              {S+=ui[l]}
                          else {
                              S+=ui[l]+" "
                          }
                          d++
                          if (d==1){
                              ui[l] = "("+`${i+1}`+")"+ "_ ".repeat(ui[l].length)
                          } else{
                              ui[l] = "_ ".repeat(ui[l].length)
                          }
                  }
                      if (d==v){break}
                      l++
              }
              console.log(S)
                  result.update(value=>{
                  return [...value,S]
              })
              
             
          } else 
          
          {
            let max = (i+1)*a-1
            let l = max
            let d = 0
          
            while (i*a<l){
              if (testText(ui[l])){
                  d++
              }
              if (d == v){
                
                   break 
              }
              l=l-1
            }
             yep = Math.floor(Math.random() * ((i+1)*a-1 - i*a + 1)) + i*a
            while (!testText(ui[yep]) || (yep>l)){
                  yep = Math.floor(Math.random() * ((i+1)*a-1 - i*a + 1)) + i*a
                 
                  }
                  l = yep
                  let S = ""
                  d= 0
                  while (l<max){
                      if (testText(ui[l])){
                          
                          if (d==v-1)
                              {S+=ui[l]}
                          else {
                              S+=ui[l]+" "
                          }
                          d++
                          if (d==1){
                              ui[l] = "("+`${i+1}`+")"+ "_ ".repeat(ui[l].length)
                          } else{
                              ui[l] = "_ ".repeat(ui[l].length)
                          }
                          console.log(l,"asasasas",ui[l])
                  }
                      if (d==v){break}
                      l++
              }
              console.log(S)
                  result.update(value=>{
                  return [...value,S]
              })
            
          }
         
      }
      document.getElementById('textarea').value = ui.join('')
      console.log($result)
      $editBoard = false
      }
  </script>
  <div id = 'containBlack'></div>
  <div id = 'containerEdit' transition:slide={{duration:300}}>
      <div id = 'containarea'>
          <textarea id = 'TextEdit' spellcheck="false"></textarea>
      </div>
      <div id = 'containchoice'>
          <Taskboard/>
          <div id ='containbake'>
              
              <button id ='destroy' on:click = {Finish}>cancel</button>
              <button id = 'done' on:click = {Convert}>save</button>
  
          </div>
      </div>
  </div>
  <style>
   
      #destroy{
          background-color: transparent;
          border:1px solid #535353;
          color:#535353;
      }
  
      #done{
          background-color: #535353;
          color:#eeeeee;
      }
      button{
          height: 70%;
      width: 42%;
      border-radius: 6vh;
      font-size: 3vh;
      }
      #done:hover{
          color:#ffffff;
          background-color: #1d1d1d;
          border:0;
          transform: scale(0.95);
      }
      #destroy:hover{
          color:#ffffff;
          background-color: #1d1d1d;
          border:0;
          transform: scale(0.95);
      }
      #containchoice{
          display: flex;
      position: relative;
      width: 100%;
      height: 15%;
      background-color: transparent;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      }
      #containbake{
          position: relative;
      height: 100%;
      width: 40%;
      background-color: #ffffff;
      border-radius: 6vh;
      display: flex;
      align-items: center;
      justify-content: space-around;
      }
  
      #containarea{
          position: relative;
      padding: 4%;
      resize: none;
      font-size: 2.5vh;
      width: 92%;
      height: 65%;
      border-radius: 3vh;
      background-color: #ffffff;
      }
      #TextEdit {
          position: relative;
      resize: none;
      font-size: 2.5vh;
      width: 100%;
      height: 100%;
      font-family: monospace;
      color: #535353;
      background-color: #ffffff;
   
  }
  
  #TextEdit::-webkit-scrollbar {
          width: 1vh;
      border-radius: 0.5vh;
      background-color: transparent;
  }
  
  #TextEdit::-webkit-scrollbar-thumb {
      background-color: #535353;
      border-radius: 1vh;
      cursor: pointer;
  }
  
  
  
      #containBlack{
          position: absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          background-color: black;
          opacity: 0.8;
          z-index: 1;
      }
      #containerEdit{
          position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 70vh;
      aspect-ratio: 16 / 9;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      border-radius: 2vh;
      flex-direction: column;
      flex-wrap: nowrap;
      }
  </style>