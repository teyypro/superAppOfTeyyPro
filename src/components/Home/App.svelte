<script>
    import  Router  from 'svelte-spa-router';
  import HomeMain from './HomeComponent/HomeMain.svelte';
  import Reading from '../srcReading/Reading.svelte';
  import Listening from '../srcListening/Listening.svelte';
  import Reviving from '../srcReviving/Reviving.svelte';
  import Game from '../srcGame/Game.svelte'
  import StoreWord from './StoreWord/StoreWord.svelte'
  import Lisence from './License/Lisence.svelte';
</script>

<Router routes = {{
'/': HomeMain,
'/reading': Reading,
'/listening': Listening,
'/reviving' : Reviving,
'/speaking' : Game,
'/store' : StoreWord,
'/license' : Lisence,
}}/>
