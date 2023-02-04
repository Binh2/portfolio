<template>
  <HomeView />
  <ProjectsView />
  <BlogView />
</template>

<script>
import HomeView from "./HomeView.vue";
import ProjectsView from "./ProjectsView.vue";
import BlogView from "./BlogView.vue";

export default {
  components: {
    HomeView,
    ProjectsView,
    BlogView,
  },
};
</script>