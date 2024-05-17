<script>
  import ImGcomponent from "./IMGcomponent.svelte";

</script>
<div id = 'containIMG'>
    <div class = 'topic'>Muitiple convenience for you</div>
    <ImGcomponent address = '../images/IMGStorage/READING/reading1.png' title = 'Instant Translation on Text' trans = 'Simply selecting a word and unlock a world of definitions, synonyms, antonyms, and collocations in an instant.'/>
    <ImGcomponent address = '../images/IMGStorage/LISTENING/listening1.png' title = 'Gap-Filling Creator' trans = 'Inputing your transcript and let the algorithm work its magic, creating randomized gaps for you to practise Gap-Filling exercise in listening.'/>
    <ImGcomponent address = '../images/IMGStorage/REVIVING/reviving1.png' title = 'Passive Reminding' trans = 'Patiently entering your words or phrases and their meanings, this tool will automatically create exercises for you to learn vocabulary by heart without much effort.'/>
    <ImGcomponent address = '../images/IMGStorage/GAME/game1.png' title = 'Vocabulary Activation' trans = 'Playing with AI, taking turns typing words that begin with the last letter of the previous word, there will be definitions expressed for you after each turn. Do not repeat any words. Who will win?'/>
    <ImGcomponent address = '../images/IMGStorage/READING/collocation.png' title = 'Collocation Storage' trans = 'With just one click, discover collocations and find suitable adjectives for nouns, and vice versa.'/>
    <ImGcomponent address = '../images/IMGStorage/READING/synant.png' which = {true} title = 'Synonyms - Antonyms' trans = 'By a simple gesture, unveil a lavish array of alternatives for the word and its antonyms'/>
    <ImGcomponent address = '../images/IMGStorage/READING/selectablepdf.png' title = 'Instant Translation on PDF' trans = 'Choosing any words in the pdf, you will immediately get its definitions and other relevant information.'/>
    <ImGcomponent address = '../images/IMGStorage/READING/editTool.png' which = {true} title = 'Mutiple PDF Edit Tools' trans = 'A multitude of gifted tools are available for you to embellish your PDF.'/>
    <ImGcomponent address = '../images/IMGStorage/READING/capturescreen.png' title = 'English ScreenSearch PDF' trans = 'Unable to copy text in unselectable PDFs? No need to worry. This tool helps you convert any part of the file in just a moment to text format.'/>
    <ImGcomponent address = '../images/IMGStorage/READING/transaftercap.png' which = {true} title = 'Looking up on Unselectable PDF' trans = 'Converting to text format, just only select your word, boomm! The dictionary will abruptly appear.'/>
    <ImGcomponent address = '../images/IMGStorage/READING/dragImage.png' title = 'Drop Image in one Drop' trans = 'Holding your image from Facebook Messenger, Zalo or any other websites, dragging it, changing tabs and dropping it. No need to download!'/>
    <ImGcomponent address = '../images/IMGStorage/READING/aftercaptureimage.png' which = {true} title = 'Looking up on Image' trans = 'Similar to that in PDF one, converting then you can easily get it.'/>
    <ImGcomponent address = '../images/IMGStorage/READING/vietconvert.png' title = 'Vietnamese Convert' trans = 'Tired of typing a long sentence when making presentation, this one helps Vietnam Students convert any image to text that they like to insert into their powerpoint in a second!'/>
</div> 
<style>
   
   .topic{
    font-size: 2vh;
    width: max-content;
    padding: 1vh;
    border-radius: 1.5vh;
    padding-inline: 3vh;
    font-family: monospace;
    color: #eeeeee;
    font-weight: bold;
    background-color: #2a2a2a;
    letter-spacing: 0.2vh;
    transition: 1s;
    cursor: pointer;
   }

   .topic:hover{
    padding-inline:6vh;
    transition:0.3s;
   }
#containIMG{
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    height: 100%;
}
   
</style>