<script setup lang="ts">

</script>

<template>
  <section class="relative bg-background-dark-navy">
    <!-- Mobile Background -->
    <div class="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div>
    <!-- Desktop Background -->
    <div class="bg-header-desktop absolute w-full h-full bg-no-repeat hidden lg:block bg-left -right-42.6%"></div>
    <!-- Content -->
    <div class="container mr-32 h-screen relative z-20">
      <div class="h-full w-full flex">
    <!-- Content on the left -->
    <div class="w-1/2 mr-32 h-full flex flex-col justify-end pb-4 lg:pb-0 lg:justify-center">
        <div class="h-1/2 pr-12 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 class="text-4xl lg:text-5xl text-neutral-white pb-2">
                Recursion Tech
            </h1>
            <h2 class="text-xl lg:text-2xl text-neutral-very-light-gray pb-5">
                Innovation meets Execution
            </h2>
            <p class="text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7">
                We engineer cutting-edge software solutions to propel your business into the future. 
                
                Our step-by-step process ensures a seamless transition
                from ideas to reality, empowering your brand for tomorrow's challenges!
            </p>
            <button
                class="bg-primary-blue px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-blue to-primary-teal hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400">
                Learn More
            </button>
        </div>
    </div>

    <!-- RT logo on the right -->
    <div class="w-1/2 h-full flex justify-center items-center">
        <!-- <img src="../assets/logo.svg" alt="Recursion Tech Logo" class=" w-80 h-80"> -->
        <svg class="w-80 h-80 animate-fade-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><line x1="-15" y1="0" x2="125" y2="0" transform="matrix(.559193 0.829038-7.461338 5.032736 37.387894 162.435564)" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="9"/><line x1="-15" y1="0" x2="125" y2="0" transform="matrix(.559193 0.829038-7.461338 5.032736 107.770828 162.818485)" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linejoin="bevel"/><line x1="-15" y1="0" x2="125" y2="0" transform="matrix(.559193 0.829038-7.461338 5.032736 177.387908 162.435554)" fill="none" stroke="#FFFFFF" stroke-width="3"/><line x1="-27.439746" y1="0" x2="112.560254" y2="0" transform="matrix(.559193-.829038 7.461338 5.032736 44.012162 127.334407)" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="9"/><line x1="-27.439746" y1="0" x2="112.560254" y2="0" transform="matrix(.559193-.829038 7.461338 5.032736 114.344111 127.9232)" fill="none" stroke="#FFFFFF" stroke-width="3"/><rect width="6.864956" height="5.130021" rx="0" ry="0" transform="matrix(1.429171 0 0 1.968803 21.568551 144.992497)" fill="#FFFFFF"/><rect width="6.864956" height="5.130021" rx="0" ry="0" transform="matrix(1.115574 0 0 1.968803 91.817236 145.032987)" fill="#FFFFFF"/><rect width="6.864956" height="5.130021" rx="0" ry="0" transform="matrix(1.115574 0 0 1.968803 161.420817 144.949993)" fill="#FFFFFF"/><rect width="10.413112" height="10.268121" rx="0" ry="0" transform="matrix(1.43947 0 0 1.014384 236.11103 263.230225)" fill="#FFFFFF"/><rect width="10.413112" height="10.268121" rx="0" ry="0" transform="matrix(1.43947 0 0 1.014384 166.010638 263.287685)" fill="#FFFFFF"/><rect width="10.413112" height="10.268121" rx="0" ry="0" transform="matrix(1.43947 0 0 1.014384 95.646419 263.230225)" fill="#FFFFFF"/><rect width="5.022548" height="10.268121" rx="0" ry="0" transform="matrix(1.393715 0 0 0.973888 169.000015 23.869528)" fill="#FFFFFF"/><path d="M158.635988,33.93474q69.651028,0,69.651028,58.03263q0,58.628662-77.727997,58.075127" transform="matrix(1.272991 0 0 1-29.086821 2.42167)" fill="none" stroke="#FFFFFF" stroke-width="25"/><polygon points="3.573608,-11.808407 19.033818,5.531216 -14.020053,5.531216 -1.903462,-11.808407" transform="matrix(-1 0 0-1 114.680237 32.017953)" fill="#FFFFFF"/><polygon points="35.044456,-11.808407 23.221155,5.531216 10.434192,4.651642 -1.903462,-11.808407" transform="matrix(-1 0 0-1 191.56975 29.400744)" fill="#FFFFFF"/><polygon points="9.260816,-6.907608 8.191301,19.084871 -9.454908,-6.907608 5.358105,-6.965068" transform="matrix(-1 0 0-1 259.291693 266.738434)" fill="#FFFFFF"/><polygon points="9.260816,-6.907608 8.191301,19.084871 -9.454908,-6.907608 5.358105,-6.965068" transform="matrix(-1 0 0-1 189.326859 266.738434)" fill="#FFFFFF"/><polygon points="9.260816,-6.907608 8.191301,19.084871 -9.454908,-6.907608 5.358105,-6.965068" transform="matrix(-1 0 0-1 119.245382 266.680974)" fill="#FFFFFF"/><polygon points="-5.361093,-12.179095 0.904024,-2.871349 -6.622199,8.239526 -9.97578,-4.386737" transform="matrix(-1.164622 0 0-1.073288 13.122428 146.579996)" fill="#FFFFFF"/><polygon points="-5.361093,-12.179095 0.904024,-2.871349 -6.622199,8.239526 -9.97578,-4.386737" transform="matrix(-1.164622 0 0-1.073288 83.554202 147.181526)" fill="#FFFFFF"/><polygon points="5.256652,-10.530667 5.256656,3.034932 -5.174623,3.507732 -11.566153,-10.530667" transform="matrix(.723358 0 0-1.234933 166.31656 144.57975)" fill="#FFFFFF"/></svg>
    </div>
</div>

    </div>
  </section>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
