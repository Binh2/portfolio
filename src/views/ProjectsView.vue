<template>
  <section id="ProjectsView">
    <h1>Projects</h1>
    <div class="projects projects-grid">
      <div class="project project1">
        <img src="../assets/brother-blog-desktop-screenshot.png" />
        <div class="project__details-container project__details-container--overlay project__details-container--center">
          <div class="project__details project__details--flex">
            <h2>A blog template</h2>
            <ul class="project__links project__links--flex">
              <li><a href="https://binh2.github.io/brother-blog/" target="_blank" class="project__demo-link" /></li>
              <li><a href="https://github.com/binh2/brother-blog" target="_blank" class="project__source-code-link" /></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="project project2">
        <img src="../assets/multi-step-form-desktop-screenshot.png" />
        <div class="project__details-container project__details-container--overlay project__details-container--center">
          <div class="project__details project__details--flex">
            <h2>Multi-step form</h2>
            <ul class="project__links project__links--flex">
              <li><a href="https://binh2.github.io/multi-step-form/" target="_blank" class="project__demo-link" /></li>
              <li><a href="https://github.com/binh2/multi-step-form" target="_blank" class="project__source-code-link" /></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="project project3">
        <img src="../assets/news-homepage-desktop-screenshot.png" />
        <div class="project__details-container project__details-container--overlay project__details-container--center">
          <div class="project__details project__details--flex">
            <h2>News homepage</h2>
            <ul class="project__links project__links--flex">
              <li><a href="https://binh2.github.io/news-homepage/" target="_blank" class="project__demo-link" /></li>
              <li><a href="https://github.com/binh2/news-homepage" target="_blank" class="project__source-code-link" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#ProjectsView {
  scroll-snap-align: start;
}
.projects-grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
}
.project {
  position: relative;
  border: 2px solid var(--color-desaturated);
  background: var(--color-desaturated);
}
.project1 {
  border-color: var(--color-primary);
  grid-column-start: 1;
  grid-column-end: 3;
}
.project img {
  width: 100%;

  /* For centering image vertically */
  height: 100%;
  object-fit: contain;
}

.project__details-container {
  background: var(--color-desaturated);
  text-decoration: none;
}
.project1 .project__details-container {
  background: var(--color-primary);
}
.project__details-container--overlay {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
}
.project__details-container--center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project__details-container:hover {
  transition: 0.7s ease;
  opacity: 0.9;
}
.project__details {
  color: var(--color-whitish);
}
/* .project__details--flex {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
} */

.project__links--flex {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}
.project__links li:hover {
  list-style-type: disclosure-closed;
}
.project__demo-link, .project__source-code-link {
  color: var(--color-whitish);
}
.project__demo-link:after {
  content: "Visit live demo";
}
.project__source-code-link:after {
  content: "See source code";
}
</style>