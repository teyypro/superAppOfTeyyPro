<script>
    import {  DisplayImageList, imageList, imageListTab, imageTF, onTabImage } from "../store";
    import Drag from "./Drag.svelte";
    import Preview from "./Preview.svelte";
  
    import { slide, blur, scale } from 'svelte/transition'
      function OkImage(){
          imageListTab.update((value) => {
      let prev = [...value];
      console.log(prev,$onTabImage,"ads")
      prev[$onTabImage - 1] = prev[$onTabImage - 1].concat($imageList);
      return prev;
    });
  
    $imageTF = false;
      }
  </script>
  
  
  <div in:scale={{duration:500}} out:slide={{duration:200}} id = 'containUpload' >
      
      <div id = 'containUpMain' >
         
          <button id = 'exit' on:click = {()=>{$imageTF=false}}><span class="material-symbols-outlined">
              tab_close_right
              </span>cancel</button>
          <Drag/>
      <button id = 'okeImgage' on:click ={OkImage}><span class="material-symbols-outlined">
          priority
          </span>done</button>
      </div>
      <div id = 'containGalary' >
          <Preview/>
      </div>
      
  </div>
      
  <div id = 'blackground'></div>
  <style>
  span{
      font-size:5vh;
  }
      #blackground{
          position: fixed;
          top:0;
          left: 0;
          right:0;
          bottom:0;
          background: rgba( 0, 0, 0, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
          z-index: 6;
      }
  #containUpload{
      position: fixed;
      height: 63vh;
      background-color: transparent;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      aspect-ratio: 16 / 9;
      border-radius: 2vh;
      border: 0;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      }
  
  
  
  
  #containUpMain{
      position: relative;
      background-color: transparent;
      height: 25%;
      border: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      align-items: flex-end;
  }
  #containGalary{
      position: relative;
      height: 70%;
      width: 100%;
      background-color: #ffffff;
      border-radius: 2vh;
      overflow: hidden;
      border: 0;
  }
  
  #exit{
     position: relative;
      background-color: #ffffff;
      border-radius: 2vh;
      border: 0;
      height: 60%;
      aspect-ratio: 2;
      padding: 0.5vh;
      padding-inline: 3vh;
      color: #535353;
      font-size: 2vh;
      font-weight: bold;
      font-family: monospace;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      transition: 0.5s;
  }
  
  #okeImgage{
      position: relative;
      background-color: #ffffff;
      border-radius: 2vh;
      border: 0;
      height: 60%;
      aspect-ratio: 2;
      padding: 0.5vh;
      padding-inline: 3vh;
      color: #535353;
      font-size: 2vh;
      font-weight: bold;
      font-family: monospace;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      transition: 0.5s;
    
     
  
  }
  #okeImgage:hover{
      background-color: #ceead6;
      color:#0d652d;
      scale: 0.9;
      transition: 0.2s;
  }
  
  #exit:hover{
      background-color: #fad2cf;
      color: #a50e0e;
      scale: 0.9;
      transition: 0.2s;
  }
  
  </style>