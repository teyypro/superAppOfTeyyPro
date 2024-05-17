<script>
    export let content
    export let sort 
    import {finalanswerTF, testAns} from '../store'
    import FinalAns from './FinalAns.svelte'
    import { slide } from 'svelte/transition'
</script>
<div class= 'answerCon' in:slide={{duration:500}}>
<div class = 'topic'>
<p>{sort}</p>
<input class = 'answer'>
</div>
{#if $finalanswerTF }
<FinalAns finalcontent = {content} color = {$testAns[sort-1]}/>
{/if}
</div>

<style>
.topic{
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
}
        .answer{
            border: 0.1vh solid #eeeeee;
    border-radius: 1vh;
    height: 4vh;
    background-color: transparent;
    margin-block: 1vh;
    font-size: 2.5vh;
    position: relative;
    padding-inline: 1vh;
    margin-right: 2vh;
    flex-grow: 1;
    color: #535353;
    transition: 0.2s ease-in-out;
    }

    .answer:hover{
        scale: 1.05;
}

.answer:focus{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

}
    .answerCon{
        display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    }

    p{
        position: relative;
    background-color: #eeeeee;
    height: 4vh;
    border: 0;
    border-radius: 1vh;
    color: #1d1d1d;
    text-align: center;
    width: 6vh;
    flex-shrink: 1;
    font-weight: bold;
    line-height: 4vh;
    font-size: 2vh;
    margin: 2vh;
    font-family: monospace;
    }
    p:hover{
        scale: 0.9;
    }
</style>