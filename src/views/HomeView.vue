<template>
  <div class="home-view home-view--flex" id="HomeView">
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      vestibulum magna in urna feugiat sagittis. Nam vel ullamcorper ipsum,
      vitae tristique dui. Ut in enim id tortor dignissim varius et at est.
      Nulla ut nulla ante. Suspendisse condimentum lacinia ex, vitae ullamcorper
      magna faucibus sit amet. Donec eget eleifend nibh. Sed in mauris
      venenatis, congue tellus convallis, mattis purus. Aliquam erat volutpat.
      Nulla dapibus maximus felis, rutrum vestibulum ante molestie condimentum.
      Curabitur dapibus arcu in lacus viverra efficitur. Aenean sit amet
      venenatis odio, eu interdum ipsum. Pellentesque quis sapien a magna auctor
      rutrum. Suspendisse potenti. Aenean fringilla aliquet dolor, vel malesuada
      augue aliquam vitae.
    </blockquote>
    <blockquote v-else-if="text.id == 2">Don't do that!</blockquote>
    <blockquote v-else-if="text.id == 3">It's time to stop</blockquote>
    <blockquote v-else-if="text.id == 4">I give you money.</blockquote>
    <blockquote v-else-if="text.id == 5">It's a lie.</blockquote>
    <blockquote v-else-if="text.id == 6">I'm sorry, okay?</blockquote>
    <blockquote v-else-if="text.id == 7">I'm not handsome, yet.</blockquote>
    <blockquote v-else-if="text.id == 8">You got me.</blockquote>
  </div>
</template>

<style scoped>
#HomeView {
  scroll-snap-align: start;
}
.home-view {
  --home-view--background-color: var(--color-desaturated);
  --profile-images--size: 150px;
  background: var(--home-view--background-color);
  padding: 100px;
}
.home-view--flex {
  display: flex;
  column-gap: 30px;
}

.home-view,
blockquote,
blockquote::after,
blockquote::before {
  --profile-images--padding: 10px;
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
  padding: 10px;
  min-height: var(--blockquote--min-height);
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
