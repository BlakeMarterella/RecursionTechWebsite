<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="flex w-full justify-center">
    <h1 class="text-2xl text-rt-orange">{{ msg }}</h1>
  </div>
  <button type="button" @click="count++">count is {{ count }}</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
