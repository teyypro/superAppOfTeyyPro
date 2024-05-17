<script>
  import { onSortSaveVoca } from "../store";
    import { onMount } from 'svelte'
    let voca =[]
    onMount(()=>{
        voca = JSON.parse(localStorage.getItem('vocabulary'))[$onSortSaveVoca].content
    })
    
</script>
<div id = 'ContainerSaveVoca'>
    <div id = 'containTitle'>
        <div class = 'taitle'>words/clauses</div>
        <div class = 'taitle'>definitions/meanings</div>
    </div>
    <div id ='containContent'>
        <div id = 'containSave'>
            {#each voca as item}
                <div class = 'containWord'>
                    <div class = 'woclau'>{item.word}</div>
                    <div class = 'soclau'>{item.definition}</div>
                </div>
            {/each}
        </div>
    </div>
</div>


<style>
    .woclau{
        position: relative;
        width:50%;
        font-size: 2vh;
        font-family: monospace;
        font-weight: bold;
    }

    .soclau{
        position: relative;
        width:50%;
        font-size: 2vh;
        font-family: monospace;
    }
    .containWord{
        display: flex;
    width: 100%;
    height: max-content;
    padding-block: 3vh;
    border-bottom: 0.1vh solid #eeeeee;
    }
    #ContainerSaveVoca{
        position: relative;
        flex-grow:1;
    }

    #containTitle{
        position: absolute;
    top: 12vh;
    width: 80%;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: space-around;
    border-bottom: 0.1vh solid #eeeeee;
    }

    .taitle{
        width: 50%;
    font-size: 4vh;
    font-weight: bold;
    font-family: math;
    }

    #containContent{
        position: absolute;
    top: 19vh;
    bottom: 1vh;
    width: 80%;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: space-around;
    border-bottom: 0.1vh solid #eeeeee;
    border-radius: 1vh;
    overflow: hidden;
    }

    #containSave{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        overflow: auto;
    }
</style>