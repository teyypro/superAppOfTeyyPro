<script>
    import NumLength from './NumLength.svelte'
 
</script>
<div id = 'taskboard'>
   <div id = 'containtask'>
       <NumLength/>
   
   
</div>
</div>

<style>

   #containtask{
       width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;

   }
   #taskboard{
       position: relative;
   background-color: #ffffff;
   height: 100%;
   border-radius: 3vh;
   display: flex;
   flex-wrap: nowrap;
   width: 57%;
   flex-direction: row;
   transition: 0.5s;
   }
   #taskboard:hover{
        transition: 0.2s;
       box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
   }
  
</style>