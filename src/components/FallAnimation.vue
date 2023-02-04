<template>
  <div 
    class="fall-animation"
    v-on:click.once="fallAnimation.startFallAnimation"
    v-bind:style="{
      left: x + 'px',
      top: y + 'px',
      opacity: fallAnimation.opacity,
    }"
    v-if="!fallAnimation.isDisplayNone"
  ></div>
</template>

<script>
import { reactive } from "vue";
import { useNewtonianPhysicPosition } from "../composables/NewtonianPhysicPosition.js";

export default {
  emits: ["changeText"],
  setup(props, context) {
    function randomInRange(min, max) { // [min, max)
      return Math.floor(Math.random() * (max - min) + min);
    }
    
    const { _position: x, update: updateX } = useNewtonianPhysicPosition(0, randomInRange(-80, 80));
    const { _position: y, update: updateY } = useNewtonianPhysicPosition(100, randomInRange(-150, -80));
    const fallAnimation = reactive({
      isDisplayNone: false,
      opacity: 1,
      startFallAnimation() {
        const interval = 20;
        const intervalId = setInterval(() => {
          if (y.value >= window.innerHeight) {
            fallAnimation.opacity = 0;
            setTimeout(() => fallAnimation.isDisplayNone = true, 1000);
          }
          else {
            updateX(interval);
            updateY(interval);
          }
        }, interval);
        setTimeout(() => {
          clearInterval(intervalId);
          fallAnimation.opacity = 0;
          setTimeout(() => fallAnimation.isDisplayNone = true, 1000);
        }, 10000);
        context.emit("changeText");
      },
    });

    return {
      x,
      y,
      fallAnimation,
    };
  },
};
</script>

<style scoped>
div {
  transition: opacity 1s ease;
}
</style>