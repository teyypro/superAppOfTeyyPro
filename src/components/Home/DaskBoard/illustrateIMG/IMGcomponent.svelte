<script>

    export let address,title,trans
    export let which = false
    function Change(e){
        if (which){
        e.target.style.cssText = `scale: 2;
    transition: 0.5s;
    transform: translate(-25%,25%);`
    } else {
         e.target.style.cssText = `  scale:2;
      transition:0.5s;  `
    } 

    }

    function Leave(e) {
    e.target.style.cssText = `position: relative; width: 100%; transition: 0.5s;`;
}
</script>

<div class = 'containback'>
    <div class =' containIMGsmall'>
        <img src = {address} alt = 'illusimgage' on:mouseover={()=>{Change(event)}} on:mouseleave={()=>{Leave(event)}} on:focus={()=>{}} >
    </div>
    
    <div class = 'describe'>
        <div class ='tilte'>{title}</div>
        <div class = 'trans'>{trans}</div>
    </div>

</div>

<style>
     .containIMGsmall{
        height: 100%;
        aspect-ratio: 16/9;
        overflow: hidden;
        border-radius:0.5vh;
        transition:0.5s;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
    .containIMGsmall{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition:0.5s;
    }
    .containback{
        width: 85%;
    margin: 2%;
    aspect-ratio: 5/1;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 2vh;
    padding: 2%;
    display: flex;
    transition: 0.5s;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    }
    .containback:hover{
        
        transition:0.5s;  
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
    img{
        position: relative;
    width: 100%;

    transition:0.5s;  
}
   

    .describe{
        position: relative;
    flex: 1;
    padding-inline: 2%;
    height: 100%;
}
.tilte{
    font-size: 4vh;
    font-weight: bold;
    font-family: monospace;
    margin-bottom: 1vh;
}

.trans{
    font-size: 2.5vh;
    font-family: monospace;
    font-weight: lighter;
}
</style>