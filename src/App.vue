<template>
  <div @click="clearMessage">
    <input v-model="message" />
    <h3 v-if="message.length">{{message}}</h3>
    <h3 v-else>No message entered</h3>
    <ul>
      <li v-for="m in messages" :key="m.id">{{m.id}} {{m.message}}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data: () => ({
    message: "Vuejs Workshop",
    messages: [
      {
        id: 1,
        message: "Person A",
      },
      {
        id: 2,
        message: "Person B",
      },
      {
        id: 3,
        message: "Person C",
      },
    ],
  }),
  methods: {
    clearMessage() {
      this.message = "";
    },
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
