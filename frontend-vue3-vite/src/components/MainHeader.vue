<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<section class="relative">
      <div class="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div>
      <div class="bg-header-desktop absolute w-full h-full bg-no-repeat hidden lg:block bg-left -right-42.6%"></div>
      <div class="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-top -top-12 md:-top-16 bg-custom-mobile-mockup-size lg:hidden"></div>
      <div class="container h-screen relative z-20">
        <div class="h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center">
          <div class="h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 class="text-4xl lg:text-5xl text-primary-dark-blue pb-5">
              Next generation digital banking
            </h1>
            <p class="text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button class="bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400">
              Request Invite
            </button>
          </div>
        </div>
      </div>
    </section>


  <div class="flex w-full justify-center">
    <h1 class="text-2xl text-rt-orange">{{ msg }}</h1>
  </div>
<button type="button" @click="count++">count is {{ count }}</button></template>

<style scoped>.read-the-docs {
  color: #888;
}</style>
