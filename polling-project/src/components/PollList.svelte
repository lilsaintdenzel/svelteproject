<script>
  import { onDestroy, onMount } from 'svelte';
  import PollDetails from './PollDetails.svelte';
  // export let polls = [];
  import {fade, slide, scale} from 'svelte/transition';
  import PollStore from '../stores/PollStore.js';
  import { flip } from 'svelte/animate';
  

//   const unsub = PollStore.subscribe((data) => {
//     polls = data;
//   });

// onMount(() => {
//   console.log ('Component is mounted')
// })


// onDestroy(() => { 
//   console.log('Component is destroyed');
//   unsub()
// })


</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
  
        <div  in:fade out:scale|local animate:flip={{duration: 500}}> <PollDetails {poll} on:vote/> </div>
  {/each}

</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

</style>