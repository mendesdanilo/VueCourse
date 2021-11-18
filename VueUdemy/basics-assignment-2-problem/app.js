const app = Vue.createApp({
  data() {
    return {
      message: "",
      confirmedMessage: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedMessage = this.message;
    },
    setMessage(event) {
      this.message = event.target.value;
    },
    showAlert() {
      alert("Alert message is on!!!");
    },
  },
});

app.mount("#assignment");
