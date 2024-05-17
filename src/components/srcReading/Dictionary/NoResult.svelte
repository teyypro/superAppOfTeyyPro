<script>
 import { slide } from 'svelte/transition'
</script>
<div id = 'noresult' in:slide={{duration:300}}>Apologies, no data is available✌️</div>


<style>
    #noresult{
        position: absolute;
    right: 0;
    left: 0;
    bottom: 77vh;
    display: flex;
    font-weight: bold;
    height: 6vh;
    background-color: #fad2cf;
    color: #ea4335;
    font-size: 2.5vh;
    font-family: sans-serif;
    border: 0;
    border-radius: 1.5vh;
    text-align: left;
    padding-inline: 2vh;
    line-height: 5vh;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    align-items: center;
    justify-content: center;
    }
</style>