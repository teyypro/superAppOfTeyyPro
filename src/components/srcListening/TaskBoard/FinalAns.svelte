<script>
    export let finalcontent
    export let color
    import { slide } from 'svelte/transition'
</script>
<div in:slide={{duration:700}} class = 'finalanswer' style = "color:{color}" >{finalcontent}</div>

<style>
    
    .finalanswer{
        width: 100%;
    margin-left: 4vh;
    margin-right: 0vh;
    height: max-content;
    right: 0;
    position: relative;
    font-size: 2.5vh;
    font-family: monospace;
    line-break: anywhere;
    }
</style>