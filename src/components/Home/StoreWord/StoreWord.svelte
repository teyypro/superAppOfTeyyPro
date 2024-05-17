<script>
  
    import SaveVocaBut from "./SaveVocaBut.svelte";
    import SaveVocaBoard from "./SaveVocaBoard.svelte"
  import { stepDay } from "../store";
    $stepDay = 0
    let ListVoca = [];
    if (typeof localStorage !== 'undefined') {
    ListVoca = JSON.parse(localStorage.getItem('vocabulary')) || [];
  }
</script>
<div id = 'containall'>
<div id = 'conListDay'>
  {#each ListVoca as items,i}
      <SaveVocaBut date = {items.day} sort = {i}></SaveVocaBut>
  {/each}
</div>
{#key $stepDay}
<SaveVocaBoard/>
{/key}
</div>

<style>
#containall{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    background-color: #fefefe;
    align-items: center;
}
#conListDay{
    position: relative;
    height: 92vh;
    display: flex;
    background-color: #fefefe;
    flex-direction: column;
    width: max-content;
    align-items: center;
    padding: 2vh;
    right: 3vh;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 2vh;
    overflow: auto;
}
#conListDay::-webkit-scrollbar {
    width: 10px;  /* Set width of the entire scrollbar */
}

#conListDay::-webkit-scrollbar-thumb {
    background-color: #ccc;  /* Set color of the scroll thumb */
    border-radius: 10px;     /* Set rounded corners for the thumb */
}



#conListDay:hover{
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  transition:0.5s;
}
</style>