<script>
    import {  choice} from "../store";

   function Home(){
       $choice = 'enter'
   }
</script>
<button id ='add' on:click = {Home}>home</button>


<style>
    button{
        background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: #535353;
    transition: 0.1s;
    width: max-content;
        display: flex;
    align-items: center;
  
        border-radius: 0.5vh;
        font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    padding-inline:1vh;
    margin-inline:1vh;
 
    }

    button:hover{
        padding-block: 0.3vh;
        background-color: #eeeeee;
        color:#1d1d1d;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
    button:active{
        scale:0.95;
        background-color: #535353;
        color:#eeeeee;
        
    }
</style>