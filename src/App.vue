<template>
  <NavBarView />
  <router-view/>
  <FooterView />
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*/
</style>

<script>
import NavBarView from "./views/NavBarView.vue";
import FooterView from "./views/FooterView.vue";

export default {
  components: {
    NavBarView,
    FooterView,
  },
};
</script>