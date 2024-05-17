<script>
  import { theme } from "./store";
    function Toggle(){
        $theme=!$theme
    }
</script>
<button id ='toggle' on:click = {()=>{Toggle()}}>
    {#if $theme}
    <span class="material-symbols-outlined">
        light_mode
        </span>
    {:else}
    <span class="material-symbols-outlined">
        dark_mode
        </span>
    {/if}
</button>

<style>
    button{
    
        cursor: pointer;
        position: relative;
    margin: 0;
    padding: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5vh;
    }

    span{
        font-size: 3vh;
        color:#535353;
    }
</style>