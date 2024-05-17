<script>
    import { dictionaryDS } from "../store.js"
    import { editBoard } from "../store.js";

function Edit(){
    $editBoard = true

}




    function Font(){
     
    document.getElementById('textarea').style.fontFamily = document.getElementById('font').value

    }

    function Size(){
     
        document.getElementById('textarea').style.fontSize =document.getElementById("size").value + 'vh'
 
     }

   


     function Dictest(){
        $dictionaryDS =!$dictionaryDS
    }
</script>

<div class = "container">
    <div class = 'group1'>
    <select id = "font" on:change ={Font}>
        <option value ="cursive">cursive</option>
        <option value = "fantasy">fantasy</option>
        <option value = "serif">serif</option>
        <option value = "monospace">monospace</option>
        <option value = '"Times New Roman"'>Times New Roman</option>
    </select>

    <select id = "size" on:change ={Size}>
        <option value ="1">1</option>
        <option value = "2">2</option>
        <option value = "2.5">2.5</option>
        <option value = "3">3</option>
        <option value = "3.5">3.5</option>
        <option value = "4">4</option>
        <option value = "4.5">4.5</option>
    </select>
    
    <button id = 'enterText' on:click = {Edit}><span class="material-symbols-outlined">
        edit_square
        </span>edit</button>
</div>

      
        <button id = 'dic' on:click ={Dictest} class = 'extrabut'><span class="material-symbols-outlined">
            dictionary
            </span>dictionary</button>
      
    

</div>
    

<style>
span{
        padding: 0;
    margin-right: 1vh;
    font-size: 2.5vh;
}
button{
        background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    color: #535353;
    transition: 0.1s;
    height: max-content;
    display: flex;
    align-items: center;
    width: max-content;
    padding-inline: 1vh;
    margin-inline: 0.5vw;
    border-radius: 0.5vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    }

    button:hover{
        padding-block: 0.3vh;
        background-color: #eeeeee;
        color:#1d1d1d;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
    
    #dic{
        position: absolute;
  
    right: 1vh;
    }
  
 
      .container{
        position: absolute;
    right: 0;
    height: 2vh;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    }

    .group1{
        position: absolute;
    left: 1vh;
    display: flex;
    align-items: center;
    width: max-content;
    height: 2vh;
    justify-content: space-around;
    }

 
   

    #font{
        width: fit-content;
    border-radius: 0.5vh;
    height: 3.2vh;
    font-size: 2vh;
    border: 0;
    background-color: transparent;
    color: #535353;
    padding-inline: 1vh;
    font-family: monospace;
    font-weight: bold;
    }

    #font:hover{
        background-color: #eeeeee;
        color:#1d1d1d;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
 #size:hover{
    background-color: #eeeeee;
        color:#1d1d1d;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
    #size{
        width: max-content;
    border-radius: 0.5vh;
    height: max-content;
    height: 3.2vh;
    border: 0;
    background-color: transparent;
    color: #535353;
    margin-inline: 1vh;
    padding-inline: 1vh;
    font-family: monospace;
    }





   


   

    
</style>