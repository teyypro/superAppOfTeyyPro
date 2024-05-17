<script>

</script>


<textarea id = 'textarea'  spellcheck="false" readonly></textarea>

<style>
  
    #textarea{
        resize: none;
    position: relative;
    background-color: #ffffff;
    height: 79vh;
    flex-grow: 1;
    top: 4vh;
    left: 4vh;
    margin-right: 8vh;
    padding: 4vh;
    border-radius: 2vh;
    overflow: auto;
    color: #1d1d1d;
    transition: 0.5s;
    cursor: pointer;
    }
    #textarea:hover{
        transition: 0.2s;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    textarea::-webkit-scrollbar {
        width: 1.5vh;
    border-radius: 0.5vh;
    background-color: transparent;
}

textarea::-webkit-scrollbar-thumb {
    background-color: #eeeeee;
    border-radius: 1vh;
    cursor: pointer;
}
</style>