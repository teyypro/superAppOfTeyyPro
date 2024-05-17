<script>
    import { onMount } from "svelte";
    import { AnsList, CusList } from "../store";
    export let words,means,sort
  let finalresult
    onMount(()=>{
        
//algorith for pick words
    //answer
    AnsList.update((value)=>{
        
        return [...value,words]
    })

    console.log("valueeeee",$AnsList)

    let r = document.createElement('input')
    r.style.cssText = ` background-color: transparent;
    width: 100%;
    font-size: 6vh;
    font-weight: bold;
    padding: 2vh;
    color: #535353;
    text-align: center;`
    r.id = 'inputMixs'+`${sort}`
    r.maxLenght = words.length
    r.setAttribute('autocomplete','off')
    r.setAttribute('spellcheck','false')
    //finalresult = `${r.outerHTML} (${parts}) ${means}`
   
    
    
    document.getElementById('furword'+`${sort}`).innerHTML = means
 
    document.getElementById('furmean'+`${sort}`).innerHTML = r.outerHTML

    }


    
   
    )    
        
    let theme 
   let fontTheme
     function getColorByDivision(n) {
        console.log(n) 
        switch(n % 4) {
        case 1:
            theme = "#d2e3fc";
            fontTheme = "#174ae6" // Cam
            break;
        case 2:
            theme = "#fad2cf";
            fontTheme = "#a50e0e" // Vàng
            break;
        case 3:
            theme = "#feefc3";
            fontTheme = "#e37400" // Xanh
            break;
        case 0:
            theme = "#ceead6";
            fontTheme = "#0d652d" // Đỏ
            break;
    }
    
} 
getColorByDivision(sort+1)
</script>
<div class = 'containMixsBoard'>
    <div class = 'titleQues' id = {"QuesWord"+`${sort}`} style="background-color: {theme};">
        <div class = 'containfu' id = {'furword'+`${sort}`} style="color: {fontTheme};"></div>
        
        <div class = 'containfuture' id = {'furmean'+`${sort}`}></div>
    </div>

</div>

<style>
     .containfu{
        width: 100%;
    height: max-content;
    display: flex;
    padding: 2vh;
    flex-direction: row;
    line-height: 8vh;
    line-break: auto;
    margin: 1vh;
    color: #535353;
    font-size: 6vh;
    word-wrap: break-word;
    white-space: pre-line;
    justify-content: center;
    text-align: center;
    }
.containfuture{
    width: 94%;
    height: max-content;
    display: flex;
    flex-direction: row;
    line-height: 8vh;
    border-radius: 2vh;
    line-break: auto;
    margin-block: 2vh;
    font-size: 6vh;
    word-wrap: break-word;
    white-space: pre-line;
    justify-content: center;
    text-align: center;
    background-color: #ffffff;
    }
    .containMixsBoard{
        position: relative;
    width: 100vw;
    height: 100%;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    }

    .titleQues{
        position: absolute;
    top: 50%;
    border-radius: 6vh;
    transform: translate(0, -50%);
    height: max-content;
    width: 140vh;
    padding-block: 2vh;
    font-size: 6vh;
    font-family: monospace;
    font-weight: bold;
    display: flex;
    line-break: auto;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition:0.2s;
}
.titleQues:hover{
    transition:0.3s;
    scale:1.1;
}
    


 
</style>
    
      
  
  
   