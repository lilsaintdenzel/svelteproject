<!-- <script>
	export let name;
	let firstName = "jimi";
	let lastName = "Butler";
	let beltColour = 'black'
    
	$:fullName = `${firstName} ${lastName}` ;

	$: {
		console.log(beltColour);
		console.log(fullName)
	}
	const handleClick = () => {
		beltColour = 'orange';
	}

	const handleInput = (e) => {
		beltColour = e.target.value;
	}
</script>
<main>
	<h1>Hello {name}!</h1>
	<p style="color: {beltColour}">{fullName} - {beltColour}</p>
	
	<!-- <input typbuttone="text" on:input={handleInput}> -->
    <button on:click={handleClick} value={beltColour}>Update beltColour</button>
	<input type="text" bind:value={beltColour}>
	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>



</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style> -->