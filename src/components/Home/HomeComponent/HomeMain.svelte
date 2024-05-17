<script>
    import WelComePage from '../WelcomePage/WelComePage.svelte'
      import {stepHomePage} from '../store'
  </script>
  
  {#if $stepHomePage == 'welcome'}
      <WelComePage/>

  {/if}

