<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h2>{{ age }}</h2>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    /*  const uName = ref('maximilian');*/
    const uAge = ref(31);
    const firstName = ref('');
    const lastNameInput = ref(null)
    const lastName = ref('');
    // const user = reactive({
    //   name: 'maximilia',
    //   age: 31,
    // });

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], function (newValues, oldValues) {
      console.log(oldValues[0], newValues[0]);
    });

    function setNewAge() {
      uAge.value = 32;
    }

    function setLastName(){
      lastName.value = lastNameInput.value.value
    }

    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastNameInput,
      setLastName
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
