<template>
  <main class="home-view home-view--flex" id="HomeView">
    <div class="profile-images">
      <img src="../assets/my-face.png" class="profile-image profile-image1" />
      <FallAnimationComponent class="profile-image profile-image2" v-on:change-text="text.change()" />
      <FallAnimationComponent class="profile-image profile-image3" v-on:change-text="text.change()" />
      <FallAnimationComponent class="profile-image profile-image4" v-on:change-text="text.change()" />
      <FallAnimationComponent class="profile-image profile-image5" v-on:change-text="text.change()" />
      <FallAnimationComponent class="profile-image profile-image6" v-on:change-text="text.change()" />
      <FallAnimationComponent class="profile-image profile-image7" v-on:change-text="text.change()" />
      <FallAnimationComponent class="profile-image profile-image8" v-on:change-text="text.change()" />
    </div>
    <blockquote v-if="text.id == 1">
      My name is Ben (in English). I'm a front-end dev, working on a few personal projects. Haven't worked for a company yet, but I'm teachable, approachable, and willing to work long-term, and long hours.
    </blockquote>
    <blockquote v-else-if="text.id == 2">Don't do that!</blockquote>
    <blockquote v-else-if="text.id == 3">It's time to stop</blockquote>
    <blockquote v-else-if="text.id == 4">I give you money.</blockquote>
    <blockquote v-else-if="text.id == 5">It's a lie.</blockquote>
    <blockquote v-else-if="text.id == 6">I'm sorry, okay?</blockquote>
    <blockquote v-else-if="text.id == 7">I'm not handsome, yet.</blockquote>
    <blockquote v-else-if="text.id == 8">You got me.</blockquote>
  </main>
</template>

<style scoped>
#HomeView {
  scroll-snap-align: start;

  /* 30px from NavBarView margin top and bottom, and 1em from NavBarView font-size */
  scroll-margin-top: calc(30px + 1em);
}
.home-view {
  --home-view--background-color: var(--color-desaturated);
  --profile-images--size: 150px;
  background: var(--home-view--background-color);
  padding: 15vw 10vw;
}
.home-view--flex {
  display: flex;
  column-gap: 30px;
}

.home-view,
blockquote,
blockquote::after,
blockquote::before {
  --profile-images--padding: 0px;
  --blockquote--min-height: 150px;
  --blockquote--background-color: var(--color-whitish);
  --blockquote-before--height: 50px;
  --blockquote-before--width: 15px;
}

.profile-images {
  position: relative;
  width: var(--profile-images--size);
  height: var(--profile-images--size);
  padding: var(--profile-images--padding);
}
.profile-image {
  border-radius: 100%;
  position: absolute;
  transform: translateX(var(--profile-images--padding)) translateY(var(--profile-images--padding));
  width: var(--profile-images--size);
  height: var(--profile-images--size);
  z-index: 1;
}
.profile-image8 {
  background: lightgreen;
}
.profile-image7 {
  background: lightblue;
}
.profile-image6 {
  background: red;
}
.profile-image5 {
  background: orange;
}
.profile-image4 {
  background: purple;
}
.profile-image3 {
  background: pink;
}
.profile-image2 {
  background: green;
}
.profile-image1 {
  position: static;
  object-fit: cover;
  object-position: 50% top;
  transform: translateY(0);
}

blockquote {
  /* display: inline-block; */
  background: var(--blockquote--background-color);
  border-radius: 10px;

  --padding: 10px;
  padding: var(--padding);
  min-height: calc(var(--blockquote--min-height) - var(--padding) * 2);
  position: relative;
  display: inline-block;
  margin-left: var(--blockquote-before--width);
  color: var(--color-blackish);
}
blockquote:before {
  content: "";
  position: absolute;
  height: var(--blockquote-before--height);
  /* 1px buffer for zooming problems while rendering*/
  width: calc(var(--blockquote-before--width) + 1px);
  top: calc(
    (var(--blockquote--min-height) - var(--blockquote-before--height)) / 2 + var(--profile-images--padding)
  );
  left: calc(var(--blockquote-before--width) * -1);
  background: var(--blockquote--background-color);
}
blockquote:after {
  content: "";
  position: absolute;
  height: var(--blockquote-before--height);
  width: var(--blockquote-before--width);
  border-radius: 0 var(--blockquote-before--height)
    var(--blockquote-before--height) 0;
  top: calc(var(--blockquote--min-height) / 2 + var(--profile-images--padding));
  left: calc(var(--blockquote-before--width) * -1);
  background: var(--home-view--background-color);
  box-shadow: 0 calc((var(--blockquote-before--height) + 1px) * -1) 0 0
    var(--home-view--background-color);
}
@media screen and (max-width: 600px) {
  .home-view {
    padding: 6vw 3vw;
  }
}
</style>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import FallAnimationComponent from "../components/FallAnimation.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    FallAnimationComponent,
  },
  setup() {
    const text = reactive({
      id: 1,
      change() {
        this.id++;
      },
    });

    return {
      text,
    };
  },
});
</script>
