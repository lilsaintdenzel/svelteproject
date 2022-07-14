<script>  

    import Modal from './Modal.svelte';
	import Addperson from './Addperson.svelte';
import { each } from 'svelte/internal';

	let showModal = false;

	const toggleModal =  () => {
		showModal = !showModal;
	}
 	let students = [
		{name: 'yoshi', beltColour: 'black', age: 24, id: 1},
		{name: 'mario', beltColour: 'orange', age: 45, id: 2},
		{name: 'yoshi', beltColour: 'black', age: 35, id: 3}
	];

const handleClick = (id) => {
	students = students.filter((person) => person.id  != id);
}

let num = 1;

const addPerson =(e) => {
	// console.log(e.detail)
	const person = e.detail;
	students = [person, ...students]
}
</script>

<Modal isPromo={true} {showModal} on:click={toggleModal}>
   <h3>Add a New Person</h3>
   <Addperson on:addPerson={addPerson}/>
   
</Modal>

{#if num > 20}
 <p> Greater than 20</p>
 {:else if num > 5}
  <p>Greather than 5</p>
  {:else}
  <p>Not greater than 5</p>
 {/if}
<main>
	<button on:click={toggleModal}>Open Modal</button>
	{#each students as person (person.id)}
	<div>
		<h4>{person.name}</h4>
		{#if person.beltColour === 'black'}
            <p><strong>Master Ninjas</strong></p>
		{/if}
		<p>{person.age} years old, {person.beltColour} belt</p>

		{#if person.skills}
	
			<div>
				<h2>{#each person.skills as skill}
					<p>{skill}</p>
					{/each}
				</h2>
			</div>
	
     {/if}
		<button on:click={()=> {handleClick(person.id)}}>Delete</button>



	</div>
	 {:else}
    <p>There are no people to know</p>
	{/each}
<!-- 
	{#if students.skills > 0}
	{#each students as person (person.skills)}
	  <div>
		<h2>{person.skills}</h2>
	  </div>
	{/each}
   {/if} -->
</main>

<style>
	main {
	+		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>