const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "manuel lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "julie lorenz",
          phone: "98765 5678 991",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails(){
    this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
});

app.mount("#app");
