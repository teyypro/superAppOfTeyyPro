<script>
       
    import {  tab,  isOning, nameTF, onTab} from "../store.js"
  
    import Tab from "../Tab/Tab.svelte";

    import New from "../Tab/New.svelte";

    import { slide } from 'svelte/transition'

</script>

<button id ='backgen' on:click ={()=>{$nameTF = true}}></button>
<div id="num" in:slide={{duration:500}} out:slide = {{duration:200}}>
    <div id = 'numten'>
        <h1>TASK LIST</h1>
        <New/>
    </div>
    <div id = 'numnine'>
    {#each $tab as item,i}
    {#if $isOning[i]} 
        <Tab numtab = {item} pagenum = {i+1}></Tab>
       
     {/if} 
    {/each}
</div>

    
</div>



<style>
    #numnine{
        position: relative;
    height: 100%;
    width: 90%;
    padding-inline: 7%;
    overflow: hidden;
    overflow-y: auto;
    }
    #numnine::-webkit-scrollbar {
        width: 1.5vh;
    border-radius: 0.5vh;
    background-color: transparent;
}

#numnine::-webkit-scrollbar-thumb {
    background-color: #535353;
    border-radius: 1vh;
    cursor: pointer;
}
    #numten{
        position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 90%;
    justify-content: space-around;
    border-bottom: 1px solid #eeeeee;
    align-items: center;
    }
    h1{
        color: black;
    font-size: 3vh;
    }
#backgen{
    border: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 98;
}

#num{
    width: 46vh;
    position: fixed;
    top: 38vh;
    bottom: 1vh;
    display: flex;
    flex-direction: column;
    left: 1vh;
    align-items: center;
 
    padding-inline: 1vh;
    z-index: 99;
    background: #ffffff;
    border-radius: 2vh;
    border: 1px solid #eeeeee;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}
</style>