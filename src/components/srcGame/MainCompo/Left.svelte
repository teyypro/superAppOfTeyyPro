<script>
  import { displayScript, prevLeft, theme } from "../store";

    export let realContentLeft
    
</script>
<div id = 'left' style="display:{$displayScript ? "flex" : "none"}; color:{$theme?'#c9c9c9':'#5e5e5e'}">{realContentLeft}
</div><span style = "color: {$theme?'#000000':'#ffffff'};">{$prevLeft}</span>
<style>
#left{
    font-size: 6vh;
  
}

span{
    
    padding:0;
    font-size: 6vh;
}
</style>