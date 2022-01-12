const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      taskIsVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    toggleTaskVisibility() {
      this.taskIsVisible = !this.taskIsVisible;
    },
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
  },
});

app.mount("#assignment");
