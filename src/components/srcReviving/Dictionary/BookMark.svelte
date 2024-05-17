<script>
export let check = true
export let definition
export let words
function Saving(definition,words){
        check = false
      let vocData = JSON.parse(localStorage.getItem('vocabulary'));
      let date = `${new Date().getUTCDate()} - ${new Date().getUTCMonth()+1} - ${new Date().getUTCFullYear()}`
      if (vocData.length === 0 || vocData[0].day !== date) {
  let newDay = {};
  newDay["day"] = date;
  newDay["content"] = [];
  vocData.unshift(newDay);
}

       let con = {}
      con["word"] = words
      con["definition"] = definition
      vocData[0].content.push(con)

    localStorage.setItem('vocabulary', JSON.stringify(vocData));

      
   

    }
</script>


{#if check}  
      <button class = 'savevo' on:click = {()=>{Saving(definition,words)}}><span class="material-symbols-outlined">
          bookmark
          </span></button>
      {:else}
      <button class = 'savevoChecked' ><span class="material-symbols-outlined">
        bookmark_added
        </span></button>
{/if}  

<style>
      span{
    font-size:3.5vh;
  }

.savevoChecked{
  position: absolute;
    right: 0;
    top: 0.2vh;
    height: max-content;
    padding: 0;
    border: 0;
    border-radius: 0.7vh;
    color: #1d2a57;
    background-color: transparent;
    font-weight: bold;
    font-size: 1.5vh;
}
.savevo{
  position: absolute;
    right: 0;
    top: 0.2vh;
    height: max-content;
    padding: 0;
    border: 0;
    border-radius: 0.7vh;
    color: #1d2a57;
    background-color: transparent;
    font-weight: bold;
    font-size: 1.5vh;
  }

  .savevo:hover{
   scale:0.9;
    color:#1d2956;
  }
 
</style>