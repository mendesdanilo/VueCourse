const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: "",
      tasks: [],
      listIsVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    toggleFunction() {
      this.listIsVisible = !this.listIsVisible;
    },
  },
});

app.mount("#assignment");
