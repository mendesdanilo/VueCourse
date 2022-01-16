const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

// app.mount("#app");

// let message = "hello";

// let longMessage = message + "world";

// message = "helloooooooo";

// console.log(longMessage);

const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!";
