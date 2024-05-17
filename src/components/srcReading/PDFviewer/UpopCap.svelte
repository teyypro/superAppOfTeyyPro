<script>
   import { captureLink, captureTF, nowlinkTess } from "../store.js";
   import { onMount } from 'svelte'
    import Convert from "./Convert.svelte";

   let topvalue,rightvalue
   let finish = false
   let prevX,prevY
   let linker =false


   onMount(()=>{
   

   let image = document.getElementById('capturedimage')
   let contai = document.getElementById('containCap')
   let isSelecting = false
   let background = document.getElementById('layoutback')
   image.ondragstart = (event) => {
    event.preventDefault();
  };
   background.addEventListener('mousedown',(event)=>{
    finish = false
    contai.style.width = 0
    contai.style.height = 0
    isSelecting =true
    contai.style.display = 'block'
    prevY = event.clientY
    contai.style.top = prevY +'px'
    prevX = event.clientX
    contai.style.left = prevX +'px'
    console.log(prevX,prevY)
   })

   background.addEventListener('mousemove',(event)=>{
    if (isSelecting){
        contai.style.width = (event.clientX - prevX) +'px'
        contai.style.height = (event.clientY - prevY) + 'px'
        console.log("move")
    }
   })

   background.addEventListener('mouseup',(event)=>{
    if (isSelecting){
        background.style.zIndex = '-1'
        topvalue = event.clientY
        rightvalue = window.innerWidth - event.clientX
        finish = true
        Crop(topvalue,event.clientX)
    }
    isSelecting = false;
    
   })
})
function Crop(sH, sW) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const img = document.getElementById('capturedimage');

  const height = sH - prevY;
  const width = sW - prevX;
    console.log(height,"----",width)
  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(img, prevX, prevY, width, height, 0, 0, width, height);

 

  let image = document.getElementById('image');
  image.style.position = 'absolute';
  image.style.width = width.toString();
  image.style.height = height.toString();
  

  canvas.toBlob((blob) => {
  linker = URL.createObjectURL(blob);
  console.log(linker)
  image.src = linker
    console.log(linker)
    $nowlinkTess = linker
}, 'image/jpg');
}

</script>
<div id ='layoutback'></div>
<div id = 'prevDisplay'>
    <img src={$captureLink} alt = 'capture' id ='capturedimage'>
    
</div>
<img id = 'image' alt = "hi">
<div id = 'containCap'></div>
{#if finish}
    <Convert top = {topvalue} right = {rightvalue}/>
{/if}

<style>
    #layoutback{
        opacity: 0;
        position: fixed;
        top:0;
        left:0;
        right:0;
        height:100%;
        z-index:100;
    }
    #image{
        display: none;
    }
    #containCap {
        position: absolute;
    display: none;
    border: 0.3vh dotted black;
    z-index: 10;
    border-radius: 1vh;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}


    
#prevDisplay{
    position: fixed;
    background-color: blanchedalmond;
    bottom: 0;
    left: 0;
    z-index: 3;
    right: 0;
    top: 0;
}



#capturedimage{
    position: absolute;
    touch-action: none;
    height:100%;
    z-index: 3;
    

   
}
</style>