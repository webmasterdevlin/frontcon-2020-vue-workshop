<template>
  <div>
    <form @submit.prevent="chekEmailAlert = true">
      <h3>Forgot Password</h3>

      <section class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="resetPasswordForm.email"
          placeholder="📧"
          autocomplete="off"
          id="email"
          type="email"
          class="form-control form-control-lg"
        />
      </section>

      <button type="submit" class="btn btn-dark btn-lg btn-block mb-2">Reset password</button>
      <div
        v-if="chekEmailAlert"
        class="alert alert-primary"
        role="alert"
      >Password reset has sent to {{resetPasswordForm.email}}. Please check your email</div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      resetPasswordForm: {
        email: "",
      },
      chekEmailAlert: false,
    };
  },
};
</script>

<style scoped>

</style>
