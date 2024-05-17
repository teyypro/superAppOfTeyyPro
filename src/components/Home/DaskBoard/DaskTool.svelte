<script>
 

    function Reading(){
        window.open('http://localhost:1805/#/reading', '_blank')
    }
    function Listening(){
        window.open('http://localhost:1805/#/listening', '_blank')
    }
    function Reviving(){
        window.open('http://localhost:1805/#/reviving', '_blank')
    }
    function Game(){
        window.open('http://localhost:1805/#/game', '_blank')
    }
</script>

<div id = 'containDaskTool'>
    <div class = 'listTool' id ='reading'>
        <div id = 'ContentReading'>
            <div class = 'Wtitletool'>Reading Tool</div>
            <div class = 'Wexplaintool'>a versatile application designed to enhance the reading experience for users</div>
       
        <button class = 'Wtriggerbut' on:click = {Reading}>Enter</button>
    </div> </div>
    <div class = 'listTool' id ='listening'>
            <div id = 'ContentListening'>
                <div class = 'Btitletool'>Listening Tool</div>
                <div class = 'Bexplaintool'>an innovative application that aims to optimize the auditory learning experience for users</div>
                <button class = 'Btriggerbut' on:click = {Listening}>Enter</button>
            </div>
        
    </div>
    <div class = 'listTool' id ='reviving'>
        
            <div id = 'ContentReviving'>
                <div class = 'Wtitletool'>Reviving Tool</div>
                <div class = 'Wexplaintool'>an advanced application designed to facilitate language revitalization and preservation efforts</div>
                <button class = 'Wtriggerbut'  on:click = {Reviving}>Enter</button>
            </div>
        
       
    </div>
    <div class = 'listTool' id ='game'>
    
            <div id = 'ContentGame'>
                <div class = 'Btitletool'>Hooking Game</div>
                <div class = 'Bexplaintool'>a unique and intellectually stimulating word game that leverages algorithmic principles to reinforce vocabularies and academic enthusiasm</div>
                <button class = 'Btriggerbut'  on:click = {Game}>Enter</button>
            </div>
       
    </div>
</div>

<style>
    .Wtriggerbut{
        position: relative;
    height: max-content;
    font-size: 2vh;
    padding-inline: 4vh;
    padding-block: 1vh;
    border-radius: 1vh;
    margin-block: 1vh;
    font-weight: bold;
    background-color: transparent;
    color: #2a2a2a;
    border: 0.1vh solid #535353;
    }
    .Btriggerbut{
        position: relative;
    height: max-content;
    font-size: 2vh;
    padding-inline: 4vh;
    padding-block: 1vh;
    border-radius: 1vh;
    margin-block: 1vh;
    font-weight: bold;
    background-color: transparent;
    color: #eeeeee;
    border: 0.1vh solid #eeeeee;
    }
    .Wtriggerbut:hover{
        transition:0.5s;
        color: #eeeeee;
  
    background-color: #2a2a2a;
    }
    .Btriggerbut:hover{
        transition:0.5s;
        color: #2a2a2a;
    
    background-color: #eeeeee;
    }
    .Bexplaintool{
        width: 60%;
    text-align: right;
        font-size: 3vh;
        color:white;
        font-family: math;
    }
    .Wexplaintool{
        width: 60%;
        font-size: 3vh;
        color:black;
        font-family: math;
    }
    .Btitletool{
        font-size: 12vh;
    font-weight: bold;
    font-family: cursive;
    color:white;
    }
    .Wtitletool{
        font-size: 12vh;
    font-weight: bold;
    font-family: cursive;
    color:black;
    }
#ContentReading,#ContentReviving{
    position: relative;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 7%;
 
}

#ContentListening,#ContentGame{
    position: absolute;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    padding-right: 7%;
    right: 0;
}
    #containDaskTool{
        position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgb(135, 160, 95);
    overflow: auto;
    }

    .listTool{
         position: relative;
    height: 100%;
    display: flex;
    width: 100%;
    }

    #reading,#reviving{
        background-color: white;
    }

    #listening{
        background-color: #1e1e1e;
    }

  

    #game{
        background-color: #1e1e1e;
    }
</style>


