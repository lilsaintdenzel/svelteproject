<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import Tabs from "./shared/Tabs.svelte";	
	import PollList from './components/PollList.svelte';

	// import
	
	//tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';
    const tabChange = (e) => {
		activeItem = e.detail;
	}

	// let polls = [
	// 	{
	// 		id: 1,
	// 		question: 'Python or JavaScript',
	// 		answerA: 'Python',
	// 		answerB: 'javascript',
	// 		votesA: 9,
	// 		votesB: 15,	
	// 	},
	// ]

	const handleAdd = (e) => {
	
		activeItem = 'Current Polls'
	}


    const handleVote = (e) => {
		const {id, option}= e.detail;
		let copiedPolls = [...polls];

		let upvotedPoll = copiedPolls.find((poll) => poll.id == id )

		if(option === 'a') {
			upvotedPoll.votesA++;
		}

		if (option === 'b') {
			upvotedPoll.votesB++;
		}


		   polls = copiedPolls;

	}

	
</script>


	<Header/>
		<main>
			<Tabs {items} {activeItem} on:tabChange={tabChange}/>
			{#if activeItem == 'Current Polls'}
               <PollList  on:vote={handleVote}/>
			{:else if activeItem == 'Add New Poll'}
			     <CreatePollForm  on:add={handleAdd}/>
			{/if}
		</main>
	<Footer/>


<style>


	main {
		text-align: center;
		padding: 1em;
		max-width: 960px;
		margin: 40px auto;
	}

	
</style>