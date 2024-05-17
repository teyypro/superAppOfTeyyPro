<script>
    import { onTab, step, taskbar, typesFile } from '../store.js'
    import { scale, slide } from 'svelte/transition'
    function Compare(types){
        // Xem thử chọn text,pdf hay images
        $step[$onTab-1] = "enterName"
        $typesFile[$onTab-1] = types
        
        console.log($step[$onTab-1])
    }
</script>

<div  class = 'container'>
    <div  class = 'choicecontaintitile'>
        
        <h1>Add your<br>choice</h1>
        <p>Click to choose <br> an option</p>
    </div>
    <div class = 'choicecontain'>
        <button in:scale={{duration:700}} id = 'text' on:click = {()=>{Compare("text")}}>TEXT</button>

        <button in:scale={{duration:800}} id = 'pdf' on:click = {()=>{Compare("pdf")}}>PDF</button>
    
        <button in:scale={{duration:900}} id = 'image' on:click = {()=>{Compare("image")}}>IMAGE</button>

    </div>

</div>

<style>
    #text{
        background-color: #D2E3FC;
    color: #174EA6;
    }
    #pdf{
        background-color: #FAD2CF;
    color: #A50E0E;
    }
    #image{
        background-color: #FEEFC3;
    color: #E37400;
    }
    h1{
        padding: 3vw;
    margin: 0;
    font-size: 5vw;
    font-family: sans-serif;
    }
    p{
        padding: 3vw;
    margin: 0;
    font-size: 1.5vw;
    color: #535353;
    font-family: sans-serif;
    }
    .choicecontaintitile{
        display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    }
    .choicecontain{
        display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    }
    .container{
        position: absolute;
    top: 50%;
    left: 50%;
    width: 60vw;
    aspect-ratio: 2;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 5vh;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}

    button{
        position: relative;
    width: 91%;
    padding: 0;
    height: 27%;
 
    border-radius: 3vh;
    border: 0;
    font-size: 4vw;
    font-weight: bold;
    font-family: monospace;
    transition:0.5s;
    }

    button:hover{
        opacity: 0.8;
       filter: saturate(5);
        transition:0.1s;
        cursor: pointer;
    }

    

</style>