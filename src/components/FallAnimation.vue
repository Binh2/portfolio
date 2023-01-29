<template>
  <div 
    class="fall-animation"
    v-on:click.once="fallAnimation.startFallAnimation"
    v-bind:style="{
      left: fallAnimation.positionX + 'px',
      top: fallAnimation.positionY + 'px',
    }"
    ref="fallAnimationComponent"
    v-if="!fallAnimation.isDisplayNone"
  ></div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";

export default {
  emits: ["changeText"],
  setup(props, context) {
    const accelerationY = 100;
    function randomInRange(min, max) { // [min, max)
      return Math.floor(Math.random() * (max - min) + min);
    }
    
    const fallAnimationComponent = ref();
    const fallAnimation = reactive({
      velocityX: randomInRange(-80, 80),
      velocityY: randomInRange(-150, -80),
      positionX: 0,
      positionY: 0,
      isDisplayNone: false,
      startFallAnimation() {
        if (!this.isClicked) {
          const interval = 20;
          const intervalId = setInterval(() => {
            if (this.positionY >= window.innerHeight) this.isDisplayNone = true;
            else {
              this.positionX += (this.velocityX * interval) / 1000;
              this.positionY += (this.velocityY * interval) / 1000;
              this.velocityY += (accelerationY * interval) / 1000;
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
      fallAnimation,
      fallAnimationComponent,
    };
  },
};
</script>
