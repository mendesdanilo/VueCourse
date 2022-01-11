const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      paragraphIsVisible: true,
    };
  },

  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
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
