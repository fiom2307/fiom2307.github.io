<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/Footer.vue'
import AboutSection from './components/AboutSection.vue'
</script>

<template>
  <Navbar />

  <main class="min-h-screen bg-pink-soft text-center text-dark-blue font-sans">

    <HeroSection />

    <AboutSection />

    <ProjectsSection />

    <ContactSection />

  </main>
</template>

<style scoped>
</style>
