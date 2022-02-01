<template>
  <section>
    <base-card>
      <h2>Write a Post</h2>
      <form @submit.prevent="submitPost">
        <div class="form-control">
          <label for="date">Date</label>
          <input type="text" id="date" name="date" v-model.trim="enteredDate" />
        </div>
        <div class="form-control">
          <label for="name">By</label>
          <input type="text" id="by" name="by" v-model.trim="enteredBy" />
        </div>
        <div class="form-control">
          <label for="text">Text</label>
          <textarea
            type="text"
            id="text"
            name="text"
            v-model.trim="enteredText"
          >
          </textarea>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <div>
          <base-button @click="loadPosts">Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  emits: ['date', 'by', 'text'],
  data() {
    return {
      enteredDate: '',
      enteredBy: '',
      enteredText: '',
      invalidInput: false,
    };
  },
  methods: {
    submitPost() {
      if (
        this.enteredDate === '' ||
        !this.enteredBy === '' ||
        this.enteredText === ''
      ) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      fetch('https://blog-f584a-default-rtdb.firebaseio.com/posts.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: this.enteredDate,
          by: this.enteredBy,
          text: this.enteredText,
        }),
      });

      this.enteredDate = '';
      this.enteredBy = '';
      this.enteredText = '';
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.form-control {
  margin: 0.5rem 0;
}

input [type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
