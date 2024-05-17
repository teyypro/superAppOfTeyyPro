<script>
  import { stepDask } from "../store";
  import DaskHome from "./DaskHome.svelte";
  import DaskSave from "./DaskSave.svelte";
  import DaskTool from "./DaskTool.svelte";
import Menu from "./Menu.svelte";

</script>
<div id ='containDask'>
    <Menu/>

    {#if $stepDask == 'home'}
        <DaskHome/>
    {:else if $stepDask == 'tool'}
        <DaskTool/>
    {:else if $stepDask == 'save'}
        <DaskSave/>
    {/if}
</div>
