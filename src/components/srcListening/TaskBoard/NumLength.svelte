<div class ='tile'>Number</div>
    <input type = 'number' class = 'in' id = 'numword'>

 <div class ='tile'>Length</div>
<input type = 'number' class = 'in' id = 'lenword'>

<style>
    .tile{
        font-size: 3vh;
    color: #535353;
    font-family: monospace;
    margin-right: 1vh;
    font-weight: bold;
    }
    .in{
        position: relative;
    height: 4.5vh;
    border-radius: 1vh;
    padding-inline: 1vh;
    background-color: #eeeeee;
    width: 13%;
    right: 1vh;
    font-size: 4vh;
    color: #535353;
    font-family: monospace;
    transition: 0.2s;
    }

    .in:hover{
        position: relative;
    height: 3.5vh;
    border-radius: 1vh;
    padding-inline: 1vh;
    background-color: #eeeeee;
    width: 13%;
    right: 1vh;
    color: #1d1d1d;
  
    font-size: 3vh;
    font-family: monospace;
    transition: 0.2s;
    }

    .in:focus{
        background-color: #535353;
        color: #fefefe;
        border:0;
        transition: 0.2s;
    }
</style>