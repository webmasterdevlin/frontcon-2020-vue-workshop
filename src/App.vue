<template>
  <div>
    <input v-model="message" />
    <button @click="clearMessage">Clear</button>
    <h3>{{message}}</h3>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data: () => ({
    message: "Vuejs Workshop",
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
