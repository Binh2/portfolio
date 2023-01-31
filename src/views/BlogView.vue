<template>
  <h1>Blog (Currently, I have no blog, yet)</h1>
  <div id="BlogView" >
    <div class="blogs">
      <button class="backward" v-on:click="backward"></button>
      <!-- <iframe src="https://binh2.github.io/multi-step-form/" class="blog" v-bind:class="[ 'blog' + (blog1Order + 1) ]"></iframe> -->
      <div class="blog" v-bind:class="[ 'blog' + (blog1Order + 1) ]">1</div>
      <div class="blog" v-bind:class="[ 'blog' + (blog2Order + 1) ]">2</div>
      <div class="blog" v-bind:class="[ 'blog' + (blog3Order + 1) ]">3</div>
      <div class="blog" v-bind:class="[ 'blog' + (blog4Order + 1) ]">4</div>
      <div class="blog" v-bind:class="[ 'blog' + (blog5Order + 1) ]">5</div>
      <button class="forward" v-on:click="forward"></button>
    </div>
  </div>
</template>

<style scoped>
#BlogView {
  scroll-snap-align: start;
}
.backward:before {
  content: "<";
}
.forward:before {
  content: ">";
}
.blogs {
  margin-top: 5vw;
  position: relative;

  /* 0.707 = sin(45deg) */
  /* 0.5 = sin(30deg) */
  --width: calc((100vw - 6px) * 0.5 / 2);
  --height: calc(var(--width) * 4 / 5);
  height: calc(var(--height) * 5 / 4);
}
.blog, .forward, .backward {
  position: absolute;
  top: 0;
  left: 50%;

  width: var(--width);
  height: var(--height);
  background: var(--color-desaturated);
  border: 2px solid var(--color-desaturated);

  transition: 0.5s ease;

  color: var(--color-whitish);
  text-align: center;
  line-height: var(--height);
  vertical-align: middle;
  font-size: 3em;

  /* 0.414 = tan(22.5deg) */
  /* 0.268 = tan(15deg) */
  /* -10px buffer for more spacing between blog element */
  transform-origin: center center calc(var(--width) / -2 / 0.268 - 10px);
  translate: -50%;
  --perspective: 2500px;
}
.backward, .forward {
  margin: auto 0;
  /* background: hsl(var(--color-values-whitish), 0.5); */
  background: var(--color-desaturated);
  opacity: 0.5;
  color: var(--color-whitish);
  /* border-width: 0; */
  font-weight: bold;

  z-index: 4; 
}
.backward:hover, .forward:hover {
  /* background: var(--color-whitish); */
  /* background: hsla(var(--color-values-desaturated), 0.8);
  opacity: 1; */
  background: transparent;
  opacity: 1;
  color: var(--color-desaturated);
  border-color: var(--color-desaturated);
  cursor: pointer;
}

.blog1 {
  z-index: 1;
  opacity: 0;
}
.blog1, .backward {
  transform: perspective(var(--perspective)) rotateY(-60deg);
}
.blog2 {
  transform: perspective(var(--perspective)) rotateY(-30deg);
  z-index: 2;
}
.blog3 {
  transform: perspective(var(--perspective)) rotateY(0deg);
  z-index: 3;
  border-color: var(--color-primary);
}
.blog4 {
  transform: perspective(var(--perspective)) rotateY(30deg);
  z-index: 2;
}
.blog5, .forward {
  transform: perspective(var(--perspective)) rotateY(60deg);
}
.blog5 {
  z-index: 1;
  opacity: 0;
}

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
