<template>
    <div class="container">
        <h2>Do you like to continue as {{email}}? 🔒</h2>
        <button @click="onSubmit" class="btn btn-info mr-3">Yes</button>
        <button class="btn btn-outline-info" @click="handleLogOut()">No thanks, I'd like to log out</button>
    </div>
</template>

<script>
  import { mapActions } from "vuex";
  import { getUserEmailFromToken, logOut } from '../auth.service'

  export default {
    name: 'ContinueAs',

    data: () => ({
        email: getUserEmailFromToken()
    }),

    methods: {
      ...mapActions("authModule", ["useLocalStorageTokenToSignIn"]),
      handleLogOut() {
        logOut();
      },
      onSubmit() {
        this.useLocalStorageTokenToSignIn().then(() => {
          this.$router.push({ name: "home" });
        })
      }
    }

  }

</script>

<style scoped>

</style>
