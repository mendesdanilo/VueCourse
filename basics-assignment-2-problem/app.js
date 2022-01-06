const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      enterInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("You clicked the button");
    },
    setInput(event) {
      this.userInput = event.target.value;
    },
    newInput() {
      this.enterInput = event.target.value;
    },
  },
});

app.mount("#assignment");
