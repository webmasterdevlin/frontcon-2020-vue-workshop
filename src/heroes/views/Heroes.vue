<template>
  <div class="container-fluid">
    <h1>Heroes Works!</h1>
    <section>
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
    ...mapActions("hero", ["getHeroesAction"]),
  },

  mounted() {
    this.getHeroesAction();
  },
};
</script>

<style scoped></style>
