<template>
  <HomeView />
  <ProjectsView />
  <BlogView />
  <ContactView />
</template>

<script>
import HomeView from "./HomeView.vue";
import ProjectsView from "./ProjectsView.vue";
import BlogView from "./BlogView.vue";
import ContactView from "./ContactView.vue";

export default {
  components: {
    HomeView,
    ProjectsView,
    BlogView,
    ContactView,
  },
};
</script>