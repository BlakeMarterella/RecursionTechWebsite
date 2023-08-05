<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue';
import Overview from '../components/Overview.vue';
import Solutions from '../components/Solutions.vue';
import Pythagoras from '../components/Pythagoras.vue';
</script>

<template>
    <!-- TODO Add Navbar -->

    <!-- Site Content Wrapper -->
    <div class="relative overflow-hidden">
        <div class="hidden lg:block w-full h-full absolute">
            <div
                class="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28">
            </div>
        </div>
        <MainHeader />
        <Overview />
        <Solutions />
    </div>

    <!-- TODO Add Footer -->
</template>

