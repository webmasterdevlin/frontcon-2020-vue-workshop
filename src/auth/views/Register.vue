<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h3>Register</h3>

      <section class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="registerForm.email"
          placeholder="📧"
          autocomplete="off"
          id="email"
          type="email"
          class="form-control form-control-lg"
        />
      </section>

      <section class="form-group">
        <label for="password">Password</label>
        <input
          v-model="registerForm.password"
          placeholder="🔑"
          autocomplete="off"
          id="password"
          type="password"
          class="form-control form-control-lg"
        />
      </section>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Register
      </button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",

  data: () => ({
    registerForm: {
      email: "",
      password: "",
    },
  }),

  methods: {
    ...mapActions("authModule", ["registerUserAction"]),

    onSubmit() {
      this.registerUserAction(this.registerForm).then(() => {
        this.$router.push({ name: "heroes" });
      });
    },
  },
};
</script>

<style scoped></style>
