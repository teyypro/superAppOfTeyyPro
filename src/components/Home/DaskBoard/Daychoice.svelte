<script>
    import { dayDisplay, onDay } from "../store";
  
     function Do(){
        $dayDisplay = !$dayDisplay;
     }
  </script>
  
  <button id = 'daychoice' on:click = {Do}>{$onDay}</button>
  
  <style>
      #daychoice{
        position: absolute;
    top: 1vh;
    height: 4vh;
    width: max-content;
    padding-block: 0.5vh;
    padding-inline: 4vh;
    background-color: transparent;
    border-radius: 1.5vh;
    right: 1vh;
    color: #1d1d1d;
    font-size: 2vh;
    font-weight: bold;
    z-index: 10;
    font-family: monospace;
      }

      #daychoice:hover{
        background-color: #1d1d1d;
        color: #fefefe;

      }
  </style>