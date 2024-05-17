<script>
    import { scale } from 'svelte/transition'
      import { captureLink,captureTF,isConvertingTess, convertedTextTess, dictionaryDS } from "../store.js";
  const Capture = async () => {
      $isConvertingTess = false;
      $convertedTextTess =''
   try {
  
      // asking permission
      const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true });
  
      const video = document.createElement('video');
  
  
      video.srcObject = stream; // Set the video source to the stream
  
      video.onloadedmetadata = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
  
        video.play();
    
  
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
        stream.getVideoTracks()[0].stop();
      
  
        //$captureLink = canvas.toDataURL();
        canvas.toBlob((blob) => {
    $captureLink = URL.createObjectURL(blob);
    $captureTF = true;
    console.log($captureLink.toString());
  }, 'image/jpg');
      };
   } catch (error) {
      console.log(error);
   }
  };
  
  function Dictest(){
          $dictionaryDS =!$dictionaryDS
          if ($dictionaryDS == true){
              $isConvertingTess = false;
              $convertedTextTess =''
          }
      } 
  </script>
  
  <div>
  <button  in:scale={{duration:500}} id = 'dic' on:click ={Dictest} class = 'extrabut'><span class="material-symbols-outlined">
      dictionary
      </span>dictionary</button>
  <button  in:scale={{duration:500}} id = "ScreenCapture" on:click = {Capture} ><span class="material-symbols-outlined">
      screen_search_desktop
      </span>screensearch</button>
  </div>
  <style>
      span{
          padding: 0;
      margin-right: 1vh;
      font-size: 3.5vh;
      }
      div{
          position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      right: 0;
      background-color: black;
      }
      button{
          background-color: transparent;
      border: 0;
      padding: 0;
      margin: 0;
      color: #eeeeee;
      transition: 0.1s;
      height: max-content;
      display: flex;
      align-items: center;
      width: max-content;
      padding-inline: 1vh;
      margin-inline: 0.5vw;
      border-radius: 0.5vh;
      font-size: 2vh;
      font-family: monospace;
      font-weight: bold;
      }
  
      button:hover{
          padding-block: 0.3vh;
          background-color: #eeeeee;
          color:#1d1d1d;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      }
  
  </style>