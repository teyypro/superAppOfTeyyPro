<script>
  import { StopCur, TFtool } from "../store";

    function Close(){
        $TFtool = true
        $StopCur = true
        console.log($StopCur,"Stoppppppppppppp")
    }
</script>

<div id="destroyControl" style = "top:{$TFtool ? "-50%" : "2vh"}"><span class="loader"></span>
    <button on:click ={()=>{Close()}}><span class="material-symbols-outlined">
      fullscreen_exit
      </span></button>
</div>


<style>
    button{
      position: relative;
    height: max-content;
    width: max-content;
    border: 0;
    padding: 0;
    display: flex;
    margin: 0;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    }
    #destroyControl{
      transition:1s;
      position: absolute;
    top: 2vh;
    left: 50%;
    border-radius: 2vh;
    display: flex;
    height: 6vh;
    font-size: 2vh;
    background-color: #F0F4F9;
    transform: translate(-50%);
    width: 16vh;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
}

#destroyControl:hover{
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    border-radius: 1.5vh;
}
span:hover{
    color:#535353;
}
    span{
      padding: 0;
    cursor: pointer;
    color: #919191;
    }
    .loader {
        width: 3vh;
    aspect-ratio: 1;
  display: inline-block;
  position: relative;
  border:0;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 3vh;
    aspect-ratio: 1;
  border: 4px solid #535353;
  position: absolute;
  left: 0;
  top: 0;
  animation: animloader 2s ease-in-out infinite;
}
.loader::after {
 
  animation-delay: 1s;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
    
    
</style>