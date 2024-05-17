<script>
      let ListVoca = JSON.parse(localStorage.getItem('vocabulary'));
      import SaveVocaBut from "./SaveVocaBut.svelte";
</script>
<div id = 'conListDay'>
    {#each ListVoca as items,i}
        <SaveVocaBut date = {items.day} sort = {i}></SaveVocaBut>
    {/each}
</div>

<style>
 
#conListDay{
    position: absolute;
    height: 91vh;
    display: flex;
    background-color: #fefefe;
    flex-direction: column;
    justify-content: flex-start;
    width: 17vw;
    align-items: center;
    bottom: 2vh;
    right: 2vh;
    border: 0.1vh solid #535353;
    border-radius: 1vh;
}

#conListDay:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition:0.5s;
}
</style>