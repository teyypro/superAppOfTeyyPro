<script>
     import { slide } from 'svelte/transition'
  import { ResDater, UpdateWord, dictionaryDS } from '../store';
  $dictionaryDS = false
        
  setTimeout(()=>{
    $UpdateWord = false
    $ResDater = false
  },500)
     function Working(){
        $dictionaryDS = true
        $UpdateWord = true
        $ResDater = true
     }
</script>
<button on:click={()=>{Working()}} in:slide={{duration:500}}><span class="material-symbols-outlined">token
    </span>advance</button>

<style>
    button{
        position: relative;
    height: 4vh;
    margin-top: 1vh;
    border-radius: 1vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 14vh;
    font-size: 2vh;
    border: 1px solid #eeeeee;
    color: #535353;
    background-color: transparent;
    font-family: sans-serif;
    font-weight: bold;
    padding-block: 0.5vh;
}
button:hover{
    transition: 0.2s;
    border: 1px solid white;
    color: #1d1d;
    cursor: pointer;
}
button:active{
    scale:0.95;
}
    span{
        padding: 0;
    font-size: 3vh;
    }
</style>