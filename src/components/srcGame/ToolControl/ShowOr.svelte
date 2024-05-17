<script>
  import { displayScript } from "../store";

    function Toggle(){
        $displayScript=!$displayScript
    }
</script>

<button id = 'show' on:click ={()=>{Toggle()}} >{$displayScript?"displaying":"hiding"}</button>


<style>
 
    #show {
        position: relative;
    width: max-content;
    height: 60%;
    display: flex;
    align-items: center;
    padding-inline: 2vh;
    border-radius: 1vh;
    background-color: #fefefe;
    justify-content: center;
    font-size: 2vh;
    margin-right: 1.5vh;
    }

    #show:hover{
        cursor: pointer;
       
        opacity: 0.9;
    }
</style>