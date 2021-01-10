import { writable } from 'svelte/store';

const initial_state = {
  room: null,
};

export const state = writable(initial_state);
