<script>
    import { imageList } from "../store";
    import { scale, slide } from 'svelte/transition'
    function Delete(num){
      imageList.update((value)=>{
          let prev = [...value]
          prev.splice(num,1)
          return prev
      })
    }
  //   function scrollToTop(r) {
  //     if (r = $imageList.length-1) {
  //     document.getElementById("containPrev").scrollTo({
  //       top: document.getElementById("containPrev").scrollHeight,
  //       behavior: "smooth"
  //     });
  //     console.log("")
  //   }
  // }
  </script>
  <div  id = 'containPrev'>
      {#each $imageList as image, x}
          <div class = 'containMage'>
              <img src = {image} alt ='aimg'>
              <button class = 'deleteImg' on:click = {()=>{Delete(x)}}><span class="material-symbols-outlined">
                  delete_sweep
                  </span></button>
          </div>
      {/each}
  </div>
  
  <style>
      span{
          font-size: 4vh;
      }
          #containPrev{
              position: absolute;
          left: 0vh;
          right: 0vh;
          bottom: 0vh;
          top: 0vh;
          display: flex;
          overflow: auto;
          flex-direction: column;
          flex-wrap: nowrap;
          align-items: center;
          }
     
  
      .containMage{
          position: relative;
      width: 100%;
      height: max-content;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      border: 0;
      margin-block: 0.5vh;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  
      .deleteImg{
          position: absolute;
      padding: 2vh;
      display: flex;
      left: 1vh;
      width: max-content;
      color: #535353;
      height: 4vh;
      top: 1vh;
      border: 0;
      border-radius: 0.5vh;
      font-size: 1.5vh;
      font-weight: bold;
      font-family: monospace;
      transition: 0.1s;
      z-index: 1;
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      justify-content: center;
      align-items: center;
      }
      .deleteImg:hover{
          transition: 0.2s;
          scale: 0.9;
      }
      img{
          position: relative;
    
      bottom: 0;
      width: 100%;
      }
  
  </style>