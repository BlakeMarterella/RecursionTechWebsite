<script setup lang="ts">
import Tabs from './Tabs.vue';
import Tab from './Tab.vue';

import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  ref,
  watch,
  toRefs,
  h,
  VNode,
  computed,
  onBeforeUpdate,
} from "vue";

</script>

<template>
  <div class="py-14 bg-background-dark-navy lg:py-24">
    <!-- Wrapper -->
    <div class="w-full flex-col justify-center items-center text-center">
      <!-- Heading -->
      <h2 class="text-3xl lg:text-4xl text-neutral-white pb-5">
        Solutions
      </h2>
      <!-- Subheading/description -->
      <p class="px-8 md:w-3/4 lg:w-1/2 mx-auto text-neutral-grayish-blue text-sm lg:text-base leading-5 mb-4">
        We have a strategic 6 phase design, transforming your initial concept from paper to a robust, scalable software
        solution, designed and implemented by Recursion Tech.
      </p>
      <!-- Design Process Icon2 -->
      <div class="w-full flex items-center justify-center">
        <img src="../assets/design_process/phase1.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer">
        <img src="../assets/design_process/phase2.png" class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer"
          @click="console.log(Tabs.selectedIndex.ba)">
        <img src="../assets/design_process/phase3.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer">
        <img src="../assets/design_process/phase4.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer">
        <img src="../assets/design_process/phase5.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer">
        <img src="../assets/design_process/phase6.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer">
        <img src="../assets/white-logo.png" class="hidden md:block w-12 md:w-20 lg:w-32 h-auto">
      </div>
    </div>
    <!-- Card -->
    <div class="flex-col text-neutral-white mx-16 w-full">
      
      <div class="flex items-center w-full">
        <img src="../assets/design_process/phase1.png" class="w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer">

      </div>

      <div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.phase-icon {
  transition: transform .3s;
}

.phase-icon:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
