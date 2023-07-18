<template>
  <h1>Recursion Tech</h1>
  <PythagorasFractal />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import PythagorasFractal from '@/components/Pythagoras.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    PythagorasFractal
  },
});
</script>
