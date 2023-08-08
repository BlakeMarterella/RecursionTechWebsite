<script lang="ts">
import { ref, defineComponent, computed } from 'vue';
import { designPhase, designPhases } from '../data/design_phases';


export default defineComponent({
  name: 'SolutionsComponent',
  setup() {
    const phaseIndex = ref<number>(1);
    const phases = ref<designPhase[]>(designPhases);
    let curPhase = ref<designPhase>(designPhases[0])

    function setPhase(index: number) {
      phaseIndex.value = index;
      curPhase.value = phases.value[index - 1];
    }

    return {
      phaseIndex,
      curPhase,
      setPhase
    }
  }
});
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
      <div class="w-full flex items-center justify-center mb-4">
        <img src="../assets/design_process/phase1.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer" @click="setPhase(1)">
        <img src="../assets/design_process/phase2.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer" @click="setPhase(2)">
        <img src="../assets/design_process/phase3.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer" @click="setPhase(3)">
        <img src="../assets/design_process/phase4.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer" @click="setPhase(4)">
        <img src="../assets/design_process/phase5.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer" @click="setPhase(5)">
        <img src="../assets/design_process/phase6.png"
          class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer" @click="setPhase(6)">
        <img src="../assets/white-logo.png" class="hidden md:block w-12 md:w-20 lg:w-32 h-auto">
      </div>
    </div>
    <!-- Card -->
    <div class="text-neutral-white px-16 w-full">

      <div class="flex-col items-center justify-center w-full">
        <div class="flex-col items-center justify-center text-center mb-3 text-xl">
          <img :src="'src/assets/design_process/phase' + curPhase.id + '_icon.png'" class="h-8 md:h-16 lg:h-24 w-auto mx-auto my-2">
          <h3>Phase {{ phaseIndex }}</h3>
          <h3>{{ curPhase.name }}</h3>
        </div>

        <div class="text-sm">
          <p>{{ curPhase.description }}</p>
        </div>
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
