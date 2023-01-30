<template>
  <div id="BlogView">
    <h1>Blog</h1>
    <div class="blogs blogs-flex">
      <iframe src="https://binh2.github.io/multi-step-form/" class="blog" v-bind:class="[ 'blog' + (blog1Order + 1) ]"></iframe>
      <div class="blog" v-bind:class="[ 'blog' + (blog2Order + 1) ]">2</div>
      <div class="blog" v-bind:class="[ 'blog' + (blog3Order + 1) ]">3</div>
      <div class="blog" v-bind:class="[ 'blog' + (blog4Order + 1) ]">4</div>
      <div class="blog" v-bind:class="[ 'blog' + (blog5Order + 1) ]">5</div>
    </div>
    <button v-on:click="backward">Backward</button>
    <button v-on:click="forward">Forward</button>
  </div>
</template>

<style scoped>
/* .blogs-flex {
  display: flex;
  column-gap: 10%;
} */
.blogs {
  position: relative;
  width: 160px;
  height: 100px;
}
.blog {
  position: absolute;
  top: 0;

  width: 160px;
  height: 100px;
  background: var(--color-desaturated);
  border: 2px solid var(--color-blackish);

  transition: 0.5s ease;

  color: var(--color-whitish);
  text-align: center;
  line-height: 100px;
  vertical-align: middle;

  /* style iframe */
  transform: scale(0.25);
}
.blog1 {
  transform: perspective(800px) translateZ(100px) rotateY(-60deg);
  left: 0;
}
.blog2 {
  transform: perspective(800px) translateZ(173.21px) rotateY(-30deg);
  left: calc(73.21px * 2);
}
.blog3 {
  transform: perspective(800px) translateZ(200px) rotateY(0deg);
  left: calc(173.21px * 2);
}
.blog4 {
  transform: perspective(800px) translateZ(173.21px) rotateY(30deg);
  left: calc(273.21px * 2);
}
.blog5 {
  transform: perspective(800px) translateZ(100px) rotateY(60deg);
  left: calc(346.41px * 2);
}
/* .blog3 {
  transform: scale(2);
}
.blog2, .blog4 {
  transform: scale(1.5);
} */

button {
  margin-top: 20px;
}
</style>

<script>
import { ref } from "vue";
export default {
  setup() {
    const blog1Order = ref(0);
    const blog2Order = ref(1);
    const blog3Order = ref(2);
    const blog4Order = ref(3);
    const blog5Order = ref(4);

    function forward() {
      blog1Order.value = (blog1Order.value + 1) % 5;
      blog2Order.value = (blog2Order.value + 1) % 5;
      blog3Order.value = (blog3Order.value + 1) % 5;
      blog4Order.value = (blog4Order.value + 1) % 5;
      blog5Order.value = (blog5Order.value + 1) % 5;
    }
    function backward() {
      blog1Order.value = (blog1Order.value + 4) % 5;
      blog2Order.value = (blog2Order.value + 4) % 5;
      blog3Order.value = (blog3Order.value + 4) % 5;
      blog4Order.value = (blog4Order.value + 4) % 5;
      blog5Order.value = (blog5Order.value + 4) % 5;
    }

    return {
      blog1Order,
      blog2Order,
      blog3Order,
      blog4Order,
      blog5Order,
      forward,
      backward,
    }
  }
}
</script>
