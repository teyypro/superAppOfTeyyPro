<script>
  import { TFedit } from "./store";


</script>

<button id = 'edit' on:click ={()=>{$TFedit=true}}>
    <span class="material-symbols-outlined">
        tune
        </span>
</button>

<style>
   

    button{
        margin-right: 1.5vh;
        position: relative;
    display: flex;
    width: max-content;
    transition:1s;
    color: #535353;
    aspect-ratio: 1;
    background-color: transparent;
    border-radius: 1.6vh;
    align-items: center;
    justify-content: center;
    }
    span{
        font-size: 3vh;
    }

    button:hover{
        font:black;
        cursor: pointer;
    }
</style>