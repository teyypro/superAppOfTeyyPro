<script>
  import { onMount } from 'svelte';
import { imageList } from '../store.js';
  let dropZone;

  onMount(() => {
    dropZone = document.getElementById('containDragUp');
  });

  function DragOver(e) {
    e.preventDefault();
    dropZone.style.cssText = 'scale: 2.1;transition: 0.5s; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;';
  }

  function DragLeave() { // Change back to original colo
    dropZone.style.cssText = 'scale: 1;transition: 0.2s; '
}
  function DragDrop(e) {
    dropZone.style.cssText = 'scale: 1;transition: 0.5s;'
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  function handleFiles(files) {
    for (var i = 0; i < files.length; i++) {
      if (files[i].type.match('image.*')) {
        
        imageList.update((value)=>{
          let prev = [...value]
          prev.push(URL.createObjectURL(files[i]))
          return prev
        }) 
    
      }
    }
    
  }

  function Trigger(){
      document.getElementById('fileInput').click()
  }
</script>

<style>
  span{
    font-size:4vh;
  }
  #containDragUp {
    position: relative;
  width: 60%;
  height: 80%;
  margin-inline: 3%;
  background-color: #ffffff;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  font-family: monospace;
  font-weight: bold;
  border-radius: 3vh;
  color: #1d1d1d;
  z-index: 2;
  cursor:pointer;
  transition: transform 0.3s ease, scale 0.3s ease; 
  }
  @keyframes shaking {
0% { transform: translateY(0); scale:0.9;  }
25% { transform: translateY(5px);  }
50% { transform: translateY(-5px); scale:1.1 }
75% { transform: translateY(5px);  }
100% { transform: translateY(0); scale:1; }
}

#containDragUp:hover {
animation: shaking 0.8s ease-in-out;

}

  #fileInput {
    display: none;
  }


</style>

<button id='containDragUp' on:dragover={DragOver} on:dragleave={DragLeave} on:drop={DragDrop} on:click={Trigger}>
  <span class="material-symbols-outlined">
    drag_click
    </span>drag images or click here<input type='file' multiple id='fileInput' on:change={()=>{handleFiles(event.target.files)}}>
  
</button>
