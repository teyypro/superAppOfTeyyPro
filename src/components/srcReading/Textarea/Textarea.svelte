<script>
  import Tab from "../Tab/Tab.svelte";
  import UpFile from "../UpFile/UpFile.svelte";
  import EnterNameFile from "./EnterNameFile.svelte"

  export let page
  let zIndex = 0
  
  import { onTab, step, isConvertingTess } from "../store.js";
  import Viewer from "../PDFviewer/Viewer.svelte";
  import { onMount } from "svelte";
  import ImageArea from "../Imagearea/ImageArea.svelte";
  import TextWord from "../TextWord/TextWord.svelte";
  import ContainCoverted from "../PDFviewer/ContainCoverted.svelte";
  
  onTab.subscribe((value) => {
    if (page == value) {
      zIndex = 1;
      if (typeof document !== 'undefined' && document.getElementById("containerTab" + page.toString())) {
        document.getElementById("containerTab" + page.toString()).style.border = '1px solid #535353';
      }
    } else {
      zIndex = 0;
      if (typeof document !== 'undefined' && document.getElementById("containerTab" + page.toString())) {
        document.getElementById("containerTab" + page.toString()).style.border = '0';
      }
    }
  });

  onMount(() => {
    $step[page - 1] = "selectfile";
    console.log("mounted");
  });
</script>
<div id = "containerArea" style ={`z-index: ${zIndex}; position: relative`}>
  <div id = 'area'>
  {#key $step[page-1]}
    {#if $step[page-1] == "selectfile"}
      <UpFile/>
    {:else if $step[page-1] == "enterName"}
      <EnterNameFile/>
    {:else if $step[page-1] == "RunPDF"} 
      <div id ='containPDF'>
        <Viewer/> 
        {#if $isConvertingTess}
        <ContainCoverted/> 
        {/if}
      </div>
   {:else if $step[page-1] == "RunImage"}
   <div id = 'containerIMAGE'>
          <ImageArea numpage={page-1}/>
          {#if $isConvertingTess}
        <ContainCoverted/> 
        {/if} 
    </div>
  {:else if $step[page-1] == "RunText"}
      <TextWord/>
    {/if}
   {/key} 

  
  </div>
 
 
</div>


<style>

#containerIMAGE{
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  background-color: #535353;
}
  #area{
 
    background-color: #ffffff;
  width: 100%;
  height: 95vh;
  bottom:0;
  left: 0;
  position: fixed;
  overflow: auto;
  border-top: 0.05vh solid #a4a4ac;
  
  }

  #area:focus{
    outline:0
  }

  #containPDF{
    display: flex;
  height: 100%;
  flex-wrap: nowrap;
  overflow: hidden;
  }

</style>