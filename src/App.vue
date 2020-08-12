<template>
  <div>
    <h3>{{message}}</h3>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data: () => ({
    message: "Vuejs Workshop",
  }),
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
