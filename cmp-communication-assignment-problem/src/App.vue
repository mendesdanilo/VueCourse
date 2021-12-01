<template>
  <section>
    <user-data @add-contact="addContact"></user-data>
    <active-user
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :username="user.username"
      :age="user.age"
      @delete="deleteContact"
    ></active-user>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addContact(username, age) {
      const newUserContact = {
        id: new Date().toISOString(),
        username: username,
        age: age,
      };
      this.users.push(newUserContact);
    },
    deleteContact(userId) {
      this.users = this.users.filter((user) => user.id !== userId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
