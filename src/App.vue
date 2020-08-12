<template>
  <div @click="clearMessage">
    <input v-model="message" />
    <h3 v-if="message.length">{{message}}</h3>
    <h3 v-else>No message entered</h3>
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
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
