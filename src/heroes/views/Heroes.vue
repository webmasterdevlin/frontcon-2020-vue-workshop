<template>
  <div class="container-fluid">
    <h1>Heroes Works!</h1>
    <div
      v-if="isLoading"
      style="display: flex; flex-direction: row; justify-content: center;"
    >
      <div
        class="spinner-border"
        style="width: 6rem; height: 6rem; color: purple;"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <section v-else>
      <div v-if="heroes.length > 0">
        <div
          class="card mt-3"
          style="width: auto;"
          v-for="hero in heroes"
          :key="hero.id"
        >
          <div class="card-header">
            <h3 class="card-title">{{ hero.firstName }} {{ hero.lastName }}</h3>
            <h5 class="card-subtitle mb-2 text-muted">{{ hero.house }}</h5>
            <p class="card-text">{{ hero.knownAs }}</p>
          </div>
          <section class="card-body">
            <div class="row">
              <button
                @click="removeHeroAction(hero.id)"
                class="btn btn-outline-danger card-link col text-center"
              >
                Delete
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Heroes",

  setup() {
    return {};
  },
  computed: {
    ...mapGetters("hero", {
      heroes: "heroes",
      isLoading: "isLoading",
    }),
  },
  methods: {
    ...mapActions("hero", ["getHeroesAction", "removeHeroAction"]),
  },
  mounted() {
    this.getHeroesAction();
  },
};
</script>

<style scoped></style>
