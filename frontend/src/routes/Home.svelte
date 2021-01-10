<script>
  import { state } from "../store/state.js";

  // import socket io
  import io from "socket.io-client";

  const socket = io("https://08a3d78003de.ngrok.io", { transports: ["websocket"] });
  
  let name;
  let code;

  // function to join whatever room you are in
  function joinRoom() {

    // todo
    // - check number of people in room
    // - validate room code

    // update state to include room and code
    state.update(current_state => {
      return {
        ...current_state,
        room: {
          code,
          name
        }
      }
    })
    socket.emit("join room", name);
  }

  // function to create a game
  function createAGame() {

    // todo
    // - 

    // update state
    state.update(current_state => {
      return {
        ...current_state,
        room: {
          name,
          host: true,
          code: generateRandomCode(),
        }
      }
    })
    socket.emit("join room", name);
  }

  // generate random 6 digit code
  export function generateRandomCode() {
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

    // todo fix the error with 
  return new Array(5).fill(0).map(() => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1)).join("").toUpperCase()}
</script>

<style>
  .root {
    margin: 20px;
  }
  .code-container { width: 100%;
    display: flex;
  }
  .divider-container {
    margin: 20px 0px;
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
        placeholder="Write me a message..."
      />
    </div>
    <div class="either-container">
      <h3>Either...</h3>
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
