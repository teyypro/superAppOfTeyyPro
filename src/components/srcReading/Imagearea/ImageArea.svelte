<script>
  import { onMount, afterUpdate } from 'svelte';
  import { DisplayImageList, imageListTab, imageTF, onTab, onTabImage } from '../store.js';
  import Viewer from 'viewerjs';
  export let numpage;
  let idhere = "images" + ($onTab - 1).toString();
  let idcontai = "contai" + ($onTab - 1).toString();
  let viewer;
  let pageimagehere;
  let numImageTab;
 
  onTab.subscribe((value) => {
     if (value - 1 == numpage) {
    
       $onTabImage = pageimagehere;
       console.log($onTabImage,"wdrw")
     }
  });
 
  onMount(() => {
    $imageTF = true
     imageListTab.update((value) => {
       let prev = [...value];
       numImageTab = prev.length;
       prev.push([]);
      
       return prev;
     });
 
     pageimagehere = $imageListTab.length;
   
 
     viewer = new Viewer(document.getElementById(idhere), {
       inline: true,
       ready() {
         let ue = document.getElementsByClassName('viewer-container');
         for (let element of ue) {
           element.style.position = 'absolute';
           element.style.top = '0';
           element.style.left = '0';
           element.style.right = '0';
           element.style.bottom = '0';
           element.style.display = 'flex';
         }
       },
     });
 
     document.getElementById(idcontai).appendChild(viewer.element);
  });
 
  afterUpdate(() => {
    if ($onTab - 1 == numpage) {$onTabImage = pageimagehere
  
     imageListTab.subscribe(newList => {
    
       viewer.update(newList[pageimagehere-1].map(image => {
         return { src: image };
       }));
     });};
  });
 </script>


<div id={idhere} class="idImageClass">
  {#each $imageListTab as images,i}
  {#if i==pageimagehere-1}
    {#each images as image}
     <img src={image} alt="sdsd">
    {/each}
  {/if}  
    {/each}
 </div>
 
 <div id={idcontai} class="idcontainCLass"></div>
 
 <style>
  .idcontainCLass {
     position: absolute;
     display: flex;
     height: 100%;
     width: 100%;
  }
  .idImageClass {
     display: none;
  }
  img {
     width: 40%;
     margin-inline: 4%;
  }
 </style>