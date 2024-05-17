<script>
  import { onMount } from 'svelte';
import { stepDS } from '../store.js'
onMount(()=>{
    console.log("Have")
    document.getElementsByClassName('typeDS')[0].style.backgroundColor = '#1d2956'
        document.getElementsByClassName('typeDS')[0].style.color = '#fefefe'
})
function Ref(choice,k){
    if (choice == 'defi'){
        $stepDS = 'defi'
       
    } else 
    if (choice == 'syn'){
        $stepDS = 'syn'
} else if (choice == 'ant'){
    $stepDS = 'ant'
} else if (choice == 'coA'){
    $stepDS = 'coA'
} else if (choice == 'coN'){
    $stepDS = 'coN'
}
for (let i = 0;i<=4;i++){
    if (i+1 == k){
        document.getElementsByClassName('typeDS')[i].style.backgroundColor = '#1d2956'
        document.getElementsByClassName('typeDS')[i].style.color = '#fefefe'
    } else {
        document.getElementsByClassName('typeDS')[i].style.backgroundColor = 'transparent'
        document.getElementsByClassName('typeDS')[i].style.color = '#1d2956'
    }
}
        
}
</script>

<div id = 'containerTypeDS'>
    <button class = 'typeDS' on:click={()=>{Ref('defi',1)}}>defi</button>
    <button class = 'typeDS' on:click={()=>{Ref('syn',2)}}>syn</button>
    <button class = 'typeDS' on:click={()=>{Ref('ant',3)}}>ant</button>
    <button class = 'typeDS' on:click={()=>{Ref('coA',4)}}>adj</button>
    <button class = 'typeDS' on:click={()=>{Ref('coN',5)}}>noun</button>
    
</div>

<style>

#containerTypeDS{
    position: absolute;
    top: 2vh;
    left: 50%;
    width: 47vh;
    transform: translate(-50%);
    height: 4vh;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    }

    .typeDS:hover{
        background-color: #1d295640;
     
        cursor: pointer;
    }
 
    .typeDS{
        position: relative;
    width: 8vh;
    height: 100%;
    background-color: transparent;
    display: flex;
    margin: 0;
    border-radius: 1vh;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    font-weight: bold;
    color: #1d2956;
    font-family: sans-serif;
    border: 0.2vh solid #1d295630;
    }
</style>