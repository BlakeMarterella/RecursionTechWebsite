<script setup lang="ts">

</script>

<template>
<section class="relative">
      <div class="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div>
      <div class="bg-header-desktop absolute w-full h-full bg-no-repeat hidden lg:block bg-left -right-42.6%">
        <h1>Hello World</h1>
      </div>
      <div class="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-top -top-12 md:-top-16 bg-custom-mobile-mockup-size lg:hidden"></div>
      <div class="container h-screen relative z-20">
        <div class="h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center">
          <div class="h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 class="text-4xl lg:text-5xl text-primary-dark-blue pb-2">
              Recursion Tech
            </h1>
            <h2 class="text-xl lg:text-2xl text-primary-dark-blue pb-5">
              scalable. strategic. actionable.
            </h2>
            <p class="text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7">
              Welcome to Recursion Tech, where innovation meets execution. We engineer cutting-edge software solutions, tailor-made to propel your business into the future. Our step-by-step process ensures a seamless transition from ideas to reality, empowering your brand for tomorrow's challenges!
            </p>
            <button class="bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400">
               Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>.read-the-docs {
  color: #888;
}</style>
