<script>
   
    import { ResDater, UpdateWord, dictionaryDS, enterText, stepDS } from "../store";

  import NoResult from "./NoResult.svelte";
  import { slide } from 'svelte/transition'
  import MainTrans from "./MainTrans.svelte";
   let rasChange
    $ResDater = false
    function change(){
        $UpdateWord = false
       $stepDS = 'defi'
       
        let text = document.getElementById('enterWord').value
        var link = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ `${text}`

        fetch(link)
        .then(res=>{
            if (res.ok){
                
                rasChange = true
                $enterText = text
                
               console.log("kkkkkkokkkkk")
            } else {
                rasChange = false
            }
        })
        .finally(()=>{
            $ResDater = rasChange
            $UpdateWord = true

        })
        
    }

    function handleKeyPress(event) {
    if (event.key === 'Enter') {
      change()//enter
    }
  }
       
       
</script>

<div id = 'containerDictionary' transition:slide={{duration:500}} style = "transform: {$dictionaryDS ? 'translate(0)' : 'translate(60vh)'}">

    <div id ='containSearch'>
    <input type = 'text' id='enterWord' spellcheck="false" autocomplete='off' on:keypress={handleKeyPress}>
    <button id = 'SearchDic' on:click = {change}>>></button>
    
</div>
    <div id ='containerDic'>
        {#if $UpdateWord && $ResDater == true}
                <MainTrans/> 
           
         {:else if $UpdateWord && $ResDater == false}
                <NoResult/>
            {/if}
   </div>
   
</div>

<style>
  

#containSearch{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6vh;
    background-color: #ffffff;
    border-radius: 1.8vh;
    padding-inline: 1vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;

}



    #containerDictionary{
        transition: 0.3s;
        position: fixed;
    right: 2vh;
    background-color: transparent;
    aspect-ratio: 9 / 16;
    bottom: 2vh;
    z-index: 4;
    top: 7vh;
    }



    input{
        position: relative;
    flex: 1;
    margin-right: 1vh;
    height: 5vh;
    border: 0;
    border-radius: 1vh;
    font-family: monospace;
    z-index: 1;
    background-color: #fefefe;
    color: #535353;
    font-size: 2.5vh;
    padding: 0;
    padding-inline: 1vh;
    font-weight: bold;
    }

    input:focus{
        outline:none;
    }

    #SearchDic{
            position: relative;
    height: 4vh;
    background-color: transparent;
    width: max-content;
    padding: 0;
    padding-inline: 2vh;
    display: flex;
    border: 0;
    align-items: center;
    border-radius: 1.5vh;
    font-size: 3vh;
    font-family: monospace;
    color: #535353;
    z-index: 1;
}

    #SearchDic:hover{
        background-color: #eeeeee;
    color: #535353;
    }
    #SearchDic:active{
        background-color: #1d1d1d;
    color: #eeeeee;;
    }
    #containerDic{
        background-color: transparent;
    position: absolute;
    width: 100%;
    height: 83vh;
    border: 0;
    top: 0;
    }
</style>