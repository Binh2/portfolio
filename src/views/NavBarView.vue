<template>
  <nav class="nav--flex">
    <p class="p--flex-item">Binh2</p>
    <ul class="ul--flex">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding: 15px 20px;
  background: var(--color-blackish);
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
}
a:visited {
  color: var(--color-whitish);
}
a.router-link-active {
  color: var(--color-primary);
}
</style>
