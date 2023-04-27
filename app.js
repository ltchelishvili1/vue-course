const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods:{
    setName(event,LastName){
      this.name = event.target.value + " " + LastName;     
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
