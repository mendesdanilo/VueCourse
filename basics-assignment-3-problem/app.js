const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    showResult() {
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
  computed: {
    showResult() {
      if (this.counter < 37) {
        return "No there yet";
      } else if (this.counter > 37) {
        return "Too much";
      } else {
        return "You got 37";
      }
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#assignment");
