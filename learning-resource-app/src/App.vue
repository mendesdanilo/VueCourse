<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resource/LearningResource.vue';

export default {
  components: {
    LearningResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'Yada Yada',
          link: 'www.vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google',
          link: 'www.google.com',
        },
      ],
    };
  },
};
</script>
