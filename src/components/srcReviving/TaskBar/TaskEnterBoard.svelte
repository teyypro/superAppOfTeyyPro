<script>
    import { AnsList, CusList, LisEnter, choice, resMean, resWord, reswholekey} from "../store";

function Add(){

 LisEnter.update(value=>{
     return [...value,`${(value.length+1)}`]
 })
 console.log($LisEnter)

 resMean.update(value=>{
     value.push('')
     return value
 })

 resWord.update(value=>{
     value.push('')
     return value
 })
}

function Remove(){
 LisEnter.update(value=>{ 
     value.pop()
     return value
 })
 resMean.update(value=>{
     value.pop()
     return value
 })

 resWord.update(value=>{
     value.pop()
     return value
 })

}

function next(){
   let uiWord = Array.from(document.getElementsByClassName('words'))
       let uiPart = Array.from(document.getElementsByClassName('parts'))
       let uiMean = Array.from(document.getElementsByClassName('means'))

       uiWord.forEach((element,i) => {
           uiWord[i] = element.value
       })
       uiPart.forEach((element,i) => {
           uiPart[i] = element.value
       })
       uiMean.forEach((element,i) => {
           uiMean[i] = element.value
       })

       $resWord = uiWord
  
       $resMean = uiMean
       
       
       $choice = 'choices'
       // reset Answer cuar customer 
       CusList.update(()=>{ return new Array($LisEnter.length).fill("")}) 
   
       //reset answer of chuong trinh de push khi add
       $AnsList = new Array($LisEnter.length) 
       $reswholekey = []
}
</script>
<button id ='add' on:click = {Add}>add</button>
<button id ='remove' on:click = {Remove}>remove</button>
<button id ='next' on:click = {next}>next</button>

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