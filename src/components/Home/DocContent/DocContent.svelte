<script>


import { slide,scale } from 'svelte/transition'
  import Logo from "../Logo/Logo.svelte";

 
function Scroll() {
   

// Cuộn xuống toàn bộ chiều cao của phần tử 'contentDoc' với hành vi cuộn mượt mà
document.getElementById('contentDoc').scrollBy({ top: document.getElementById('needscroll').scrollHeight*0.45, behavior: 'smooth' });
}
function openLink(url) {
        window.open(url, '_blank');
    }
  </script>
<div id ='contentDoc'>
    <div id = 'taskbar' in:scale ={{duration:1000}}>
       <Logo/>
       <button id = 'license' on:click={()=>{openLink('/license')}}>License</button>
        <button on:click = {()=>{openLink('/store')}} class="material-symbols-outlined" id = 'storelink'>
            archive
        </button>
    </div>
    <div class = 'containdoc'>
        
        
    
        <div id = 'contaidoc1part1' in:scale ={{duration:500}}>
            <div id = 'intro'><span id = "h1">Hi✌️, lots of <span id ="h">powerful</span></span><span id = "h2"><span id ="h3">tools</span> for your</span><span id ="h4">own <span id = "h5">IELTS</span> journey</span></div>
            <div id ='message'>Deploy offers a comprehensive toolkit for those burning the midnight oil to achieve their IELTS certification.👻</div>
            <button id = 'continue' on:click = {Scroll} >Should you also...<span id = "more" class="material-symbols-outlined">
                arrow_drop_down
                </span></button>
       
       
   
         </div>
      
    </div>
    <div class ='containdoc' style = 'height:max-content;' id = "needscroll">
        <div id = 'contaidoc1part2'>
            <div>
            <div id = 'premess'>Find what's in this magical tool✌️👻</div>
            <div  id = 'pdfbut' class = 'choice' >
                <span id = "icon1" class="material-symbols-outlined">
                book_5
                </span>
                <span class = 'nametool'>R&T Tool</span>
                <div class = "introduce">Providing real-time translation, comprehensive dictionary definitions, synonyms, antonyms, collocations across various formats including Text, PDFs and images for your IELTS READING and WRITING workouts.</div>
                <button on:click ={()=>{openLink('/readingwriting')}}  class = 'deploy' ><span class="material-symbols-outlined">
                    token
                    </span>deploy</button>
            </div>
            <div  id = 'listbut' class = 'choice' >
                <span id = "icon2" class="material-symbols-outlined">
                headset_mic
                </span>
                <span class = 'nametool'>GapFilling Tool</span>
                <div class = "introduce">Creating Gap-Filling exercises, which is the scariest part in LISTENING, from your audioscript. Work hard, fulfill both questión and ur auditory skills.</div>
                <button on:click ={()=>{openLink('/listening')}}  class = 'deploy' ><span class="material-symbols-outlined">
                    token
                    </span>deploy</button>
            </div>
            </div>
            <div style="
            top: -12vh;
            position: relative;
        ">
            <div  id = 'revibut'class = 'choice' >
                <span id = "icon3" class="material-symbols-outlined">
                play_lesson
                </span>
                <span class = 'nametool'>VocaCheck Tool</span>
                <div class = "introduce">Illuminating your brain via guessing the keys, means, words of what you learn, VOCABULARY is no longer ur problem.</div>
                <button on:click ={()=>{openLink('/reviving')}}  class = 'deploy' ><span class="material-symbols-outlined">
                    token
                    </span>deploy</button>
            </div>
            <div  id = 'game' class = 'choice' >
                <span id = "icon4" class="material-symbols-outlined">
                text_to_speech
                </span>
                <span class = 'nametool'>Dic&Speak Tool</span>
                <div class = "introduce">Regulating your SPEAKING speed, tracking fluency, quick acquisition of foreign language like your mother's tougue subconsciously via RSVP technique.</div>
                <button on:click ={()=>{openLink('/speaking')}}  class = 'deploy' ><span class="material-symbols-outlined">
                    token
                    </span>deploy</button>
            </div>
            </div>

        </div>
    </div>
    

</div>

<style>
    #license{
        margin-inline: 3vh;
    width: max-content;
    padding-inline: 2vh;
    padding-block: 1vh;
    font-size: 2.5vh;
    font-family: 'Montserrat';
    background-color: transparent;
    font-weight: 500;
    color: #1d1d1d;
    }
    #license:hover{
        background-color: #eeeeee;
    border-radius: 1.5vh;
    color: #1d2a57;
    }
    span{
        padding:0;
    }
    .deploy{
        background-color: transparent;
    border: 1px solid #eeeeee;
    color: #ffffff;
    display: flex;
    align-items: center;
    border-radius: 2vh;
    font-size: 4vh;
    margin-top: 3vh;
    font-family: 'Montserrat';
    font-weight: 600;
    padding: 1.5vh;
    padding-inline: 3vh;
    cursor: pointer;
    }
    .introduce{
        width: 100%;
    padding-inline: 1.5vh;
    color: #eeeeee;
    font-family: 'Montserrat';
    font-weight: lighter;
    }
    #icon1,#icon2,#icon3,#icon4{
        font-size:7vh;
    }

    .nametool{
        font-size: 12vh;
    margin-top: 3vh;
    font-family: 'Montserrat';  
    color: #ffffff;
    }

 
    #premess{
        padding: 1vh;
    font-family: 'Montserrat';
    font-size: 10vh;
    width: 46vw;
    }
    #more{
        font-size: 4vh;
    padding: 0;
    margin: 0;
    }

    #continue{
        width: 16%;
    font-size: 2vh;
    font-family: 'Montserrat';
    display: flex;
    background-color: transparent;
    color: #63727e;
    font-weight: bold;
    border-radius: 1vh;
    align-items: center;
    margin-top: 0.5vh;
    padding: 0;
    padding-block: 1vh;
    cursor: pointer;
    justify-content: space-between;
    flex-direction: row;
    }
    #continue:hover{
        color: #1d2a57;
    }
    #intro{
        font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 11vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    }
    #taskbar{
        height: 8vh;
    display: flex;
    position: fixed;
    background-color: #ffffff;
    top: 2vh;
    padding-inline: 1.5vh;
    left: 3vh;
    right: 3vh;
    border-radius: 2vh;
    z-index: 999;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 0.4vh;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    }
    #h{
        color: #34a853
    }
  
  
    #h3{
        padding: 0;
    padding-inline: 2.5vh;
    background-color: #d2e3fc;
    color: #174ea6;
    text-align: center;
    border-radius: 2vh;
    }
  
    #h5{
        color: #ea4335;
    }
    #storelink{
        position: relative;
    font-size: 4vh;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    }

  
    .containdoc{
        position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 6vh;
    margin-right: 1vh;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
}
#pdfbut{
    background-color: #ea4335;

}
#listbut{
    background-color: #4285f4;
}

#revibut{
    background-color: #34a853;
}
#game{
    background-color: #fbbc04;
}

    .choice{
        width: 40vw;
    padding: 3vw;
    border-radius: 7vh;
    height: max-content;
    font-size: 2.5vh;
    font-weight: bold;
    font-family: monospace;
    margin-top: 5vh;
    margin-inline: 1vh;
    transition: 0.5s;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: #eeeeee;
    flex-direction: column;

}
    

   
#contaidoc1part2{
    position: relative;
    width: 100%;
    display: flex;
    height: 24%;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    margin-block: 4vh;
}
#message{
    font-size: 2.5vh;
    width: 40%;
    padding: 1vh;
    border-radius: 1.5vh;
    padding-inline: 0;
    font-family: 'Montserrat';
    color: #63727e;
    background-color: transparent;
    letter-spacing: 0.2vh;
}



#contaidoc1part1{
    width: 100%;
    top:4vh;
    padding-inline: 9vh;
    position: relative;
    height: max-content;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    flex-direction: column;
}


    #contentDoc{
          height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: block;
    overflow: auto;
    }

  #contentDoc::-webkit-scrollbar{
    width:1vh;
  }
  #contentDoc::-webkit-scrollbar-thumb{
    background-color:#535353;
  }
</style>