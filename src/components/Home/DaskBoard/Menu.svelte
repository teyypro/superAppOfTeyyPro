<script>
  import { stepDask } from "../store";
  import {onMount} from 'svelte'
  onMount(()=>{  stepDask.subscribe((value)=>{
    Array.from(document.getElementsByClassName('gesture')).forEach((value) => {
  value.style.backgroundColor = 'transparent';
  value.style.color = '#fefefe';
});
        if (value == 'home'){
            document.getElementById('home').style.backgroundColor = '#eeeeee'
            document.getElementById('home').style.color = '#1d1d1d'
        } else if (value == 'save'){
            document.getElementById('save').style.backgroundColor = '#eeeeee'
            document.getElementById('save').style.color = '#1d1d1d'
        } else if (value == 'tool'){
            document.getElementById('tool').style.backgroundColor = '#eeeeee'
            document.getElementById('tool').style.color = '#1d1d1d'
        } else if (value == 'contact'){
            document.getElementById('contact').style.backgroundColor = '#eeeeee'
            document.getElementById('contact').style.color = '#1d1d1d'
        }
    })})

    function Home(){
        $stepDask = 'home'
    }
    function Save(){
        $stepDask = 'save'
    }
    function Tool(){
        $stepDask = 'tool'
    }
</script>

<div id = 'containMenu'>
    <button class = 'gesture' id = 'home' on:click ={Home}>home</button>
    <button class = 'gesture' id = 'tool' on:click ={Tool}>tools</button>
    <button class = 'gesture' id = 'save' on:click ={Save}>words-storage</button>
    <button class = 'gesture' id = 'contact' >contact us</button>
</div>

<style>
    #containMenu {
        position: absolute;
    top: 1vh;
    left: 50%;
    transform: translate(-50%);
    background-color: black;
    border-radius: 1vh;
    z-index: 1;
    }

    .gesture{
        position: relative;
    font-size: 2vh;
    height: 3vh;
    padding-inline: 2vh;
    padding-block: 0;
    color: white;
    font-family: monospace;
    border-radius: 0.5vh;
    margin: 0.5vh;
    background-color: transparent;
    }

    .gesture:hover{
        color: black;
        background-color: white;
    }
</style>