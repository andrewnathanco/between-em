<script>
  let name;
  let code;

  function joinRoom() {
    alert(`hey ${name}`);
    console.log({code, name});
  };

  function createAGame() {
    if (!name) {
      alert("please enter a name");
    } else {
      alert(`hey ${name}, thank you for creating a game. Unfortunately we cannot do that yet, try back later`);
    }
  }
  function validateCode() {
    if (code.length !== 6) {
      alert("please enter a correct code")
      name = "";
    } else {
      name = name.toUpperCase();
    }
  }

</script>

<style>
  .root {
    margin: 20px;
  }
  .code-container { width: 100%;
    display: flex;
  }
  .divider-container {
    margin: 0px 20px;
  }
  .create-container {
    margin-top: 20px;
  }
</style>
<main>
  <div class="root">
    <div class="title-container">
      <h1>Between 'Em</h1>
    </div>
    <div class="name-container">
      <input 
         bind:value={name}
          placeholder="Enter a name"
      />
    </div>
    <div class="code-container">
      <input 
         bind:value={code}
        placeholder="Enter a room code..."
      />
      <button
        on:click={joinRoom}
        >Submit...</button>
    </div>
    <div class="divider-container">
      <h3>Or...</h3>
    </div>
    <div class="create-container">
      <button
        on:click={createAGame}
        >Create a game...</button>
    </div>
  </div>
</main>
