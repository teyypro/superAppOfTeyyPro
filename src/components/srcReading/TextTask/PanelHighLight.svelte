
  
  <div id = 'containQuickTask'>
  
    
          <button class = 'quickHighlight' id = 'color1'></button>
          <button class = 'quickHighlight' id = 'color2'></button>
          <button class = 'quickHighlight' id = 'color3'></button>
          <button class = 'quickHighlight' id = 'color4'></button>
          <button class = 'quickHighlight' id = 'color5'></button>
          <button class = 'quickHighlight' id = 'Nocolor'>X</button>
    
  </div>
  
  
  <style>
      #containQuickTask{
        width: 35vh;
    height: 4vh;
    background-color: #eeeeee;
    position: fixed;
    z-index: 2;
    border-radius: 1vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    left: 50%;
    transform: translate(-50%,4vh);
      }
  

 
      .quickHighlight{
          height: 3vh;
      width: 3vh;
      border-radius: 1vh;
      border: 0;
      }
  
      #color1{
          background-color: #ff6565;
      }
      #color2{
          background-color: #91e0ee;
      }
      #color3{
          background-color: #ffe16c;
      }
      #color4{
          background-color: #179487;
      }
      #color5{
          background-color: #fe5d8c;
      }
      #Nocolor{
          background-color: white;
      border: 0.1vh solid #eeeeee;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2vh;
      font-family: cursive;
      }
  </style>