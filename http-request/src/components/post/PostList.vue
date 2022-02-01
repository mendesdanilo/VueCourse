<template>
  <section>
    <base-card>
      <h2>List of Posts</h2>
      <div>
        <base-button @click="loadPosts">Load Posts</base-button>
      </div>
      <ul>
        <display-post
          v-for="result in results"
          :key="result.id"
          :date="result.date"
          :by="result.by"
          :text="result.text"
        ></display-post>
      </ul>
    </base-card>
  </section>
</template>

<script>
import DisplayPost from './DisplayPost.vue';

export default {
  components: {
    DisplayPost,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    loadPosts() {
      fetch('https://blog-f584a-default-rtdb.firebaseio.com/posts.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              date: data[id].date,
              by: data[id].by,
              text: data[id].text,
            });
          }
          this.results = results;
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
