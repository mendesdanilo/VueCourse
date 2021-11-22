const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    notThereYet() {
      if (this.counter < 37) {
        return "Not there yet!";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much!";
      }
    },
    watch: {
      notThereYet() {
        console.log("watcher executing...");
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
      },
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#assignment");
