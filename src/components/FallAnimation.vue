<template>
  <div 
    class="fall-animation"
    v-on:click.once="fallAnimation.startFallAnimation"
    v-bind:style="{
      left: x + 'px',
      top: y + 'px',
    }"
    v-if="!fallAnimation.isDisplayNone"
  ></div>
</template>

<script>
import { ref, reactive } from "vue";
import { useNewtonianPhysicPosition } from "../composables/NewtonianPhysicPosition.ts";

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
      startFallAnimation() {
        if (!this.isClicked) {
          const interval = 20;
          const intervalId = setInterval(() => {
            if (y.value >= window.innerHeight) this.isDisplayNone = true;
            else {
              updateX(interval);
              updateY(interval);
            }
          }, interval);
          setTimeout(() => {
            clearInterval(intervalId);
            this.isDisplayNone = true;
          }, 10000);
          context.emit("changeText");
        }
      },
    });

    return {
      x,
      updateX,
      y,
      fallAnimation,
    };
  },
};
</script>
