<template>
  <section>
    <base-card>
      <h2>List of Posts</h2>
      <div>
        <!-- <base-button @click="loadPosts">Load Posts</base-button> -->
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No post is found. Please write a post.
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
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
      isLoading: false,
    };
  },
  methods: {
    loadPosts() {
      this.isLoading = true;
      fetch('https://blog-f584a-default-rtdb.firebaseio.com/posts.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
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
  mounted() {
    this.loadPosts();
  },
};
</script>

<style scoped>
h2 {
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
