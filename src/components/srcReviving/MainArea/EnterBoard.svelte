<script>
    import EnterForm from "../EnterForm/EnterForm.svelte";
  import { LisEnter, choice } from "../store";
 
</script>

<div id ='enterBoard' style = "transform:{$choice !=='enter'?"translate(0, -100%)":"translate(0, 0)"};">
    <div class = 'containTitName'>
        {#each $LisEnter as ele,i} 
        <EnterForm sort ={i}/>
    {/each}
        
    </div>
  

   
   
</div>

<style>


   

     .containTitName{
        position: relative;
    display: flex;
    width: 93%;
    height: fit-content;
    top: -1vh;
    margin-bottom: 3vh;
    justify-content: center;
    flex-wrap: wrap;
    }
    #enterBoard{
        transition:0.5s;
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        padding:3vh;
        overflow: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding-top: 8vh;
    }
</style>