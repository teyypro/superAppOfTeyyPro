<script>
  import { displayScript, prevRight, theme } from "../store";

    export let realContentRight
    
</script>
<span style = "color: {$theme?'#000000':'#ffffff'}">{$prevRight}</span>
<div id = 'right' style="display:{$displayScript ? "flex" : "none"}; color:{$theme?'#c9c9c9':'#5e5e5e'}">{realContentRight}
</div>
<style>
#right{
    font-size: 6vh;
 
}

span{
 
    padding:0;
    font-size: 6vh;
}
</style>