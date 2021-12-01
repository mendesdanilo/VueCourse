<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label for="">Username</label>
        <input type="text" v-model="enteredUsername" />
      </div>
      <div>
        <label for="">Age</label>
        <input type="tel" v-model="enteredAge" />
      </div>
      <div>
        <button>Add Contact</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredUsername: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", this.enteredUsername, this.enteredAge);
    },
  },
};
</script>

<style></style>
