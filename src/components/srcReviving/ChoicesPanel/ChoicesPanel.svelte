<script>
  import { AnsList, LisEnter, MixRes, choice, choiceOpt } from "../store";
  import { scale} from 'svelte/transition'

function Chars(){
    $choice = 'chars'
    $choiceOpt = 'chars'
}
function Words(){
    $choice = 'words'
    $choiceOpt = 'words'
}



function Means(){
    $choice = 'means'
    $choiceOpt = 'means'
}

function Mix(){
    $choice = 'mix'
    $choiceOpt = 'mix'
    $MixRes = []
    MixRes.update((value)=>{
        for (let i = 0; i<$LisEnter.length;i++){
            let r = Math.floor(Math.random() * (3))
    
            value.push(r)
        }
        console.log(value)
        return value
    })
    $AnsList=[]
}
</script>

<div id ='choicespanel' transition:scale={{duration:500}}>
    <div id = 'containeChoice'>
        <div id="label"><span class="material-symbols-outlined">
            style
            </span></div>
        <div id="choice">
            <button class = 'choices' on:click = {Chars}>chars</button>
            <button class = 'choices' on:click = {Words}>words/clauses</button>
            <button class = 'choices' on:click = {Means}>meanings</button>
            <button class = 'choices' on:click = {Mix}>mix</button>
        </div>
    </div>
    
</div>


<style>
    span{
        font-size: 12vh;
    color: #535353;
    }
    #label{
        font-size: 4vh;
    top: 5vh;
    position: relative;
    }
    #choice{
        position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 5vh;
    }
    #containeChoice{
    position: relative;
    width: max-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 7vh;
    z-index: 1;
    height: 67vh;
    aspect-ratio: 5 / 6;
    justify-content: space-between;
    align-content: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}
#containeChoice:hover{
    transition:0.5s;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
    #choicespanel{
        position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    }

    .choices{
        height: 6vh;
    width: 40vh;
    padding-inline: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vh;
    font-family: monospace;
    font-weight: bold;
    border-radius: 1.5vh;
    margin: 1vh;
    background-color: transparent;
    color: #535353;

    }

    .choices:hover{
        transition: 0.2s;
        cursor: pointer;
        background-color: #1d1d1d;
        color:#eeeeee;
    }
</style>