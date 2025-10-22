<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactMeSection from './components/ContactMeSection.vue'
</script>

<template>
  <Navbar />

  <main class="min-h-screen bg-pink-soft text-center text-dark-blue font-sans">

    <HeroSection />

    <ProjectsSection />

    <ContactMeSection />

  </main>
</template>

<style scoped>
</style>
