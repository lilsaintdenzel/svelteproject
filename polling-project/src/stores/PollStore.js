import {writable} from 'svelte/store';

const PollStore = writable( [
    {
        id: 1,
        question: 'Python or JavaScript',
        answerA: 'Python',
        answerB: 'javascript',
        votesA: 9,
        votesB: 15,	
    },
]
);


export default  PollStore;
