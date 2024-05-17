<script>
  import EditButton from "../EditButton.svelte";
import ShowOr from "./ShowOr.svelte";
import { ExtractContent, LeftContent, MiddleContent, RightContent, StopCur, TFedit, TFtool, prevLeft, prevRight} from '../store.js'
  import Toggle from "../Toggle.svelte";
    
    function TrackRepeative(){
        $TFtool = false
        $StopCur = false
        let A = $ExtractContent
        let n = A.length-1
        // let evenOdd = true // the odd numbers - false: the even numbers
        console.log(A)

        //calculating time deláys
        let selectedWPM = parseInt(document.getElementById('speedSelect').value);
        let delayTime = Math.round(60000 / selectedWPM);
        let delayDot = Math.round(delayTime*2);
        let delaySemi = Math.round(delayTime*1.8);
        let delaySuch = Math.round(delayTime*1.6);

        function categorizeUpdate(left,middle,right){
            console.log(left +"--"+ middle +"---"+ right)
            //extract the main key
            let keyPlace = parseInt(middle.match(/[a-zA-Z0-9]/g)?middle.match(/[a-zA-Z0-9]/g).length/2-1:0)

            $LeftContent = left +" "+'\u200B'
            $prevLeft = middle.substring(0,keyPlace)
            
            $MiddleContent = middle.substring(keyPlace,keyPlace+1)

            $RightContent = '\u200B' + " " + right  
            $prevRight = middle.substring(keyPlace+1,middle.length)
        }

        DisplayRecursion(0) // Initialize

        function DisplayRecursion(i){
            let stopStart = $StopCur
            console.log(stopStart,"StopStaert")
            if (i==0){
                categorizeUpdate("",A[0],A[1]+" "+A[2]+" "+A[3])
            } else if (i==1){
                categorizeUpdate(A[0],A[1],A[2]+" "+A[3])
            }   else
            if (i == n-2){
            categorizeUpdate(A[i-2]+" "+A[i-1],A[i],A[i+1]+" "+A[i+2])
        } else 
        if (i == n-1){
            categorizeUpdate(A[i-2]+" "+A[i-1],A[i],A[i+1])
        } else 
        if (i == n){
            categorizeUpdate(A[i-3]+" "+A[i-2]+" "+A[i-1],A[i],"")
        }else
            
            if (i<n-2){
                // switch (evenOdd) {
                //     case true :
                        // categorizeUpdate(A[i-2]+" "+A[i-1],A[i],A[i+1]+" "+A[i+2])
                        // evenOdd =!evenOdd
                        // break;
                    // case false:
                         categorizeUpdate(A[i-2]+" "+A[i-1],A[i],A[i+1]+" "+A[i+2]+" "+A[i+3])
                    //     evenOdd =!evenOdd
                    //     break;
                // }
            } 


        
        //recursion
        if ((i<=n) && (stopStart==false)) {
            console.log($StopCur,"------------")
            let point = A[i].substring(A[i].length-1,A[i].length)
            if ( point == "."){
                setTimeout(()=>{
                DisplayRecursion(i+1)
            },delayDot)
            } else
            if ( point == ","){
                setTimeout(()=>{
                DisplayRecursion(i+1)
            },delaySemi)
            } else
            if ( point == ":"){
                setTimeout(()=>{
                DisplayRecursion(i+1)
            },delaySuch)
            } else {
            setTimeout(()=>{
                DisplayRecursion(i+1)
            },delayTime)
        }
        } else {
           // $StopCur = true
            $TFtool = true
            let middle = $ExtractContent[0]
        let keyPlace = parseInt(middle.length/2-1)

        $LeftContent = ""
        $prevLeft = middle.substring(0,keyPlace)
        $MiddleContent = middle.substring(keyPlace,keyPlace+1)
        $RightContent =  '\u200B'+ " " + $ExtractContent[1]+" "+$ExtractContent[2]+" "+$ExtractContent[3]
        $prevRight = middle.substring(keyPlace+1,middle.length)
        }
    }

}
</script>
<div id="ContainControl"  style = "top:{$TFtool ? "2vh" :"-50%" }">
    <select id="speedSelect">
        <optgroup label="Slow">
          <option value="80">80 WPM</option>
          <option value="100">100 WPM</option>
          <option value="120">120 WPM</option>
        </optgroup>
        <optgroup label="Medium">
          <option value="150">150 WPM</option>
          <option value="180">180 WPM</option>
          <option value="200">200 WPM</option>
        </optgroup>
        <optgroup label="Fast">
          <option value="250">250 WPM</option>
          <option value="300">300 WPM</option>
          <option value="350">350 WPM</option>
        </optgroup>
        <optgroup label="Super Fast">
            <option value="400">400 WPM</option>
            <option value="450">450 WPM</option>
            <option value="500">500 WPM</option>
          </optgroup>
      </select>
      <ShowOr/>

      <EditButton/>
      
      <Toggle/>
      
      <button id = "process" on:click = {()=>{TrackRepeative()}}><span class="material-symbols-outlined">
        expand_less
        </span></button>
</div>

<style>
    #ContainControl{
        transition:1s;
        position: absolute;
    top: 2vh;
    left: 50%;
    border-radius: 2.3vh;
    display: flex;
    background-color: #F0F4F9;
    height: 6vh;
    transform: translate(-50%);
    width: max-content;
    align-items: center;
    justify-content: space-around;
    padding-inline: 1vh;

    }

    #speedSelect{
        position: relative;
    height: 66%;
    width: 14vh;
    font-size: 2vh;
    margin-left: 1vh;
    margin-right: 1.5vh;
    background: transparent;
    }

    #process{
        position: relative;
    border-radius: 1.5vh;
    background-color: transparent;
    color: #535353;
    border: 1px solid #9b9b9b;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 2;
    height: 4vh;
    }
    #process:hover{
        cursor: pointer;
    
       background-color:#1d1d1d;
       color:#eeeeee;
 
        opacity: 0.9;
    }
    span{
        font-size: 4vh;
    }
</style>
