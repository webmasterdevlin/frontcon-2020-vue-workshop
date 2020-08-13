9 lines (87 sloc) 2.41 KB
<template>
  <div class="card my-3" style="width: auto;">
    <form
      class="card-header"
      @submit.prevent="onSubmit"
      style="min-width: 460px;"
    >
      <div class="d-flex flex-column">
        <section class="form-group">
          <label for="firstName">First Name</label>
          <input
            v-model="obj.firstName"
            placeholder="📛"
            autocomplete="off"
            type="text"
            id="firstName"
            class="form-control"
          />
        </section>

        <section class="form-group">
          <label for="lastName">Last Name</label>
          <input
            v-model="obj.lastName"
            placeholder="📛"
            autocomplete="off"
            type="text"
            id="lastName"
            class="form-control"
          />
        </section>
        <section class="form-group">
          <label for="house">House</label>
          <input
            v-model="obj.house"
            placeholder="🏠"
            autocomplete="off"
            type="text"
            id="house"
            class="form-control"
          />
        </section>
        <section class="form-group">
          <label for="knownAs">Known as</label>
          <input
            v-model="obj.knownAs"
            placeholder="👀"
            autocomplete="off"
            type="text"
            id="knownAs"
            class="form-control"
          />
        </section>
        <button type="submit" class="btn btn-success">
          {{ text }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",

  props: {
    text: {
      type: String,
      default: () => String,
    },
    obj: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onSubmit() {
      this.$emit("handleSubmit");
    },
  },
};
</script>

<style scoped></style>
