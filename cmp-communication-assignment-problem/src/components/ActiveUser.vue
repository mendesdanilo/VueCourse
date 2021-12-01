<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
    <button @click="$emit('delete', id)">Delete</button>
  </section>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  emits: ["", "delete"],

  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>
