<script>
  import { state } from "../store/state.js";

  function leaveGame() {
    state.update(initial_state => {
      return {
        ...initial_state,
        room: null,
      };
    });
  }
</script>


<style>
  .root {
    margin: 20px;
  }
</style>


<main>
  <div class="root">
    <div class="title-container">
      <h1>Between 'Em</h1>
    </div>
    <div class="room-code">
      <h2>Hey {$state.room.name} welcome to room {$state.room.code}</h2>
    </div>
      {#if $state.room.host}
        <div class="settings-container">
          <div class="settings-title">
            <h3>Settings</h3>
          </div>
          <div>
            <button>sabatoge</button>
          </div>
        </div>
      {/if}
    <div class="buttons"> 
      <div class="leave-button">
        <button
          on:click={leaveGame}
          >leave the game</button>
      </div>
    </div>
  </div>
</main>
