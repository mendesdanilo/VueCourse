<template>
  <section>
    <header class="">{{ date }}</header>
    <h5 class="">By {{ by }}</h5>
    <p class="">{{ text }}</p>
  </section>
</template>

<script>
export default {
  props: ['date', 'by', 'text'],
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  background-color: rgb(247, 247, 247);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-bottom: 10px;
  border-radius: 15px;
}
</style>
