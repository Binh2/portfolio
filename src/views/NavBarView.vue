<template>
  <nav class="nav--flex">
    <p class="p--flex-item">Binh2</p>
    <ul class="ul--flex">
      <li><a href="#HomeView" v-bind:class="{ active: activeLinkId == 1 }">Home</a></li>
      <li><a href="#ProjectsView" v-bind:class="{ active: activeLinkId == 2 }">Projects</a></li>
      <li><a href="#BlogView" v-bind:class="{ active: activeLinkId == 3 }">Blog</a></li>
      <li><a href="#ContactView" v-bind:class="{ active: activeLinkId == 4 }">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding: 15px 20px;
  background: var(--color-blackish);
  position: sticky;
  top: 0;
  z-index: 1000;
}
.nav--flex {
  display: flex;
}
.p--flex-item {
  flex: 1;
}
p {
  font-weight: bold;
  color: var(--color-primary);
}
ul {
}
.ul--flex {
  display: flex;
  column-gap: 20px;
}
a {
  text-decoration: none;
  color: var(--color-whitish);
  transition: 0.5s ease;
}
a:visited {
  color: var(--color-whitish);
}
a.router-link-active, a:active, a.active {
  color: var(--color-primary);
}
</style>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const activeLinkId = ref(1);

    function highlightNavLink() {
      let scrollY = window.pageYOffset + window.innerHeight / 2;
  
      const landmarks = document.querySelectorAll("main[id], section[id], footer[id]");
      landmarks.forEach((landmark, index) => {
        let landmarkHeight = landmark.offsetHeight;
        let landmarkTop = landmark.offsetTop - 50;

        if (
          scrollY > landmarkTop &&
          scrollY <= landmarkTop + landmarkHeight
        ) {
          activeLinkId.value = index + 1;
        }
      });      
    }
    onMounted(() => { 
      window.addEventListener("scroll", highlightNavLink);

    });
    return {
      activeLinkId,
    };
  },
}
</script>
