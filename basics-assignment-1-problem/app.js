const app = Vue.createApp({
  data() {
    return {
      name: "Danilo",
      age: 38,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4olUbdK8DBSrXKBOFxWC1RBSUP1ytBDnB4A&usqp=CAU",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
