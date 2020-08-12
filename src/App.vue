<template>
  <div>
    <HeaderNav></HeaderNav>
    <div class="container">
      <div class="my-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./shared/components/Navbar";

export default {
  name: "App",

  components: {
    HeaderNav,
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
