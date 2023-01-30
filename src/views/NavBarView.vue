<template>
  <nav class="nav--flex">
    <p class="p--flex-item">Binh2</p>
    <ul class="ul--flex">
      <li><a href="#HomeView">Home</a></li>
      <li><a href="#ProjectsView">Projects</a></li>
      <li><a href="#BlogView">Blog</a></li>
      <li><a href="#ContactView">Contact</a></li>
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
}
a:visited {
  color: var(--color-whitish);
}
a.router-link-active, a:active {
  color: var(--color-primary);
}
</style>
