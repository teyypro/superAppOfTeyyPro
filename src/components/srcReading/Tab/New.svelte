<script>
  import { tab, onTab, step, typesFile, preventReloadFile, taskbar, isOning, imageList, nameTF } from "../store.js";
function increasePage() {
imageList.update((value)=>{
return []
})
step.update((value)=>{
const newstep = [...value]
newstep.push("")
return newstep;
})
tab.update((currentTab) => {
const newTab = [...currentTab];
const s = "draft_" + (newTab.length + 1);
$onTab = newTab.length + 1;
console.log($onTab)
newTab.push(s);
return newTab;
});

typesFile.update((value)=>{
const newFile = [...value]
newFile.push("no")
$taskbar = "no"

return newFile
})

isOning.update((value)=>{
let prev = [...value]
prev.push(true)
return prev
})

preventReloadFile.update((value)=>{
const up = [...value]
up.push(false)
return up
})
}
</script>

<div id = 'containcrexit'>
<button  id = 'create' on:click={increasePage}>
<span style="
color: #eeeeee;
" class="material-symbols-outlined">
add_circle
</span></button>
<button id = 'exit'  on:click = {()=>{$nameTF=true}}><span class="material-symbols-outlined">
expand_more
</span></button>
</div>

<style>
span{
font-size: 3vh;
}
#containcrexit{
position: relative;
display: flex;
flex-grow: 1;
flex-wrap: nowrap;
flex-direction: row;
justify-content: flex-end;
}
#create{
position: relative;
margin-right: 3vh;
height: 4vh;
aspect-ratio: 2;
border-radius: 1vh;
font-size: 3vh;
background-color: #535353;
display: flex;
justify-content: center;
align-items: center;
}
#create:hover{
scale:1.1;
transition: 0.2s;
}
#create:active{
scale:0.9;
transition: 0.2s;
}
#exit{
position: relative;
background-color: transparent;
font-size: 1.5vh;
display: flex;
justify-content: center;
align-items: center;
}
  
#exit:hover{
background-color: #eeeeee;
border-radius: 2vh;
}
</style>