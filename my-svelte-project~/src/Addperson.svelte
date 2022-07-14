<script>
 import {createEventDispatcher} from 'svelte';

 let dispatch = createEventDispatcher();
  let name;
  let beltColour;
  let age;
//   let fighting = false;
//   let piano = false;
//   let Guitar = false;
//   let word = false;
let skills = [];

  const handleSubmit = () => {
      const person  = {
        name,
        beltColour,
        age,
        skills,
        id: Math.random()
      };

      dispatch('addPerson', person);
     };
</script>


<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="text" placeholder="belt colour" bind:value={beltColour}>
    <input type="number" placeholder="age" bind:value={age}> 
    <label>Skills:</label>
    <!-- <input type="checkbox" bind:checked={fighting}>Fighting<br>
    <input type="checkbox" bind:checked={piano}>piano<br>
    <input type="checkbox" bind:checked={Guitar}>Guitar<br>
    <input type="checkbox" bind:checked={word}>Word<br> -->
    <input type="checkbox" bind:group={skills} value="fighting">Fighting<br>
    <input type="checkbox" bind:group={skills} value="guitar">Guitar<br>
    <input type="checkbox" bind:group={skills} value="word">Word<br>
    <input type="checkbox" bind:group={skills} value="piano">Piano<br>

    <label>beltColour</label>
    <select bind:value={beltColour}>
        <option value="red">Red</option>
        <option value="orange">orange</option>
        <option value="black">black</option>
        <option value="green">green</option>
        <option value="brown">brown</option>


    </select>


    <button>Add Person</button>
 </form>
 

<style>

</style>