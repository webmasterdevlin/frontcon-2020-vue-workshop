<template>
  <div @click="clearMessage">
    <input v-model="message" />
    <h3 v-if="message.length">{{message}}</h3>
    <h3 v-else>No message entered</h3>

    <h3 v-if="!messages.length">Loading..</h3>
    <ul v-else>
      <li v-for="m in messages" :key="m.id">{{m.id}} {{m.message}}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data: () => ({
    message: "Vuejs Workshop",
    messages: [],
  }),
  methods: {
    clearMessage() {
      this.message = "";
    },
  },
  async mounted() {
    // HTTP REquests
    // response = await getMessagesService()
    this.messages = response;
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
