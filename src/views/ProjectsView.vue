<template>
  <h1>Projects</h1>
  <div id="ProjectsView">
    <div class="projects projects-grid">
      <div class="project project1">
        <img src="../assets/brother-blog-desktop-screenshot.png" />
        <div class="project__details-container project__details-container--overlay project__details-container--center">
          <div class="project__details">
            <h2>A blog template</h2>
          </div>
        </div>
      </div>

      <div class="project project2">
        <img src="../assets/multi-step-form-desktop-screenshot.png" />
        <div class="project__details-container project__details-container--overlay project__details-container--center">
          <div class="project__details">
            <h2>Multi-step form</h2>
          </div>
        </div>
      </div>

      <div class="project project3">
        <img src="../assets/news-homepage-desktop-screenshot.png" />
        <div class="project__details-container project__details-container--overlay project__details-container--center">
          <div class="project__details">
            <h2>News homepage</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</style>