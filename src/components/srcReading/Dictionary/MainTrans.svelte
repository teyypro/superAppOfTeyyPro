<script>
  
        import BoardDic from "./BoardDic.svelte";
    
    import DefiDs from "./DefiDS.svelte";
    import SynDs from "./SynDS.svelte";
    import AntDs from "./AntDS.svelte";
    import CoAds from "./CoADS.svelte";
    import CoNds from "./CoNDS.svelte";
</script>

<div id ='contInnerDic'>
    <div id ='behindblur'></div>
    <BoardDic/>
    <DefiDs/> 
    <SynDs/>
    <AntDs/>
    <CoAds/>
    <CoNds/>  
</div>

<style>
      
      #behindblur{
        position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border: 0;
    background: #ffffff;
    }
    #contInnerDic{
        position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    border-top-left-radius: 3vh;
    border-top-right-radius: 3vh;
    border-bottom-right-radius: 2vh;
    border-bottom-left-radius: 2vh;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    }
    #contInnerDic:hover{
        transition:0.2s;
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    }
</style>