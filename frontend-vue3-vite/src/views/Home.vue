<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue';
import Overview from '../components/Overview.vue';
import Solutions from '../components/Solutions.vue';
import Testimonials from '../components/Testimonials.vue';
import Footer from '../components/Footer.vue';
import Contact from '../components/Contact.vue';
import Pythagoras from '../components/Pythagoras.vue';
</script>

<template>
    <!-- TODO Add Navbar -->

    <div class="relative overflow-hidden">
        <MainHeader />
    </div>
    
    <Overview />
    <Solutions />
    <Testimonials />
    <Contact />

    <Footer />
</template>

