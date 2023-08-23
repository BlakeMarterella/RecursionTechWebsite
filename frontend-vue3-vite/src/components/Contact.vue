<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactComponent',
  setup() {

    
    return {

    }
  }
});
</script>

<template>
  <div class="py-14 bg-background-dark-navy lg:py-24">
    <div class="w-full text-center">
      <h2 class="text-3xl lg:text-4xl text-neutral-white pb-5 px-4">
        Contact Us
      </h2>
      <p class="px-8 md:w-3/4 lg:w-1/2 mx-auto text-neutral-grayish-blue text-sm lg:text-base leading-5 mb-4">
        Connect with us for projects. Big or small. 
        <br />
        <a href="mailto:blake@recursion.tech">blake@recursion.tech</a>
      </p>
    </div>

  </div>
</template>

<style scoped></style>
