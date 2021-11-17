const app = Vue.createApp({
  data() {
    return {
      name: "Danilo Mendes",
      age: 38,
      imageUrl: "https://www.w3schools.com/images/w3schools_green.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
