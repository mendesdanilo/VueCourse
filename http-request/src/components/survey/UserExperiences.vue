<template>
  <section>
    <base-card>
      <h2>Submitted Posts</h2>
      <div>
        <base-button @click="loadPosts">Load Posts</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :date="result.date"
          :by="result.by"
          :text="result.text"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
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
