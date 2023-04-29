<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        name: "levani",
        phone: "557700447",
        email: "test@test.com",
      },
    };
  },
  methods:{
    toggleDetails(){
        this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>
