<script>
    import { moreless } from "../store.js"
    import { scale } from 'svelte/transition'
    function Bold(){
        document.execCommand("bold",false,null)
    }

    function Italic(){
        document.execCommand("italic",false,null)
    }

    function Underline(){
        document.execCommand("underline",false,null)
    }



    function Font(){
     
    document.execCommand("fontName",false,document.getElementById("font").value)

    }

    function Size(){
     
     document.execCommand("fontSize",false,document.getElementById("size").value)
 
     }

     function ChangeFontColor(){
        let color = document.getElementById('fontColor').value
        document.execCommand('foreColor', false, color);
     }
     function updatecolor(){
        
        let color = document.getElementById('fontColor').value
        document.getElementById('containFontColor').style.backgroundColor = color
     }
</script>

<div class = "container" in:scale={{duration:500}}>
    <div class = 'group1'>
        <select id="font" on:change={()=>{Font()}}>
            <option value="cursive">Cursive</option>
            <option value="fantasy">Fantasy</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
            <option value="'Times New Roman'">Times New Roman</option>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
            <option value="Palatino">Palatino</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Impact">Impact</option>
            <option value="Lucida Console">Lucida Console</option>
        </select>
        

    <select id = "size" on:change ={Size}>
        <option value ="1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
        <option value = "6">6</option>
        <option value = "7">7</option>
    </select>
    
   
    </div>

    <div class = "group2">
    <button id = "bold" on:click ={Bold}><span class="material-symbols-outlined">
        format_bold
        </span>bold</button>
    <button id = "italic" on:click ={Italic}><span class="material-symbols-outlined">
        format_italic
        </span>italic</button>
    <button id = "underline" on:click ={Underline}><span class="material-symbols-outlined">
        format_underlined
        </span>underline</button>
    <button id = 'colorize' on:click ={ChangeFontColor}><span class="material-symbols-outlined">
        format_color_text
        </span>colorize</button>
        <div id = 'containFontColor'>
            <input type='color' id = 'fontColor' on:change = {updatecolor} >
        </div>
    

     

    </div>

    <div class = "group3">
       
     <button id = "more" on:click = {()=>{$moreless = "less"}}><span class="material-symbols-outlined">
        more_horiz
        </span></button>
        </div>
    

</div>
    

<style>
    #more{
        padding-left:2vh;
    }
    span{
        padding: 0;
    margin-right: 1vh;
    font-size: 2.5vh;
}
    button{
        cursor: pointer;
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
    #containFontColor{
        height: 2vh;
    width: 4vh;
    background-color: black;
    border-radius: 0.5vh;
    display: flex;
    margin-inline: 1vh;
    }
    #fontColor{
        border: 0;
    padding: 0;
    margin: 0;
    position: relative;
    opacity: 0;
    width: 100%;
    height: 100%;
   
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

    .group2{
        display: flex;
    /* width: 16%; */
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-inline: 2vw;
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

    

    



   

  

    .group3{
        right: 0;
    position: absolute;
    border-radius: 0.5vh;
    width: max-content;
    display: flex;
    flex-wrap: nowrap;
    }


    
</style>