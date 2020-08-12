<template>
  <div class="container-fluid">
    <h1>Heroes Works!</h1>
    <div
      v-if="editingTracker === '0'"
      style="display: flex; place-content: center; place-items: center;"
    >
      <div class="mb-5">
        <Form
          :text="'Save New Hero'"
          :obj="heroForm"
          @handleSubmit="onSubmitHero"
        />
      </div>
    </div>
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
            <div
              v-if="editingTracker === hero.id"
              style="display: flex; place-content: center; place-items: center;"
            >
              <div class="mb-5">
                <Form
                  :text="'Update Hero'"
                  :obj="hero"
                  @handleSubmit="updateHeroAction(hero)"
                />
              </div>
            </div>
            <div v-else>
              <h3 class="card-title">
                {{ hero.firstName }} {{ hero.lastName }}
              </h3>
              <h5 class="card-subtitle mb-2 text-muted">{{ hero.house }}</h5>
              <p class="card-text">{{ hero.knownAs }}</p>
            </div>
          </div>
          <section class="card-body">
            <div class="row">
              <button
                v-if="editingTracker === hero.id"
                @click="() => (editingTracker = '0')"
                class="btn btn-info card-link col text-center"
              >
                Cancel
              </button>
              <button
                v-else
                @click="() => (editingTracker = hero.id)"
                class="btn btn-primary card-link col text-center"
              >
                Edit
              </button>
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

import Form from "../../shared/components/Form";

export default {
  name: "Heroes",
  components: { Form },

  data: () => ({
    heroForm: {
      id: "",
      firstName: "",
      lastName: "",
      house: "",
      knownAs: "",
    },

    editingTracker: "0",
  }),

  setup() {
    return {};
  },

  computed: {
    ...mapGetters("heroModule", {
      heroes: "heroes",
      isLoading: "isLoading",
    }),
  },

  methods: {
    ...mapActions("heroModule", [
      "getHeroesAction",
      "removeHeroAction",
      "addHeroAction",
      "updateHeroAction",
    ]),
    onSubmitHero() {
      this.addHeroAction(this.heroForm);
      this.heroForm = {};
    },
  },

  mounted() {
    this.getHeroesAction();
  },
};
</script>

<style scoped></style>
