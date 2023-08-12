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
      phases,
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
        <img src="../assets/design_process/phase1.png" class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer"
          @click="setPhase(1)">
        <img src="../assets/design_process/phase2.png" class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer"
          @click="setPhase(2)">
        <img src="../assets/design_process/phase3.png" class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer"
          @click="setPhase(3)">
        <img src="../assets/design_process/phase4.png" class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer"
          @click="setPhase(4)">
        <img src="../assets/design_process/phase5.png" class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer"
          @click="setPhase(5)">
        <img src="../assets/design_process/phase6.png" class="phase-icon w-12 md:w-20 lg:w-32 h-auto hover:cursor-pointer"
          @click="setPhase(6)">
        <img src="../assets/white-logo.png" class="hidden md:block w-12 md:w-20 lg:w-32 h-auto">
      </div>
    </div>
    <!-- Card -->
    <div class="text-neutral-white px-6 md:px-48 w-full">

      <div class="bg-primary-blue bg-gradient-to-r from-primary-blue to-primary-teal h-1 rounded-xl" />
      <div class="flex flex-col md:flex-row items-center p-4">
        <div class="flex-grow mr-4 mb-2 md:mb-0">
          <img src="../assets/design_process/phase1.png" class="w-10 md:w-20 lg:w-32 h-auto ">
        </div>
        <div class="">
          <h3 class="mb-2"><span class="font-extrabold">Phase {{ phases[0].id }}:</span> {{ phases[0].name }}</h3>
          <p class="md:pr-8">{{ phases[0].description }}</p>
        </div>
      </div>

      <div class="bg-primary-blue bg-gradient-to-r from-primary-teal to-primary-blue h-1 rounded-xl" />
      <div class="flex flex-col md:flex-row-reverse items-center p-4">
        <div class="flex-grow ml-4 mb-2 md:mb-0">
          <img src="../assets/design_process/phase2.png" class="w-10 md:w-20 lg:w-32 h-auto ">
        </div>
        <div class="md:text-right">
          <h3 class="mb-2"><span class="font-extrabold">Phase {{ phases[1].id }}:</span> {{ phases[1].name }}</h3>
          <p class="md:pl-8">{{ phases[1].description }}</p>
        </div>
      </div>

      <div class="bg-primary-blue bg-gradient-to-r from-primary-blue to-primary-teal h-1 rounded-xl" />
      <div class="flex flex-col md:flex-row items-center p-4">
        <div class="flex-grow mr-4 mb-2 md:mb-0">
          <img src="../assets/design_process/phase3.png" class="w-10 md:w-20 lg:w-32 h-auto ">
        </div>
        <div class="">
          <h3 class="mb-2"><span class="font-extrabold">Phase {{ phases[2].id }}:</span> {{ phases[2].name }}</h3>
          <p class="md:pr-8">{{ phases[2].description }}</p>
        </div>
      </div>

      <div class="bg-primary-blue bg-gradient-to-r from-primary-teal to-primary-blue h-1 rounded-xl" />
      <div class="flex flex-col md:flex-row-reverse items-center p-4">
        <div class="flex-grow ml-4 mb-2 md:mb-0">
          <img src="../assets/design_process/phase4.png" class="w-10 md:w-20 lg:w-32 h-auto ">
        </div>
        <div class="md:text-right">
          <h3 class="mb-2"><span class="font-extrabold">Phase {{ phases[3].id }}:</span> {{ phases[3].name }}</h3>
          <p class="md:pl-8">{{ phases[3].description }}</p>
        </div>
      </div>

      <div class="bg-primary-blue bg-gradient-to-r from-primary-blue to-primary-teal h-1 rounded-xl" />
      <div class="flex flex-col md:flex-row items-center p-4">
        <div class="flex-grow mr-4 mb-2 md:mb-0">
          <img src="../assets/design_process/phase5.png" class="w-10 md:w-20 lg:w-32 h-auto ">
        </div>
        <div class="">
          <h3 class="mb-2"><span class="font-extrabold">Phase {{ phases[4].id }}:</span> {{ phases[4].name }}</h3>
          <p class="md:pr-8">{{ phases[4].description }}</p>
        </div>
      </div>

      <div class="bg-primary-blue bg-gradient-to-r from-primary-teal to-primary-blue h-1 rounded-xl" />
      <div class="flex flex-col md:flex-row-reverse items-center p-4">
        <div class="flex-grow ml-4 mb-2 md:mb-0">
          <img src="../assets/design_process/phase6.png" class="w-10 md:w-20 lg:w-32 h-auto ">
        </div>
        <div class="md:text-right">
          <h3 class="mb-2"><span class="font-extrabold">Phase {{ phases[5].id }}:</span> {{ phases[5].name }}</h3>
          <p class="md:pl-8">{{ phases[5].description }}</p>
        </div>
      </div>

      <!-- 
      <div class="flex-col items-center justify-center w-full">
        <div class="flex-col items-center justify-center text-center mb-3 md:mb-8 text-xl">
          <img :src="curPhase.icon"
            class="h-8 md:h-16 lg:h-20 w-auto mx-auto my-2">
          <h3 class="underline">Phase {{ phaseIndex }}</h3>
          <h3>{{ curPhase.name }}</h3>
        </div>

        <div class="text-sm flex flex-col md:flex-row px-0 md:px-32">
          <p class="p-4">{{ curPhase.description }}</p>
          <div class="bg-background-light-navy rounded-xl p-4 md:w-2/3">
            <h4 class="font-bold mb-1">Key Features:</h4>
            <ul class="list-disc list-inside">
              <li v-for="feature in curPhase.key_features">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div> -->

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
