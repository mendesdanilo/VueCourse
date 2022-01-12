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
    removeTask() {
      this.tasks.splice(-1);
    },
    resetInput() {
      this.enteredTask = "";
    },
  },
});

app.mount("#assignment");
