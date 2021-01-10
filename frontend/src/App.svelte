<script>
  import Home from "./routes/Home.svelte";
  import Room from "./routes/Room.svelte";
  import { state } from "./store/state.js";
</script>

<style> 
</style>

<main>
  {#if !$state.room}
    <Home />
  {/if}
  {#if $state.room}
    <Room />
  {/if}
</main>
