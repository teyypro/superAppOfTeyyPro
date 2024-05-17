<script>
  import { LisEnter, MaxSlide, MinSlide, onSide } from "../store";

    function Slide(){
        $onSide++
        if ($onSide == $LisEnter.length-1){
            $MaxSlide = true
            console.log($onSide)
            $MinSlide = true
        } else{
            $MinSlide = false
        $MaxSlide = false
        }
        
        document.getElementById('slideContain').style.transform = "translate(" + ($onSide * -100 / $LisEnter.length) + "%, 0)";

        
    }
</script>
<button class = 'next' on:click = {Slide}>next</button>

<style>


    .next{
    position: absolute;
    height: 4vh;
    background-color: transparent;
    width: max-content;
    padding-inline: 2vh;
    margin-inline: 1vh;
    display: flex;
    border: 0;
    align-items: center;
    border-radius: 1.2vh;
    font-size: 2vh;
    font-family: monospace;
    font-weight: bold;
    color: #999999;
    right: 0;
    top: 1vh;
    transition:0.2s ease-in-out;
      }
      .next:hover{
        background-color: #1d1d1d;
        color: #fefefe;
      }
</style>