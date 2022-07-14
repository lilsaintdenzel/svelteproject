<script>
    import PollStore from '../stores/PollStore.js'
    import {createEventDispatcher} from "svelte";
    import Button from '../shared/Button.svelte'

    let dispatch = createEventDispatcher()
    let fields = { question: '', answerA: '', answerB: ''};
    let errors = {question: '', answerA: '', answerB: ''};   
    let valid = false;        

    const submitHandler = () => {
      console.log(fields);   
      console.log(errors)

      //validate fields
      valid = true;

      if (fields.question.trim().length < 5) {
        valid = false;
        errors.question = 'question must be least five Character long';
      } else {
        errors.question = ''
      }

      if  (fields.answerA.trim().length < 2) {
        valid = false;
        errors.answerA = 'Answer A cannot be empty';

    } else {
        errors.answerA = '';
    }

    if (fields.answerB.trim().length <1) {
        valid = false;
        errors.answerB = 'Answer B cannot be empty';
    } else {
        errors.answerB = '';
    }

    //add new poll
    if (valid) {

        let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()}
        //save poll to sstore
        PollStore.update(currentPolls => {
            return [poll, ...currentPolls]
        });
        dispatch('add')
    }
}
</script>


<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">
           Poll Question:
        </label>
        <input type="text" id="question" bind:value = {fields.question}>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answwer-a">
           Answer A:
        </label>
        <input type="text" id="answer-a" bind:value = {fields.answerA}>
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">
           Answer B
        </label>
        <input type="text" id="answer-b" bind:value = {fields.answerB}>
        <div class="error">{errors.answerB}</div>
    </div>
    <Button type="secondary" flat={true}>ADD POll </Button>
</form>


<style>
   form {
    width:  400px;
    margin: 0 auto;
    text-align: center;
   }

   .form-field {
     margin: 18px auto;


   }

   input {
    width: 100%;
    border-radius: 6px;
   }

   label {
    margin: 10px auto;
    text-align: left;
   }

   .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42
   }
</style>

