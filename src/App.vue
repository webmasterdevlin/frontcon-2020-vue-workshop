<template #default>
  <div>
    <HeaderNav></HeaderNav>
    <div class="container">
      <div class="vertical-center">
        <div >
          <router-view></router-view>
        </div>
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
/* @import "../node_modules/bootstrap-icons"; */


h1, h2, h3 {
  margin-bottom: 2rem;
}
input {
  margin-bottom: 2rem;
}
</style>
