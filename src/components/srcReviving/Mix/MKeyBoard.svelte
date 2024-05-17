<script>
  import { onMount } from "svelte";
  import { AnsList, CusList, reswholekey } from "../store";
  export let words,means,sort
  let finalresult
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
 
    onMount(()=>{
        getColorByDivision(sort+1) 
//algorith for pick key words
    let lenghtmax = words.length
    let n = Math.floor(Math.random()* Math.round(lenghtmax/2)+1) //length:2, randomize 1 to n/2 find hidding numbers
    let L = new Array(n).fill('')
    let A = new Array(lenghtmax).fill(false)
    let W = words.split('')
    
    for (let i=0; i<n;i++){
        let l = Math.floor(Math.random() * (lenghtmax-1))
        console.log("llsd",W[l])
        while (A[l] || W[l]==" "){
            console.log("llll",W[l])
            l = Math.floor(Math.random() * (lenghtmax -1));
        }
        A[l] = true
       
        
    //     W[l] = `<input style = "padding: 1vh;
    // background-color: #eee;
    // width: 5vh;
    // text-align: center;
    // border-radius: 1vh;
    // font-size: 6vh;
    // font-weight: bold;" maxlength="1" id="QuesMix${sort}input${i}">`
        W[l]= document.createElement('input')
        W[l].style.cssText = `width: 5vh;
    text-align: center;
    font-size: 6vh;
    height: 7vh;
    font-weight: bold;
    font-family: monospace;
    position: relative;
    border: 0px;
    border-bottom: 2px solid ${fontTheme};
    color:${fontTheme};
    background-color: transparent;
    margin-inline: 0;
    padding: 0;
    transition: all 0.2s ease-in 0s;
    cursor: pointer;`
        W[l].maxLength = 1
        W[l].setAttribute('spellcheck', 'false');
        W[l].setAttribute('autocomplete', 'off');
      

    }
    
   
//     W = W.map(item => {
//     if (item instanceof HTMLElement) {
//         return item.outerHTML; // Convert the input element to its HTML representation
//     } else {
//         return item; // For other elements, just return them as is
//     }
// }).join("")
    let d = 0
    let S = ''
    for (let i=0;i<W.length;i++){
        if (W[i] instanceof HTMLElement) {
            L[d]=i
            S+=words[i] // lay nd cac o input
        W[i].id = `QuesMix${sort}input${d}`
        W[i] = W[i].outerHTML;
        d++
     
    } 
    }
    AnsList.update(value=>{ //Daps Ans
        value[sort] = S
        return value
    })
    
    W = W.join('\u200B')
    console.log(W)

  
   // document.getElementById("QuesMix"+`${sort}`).innerHTML = finalresult
    document.getElementById('furword'+`${sort}`).innerHTML = W
    
    document.getElementById('furmean'+`${sort}`).innerHTML = means
    let CusAns = new Array(n).fill("")
    let whole = words.split('')
   
    for (let i=0;i<n;i++){
        
        let p = document.getElementById(`QuesMix${sort}input${i}`)
         
//        p.addEventListener("focus", function() {
//     this.style.backgroundColor = '#1d1d1d'
//     this.style.color = '#fefefe'
    
//   });
//   p.addEventListener("blur", function() {
//     this.style.backgroundColor = '#eeeeee';
//   this.style.color = '#1d1d1d';
//   });
//   p.addEventListener("mouseout", function() {
//   this.style.backgroundColor = '#eeeeee';
//   this.style.color = '#1d1d1d';
// });
//   p.addEventListener("mouseover", function() {
//     this.style.backgroundColor = '#535353'
//     this.style.color = '#eeeeee'
//   });
        p.addEventListener('input',()=>{
          
            CusAns[i] = p.value

            whole[L[i]]=p.value
            reswholekey.update((value)=>{
                value[sort] = whole.join('')
                return value
            })

            CusList.update((value)=>{
                value[sort] = CusAns.join('')
                return value
            })
            if (p.value.length ==1){
                
                if (i!=n-1){
                    console.log("d------",d)
                    document.getElementById(`QuesMix${sort}input${i+1}`).focus();
                }
            } 

        
        })
      
    
        
    } 
    }
    )    

</script>
<div class = 'containMixsBoard'>
    <div class = 'titleQues' id = {"QuesMix"+`${sort}`} style="background-color: {theme};">
    <div class = 'containfuture' id = {'furword'+`${sort}`}></div>
    
    <div class = 'containfuture' id = {'furmean'+`${sort}`}></div>
    </div>
    
</div>

<style>

    .containfuture{
        width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    line-break: auto;
    margin: 1vh;
    font-size: 6vh;
    word-wrap: break-word;
    white-space: pre-line;
    justify-content: center;
    text-align: center;
    color: #535353;
    align-items: center;
    flex-wrap: wrap;
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
    width: max-content;
    padding-block: 4vh;
    font-size: 6vh;
    max-width: 90%;
    font-family: monospace;
    font-weight: bold;
    display: flex;
    line-break: auto;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
}
.titleQues:hover{
    transition:0.3s;
    scale:1.1;
}



 
</style>