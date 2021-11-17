// in vanilla JavaScript
// document.querySelector('button').addEventListener()

// v-bind sets the value of an attribute
// v-on is another event listener (reacts ON certain event), it takes an argument after the :

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
      //in vanilla JavaScript, you refer to your data properties with "this"
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
