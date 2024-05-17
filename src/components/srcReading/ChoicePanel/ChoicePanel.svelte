<script>
    import { coordinateMouse,stepDic } from "../store.js";
    import { onMount } from 'svelte'
    import { slide } from 'svelte/transition'
    import Definition from "./Definition.svelte";
    import Antonyms from "./Antonyms.svelte";
    import Synonyms from "./Synonyms.svelte"
    import CoNount from "./CoNount.svelte";
    import CoAdj from "./CoAdj.svelte";

    onMount(()=>{
        $stepDic = 'defi'
        document.getElementsByClassName('type')[0].style.backgroundColor = '#fefefe'
        document.getElementsByClassName('type')[0].style.color = '#1d1d1d'
        let container = document.getElementById('containerLookUp')
        console.log(container.offsetWidth,",;;;;;;;;;;;;;;;;;;;;;;")
        if (($coordinateMouse[0]+container.offsetWidth) < window.innerWidth){
            container.style.left = $coordinateMouse[0] +'px'
        } else {
            container.style.left = $coordinateMouse[0]-container.offsetWidth +'px'
        }
        if (($coordinateMouse[1]+container.offsetHeight) < window.innerHeight){
            container.style.top = $coordinateMouse[1] +'px'
        } else {
            container.style.top = $coordinateMouse[1]-container.offsetHeight +'px'
        }
        console.log("Applyed")
    })
    


    function Ref(choice,k){
    if (choice == 'defi'){
        $stepDic = 'defi'
       
    } else 
    if (choice == 'syn'){
        $stepDic = 'syn'
} else if (choice == 'ant'){
    $stepDic = 'ant'
} else if (choice == 'coA'){
    $stepDic = 'coA'
} else if (choice == 'coN'){
    $stepDic = 'coN'
}
for (let i = 0;i<=4;i++){
    if (i+1 == k){
        document.getElementsByClassName('type')[i].style.backgroundColor = '#fefefe'
        document.getElementsByClassName('type')[i].style.color = '#1d1d1d'
    } else {
        document.getElementsByClassName('type')[i].style.backgroundColor = 'transparent'
        document.getElementsByClassName('type')[i].style.color = '#fefefe'
    }
}
        
}

</script>


<div id = 'containerLookUp' transition:slide={{duration:300,delay:0}}>
    <div id = 'containerType'>
        <button class = 'type' on:click={()=>{Ref('defi',1)}}>defi</button>
        <button class = 'type' on:click={()=>{Ref('syn',2)}}>syn</button>
        <button class = 'type' on:click={()=>{Ref('ant',3)}}>ant</button>
        <button class = 'type' on:click={()=>{Ref('coA',4)}}>adj</button>
        <button class = 'type' on:click={()=>{Ref('coN',5)}}>noun</button>
        
    </div>


 

   
    <Definition/>
    
    <Synonyms/>
   
    <Antonyms/>
    <CoAdj/>
    <CoNount/>
    
</div>
<style> 
    #containerLookUp{
        position: absolute;
        height: 30vh;
    width: 50vh;
    border: 0;
    background-color: white;
    z-index: 3;
    border-radius: 1.5vh;
    box-shadow: 0 0 1vh 0vh #c1c3c2;
    overflow: hidden;
    }

    #containerType{
        background-color: #1c1c1c;
    width: 100%;
    position: absolute;
    height: 4vh;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    }

    .type{
        position: relative;
    width: 5vh;
    height: 2.5vh;
    background-color: transparent;
    color: #eeeeee;
    border-radius: 0.6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    margin-left: 1vh;
    font-weight: bold;
    font-family: monospace;
    border: 0;
    }
   .type:hover{
    background-color:#eeeeee;
    color:#1d1d1d;
   }
    
</style>