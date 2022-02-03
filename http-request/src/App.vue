<template>
  <the-header></the-header>
  <router-view></router-view>
  <new-post></new-post>
  <post-list></post-list>
</template>

<script>
import TheHeader from './components/post/TheHeader.vue';
import NewPost from './components/post/NewPost.vue';
import PostList from './components/post/PostList.vue';

export default {
  components: {
    NewPost,
    PostList,
    TheHeader,
  },
  // data() {
  //   return {
  //     savedSurveyResults: [],
  //   };
  // },
  // methods: {
  //   storeSurvey(surveyData) {
  //     const surveyResult = {
  //       name: surveyData.userName,
  //       rating: surveyData.rating,
  //       id: new Date().toISOString(),
  //     };
  //     this.savedSurveyResults.push(surveyResult);
  //     console.log(surveyResult);
  //   },
  // },
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
</style>
