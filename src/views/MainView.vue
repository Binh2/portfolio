<template>
  <HomeView />
  <ProjectsView />
</template>

<script>
import HomeView from "./HomeView.vue";
import ProjectsView from "./ProjectsView.vue";

export default {
  components: {
    HomeView,
    ProjectsView,
  },
};
</script>