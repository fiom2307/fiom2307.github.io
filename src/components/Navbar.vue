<script setup>
import flowerBlue from '@/assets/flower-blue.png'
import Dropdown from './Dropdown.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <header
    class="sticky top-0 left-0 w-full bg-pink-soft flex justify-between items-center px-10 py-4 z-50 text-dark-blue"
  >

    <div class="flex items-center gap-4 cursor-pointer" @click="scrollToTop">
        <img :src="flowerBlue" alt="Flower" class="w-8 h-8" />
        <h1 class="text-xl font-sans font-bold">Fiorella Milla</h1>
    </div>
    
    <nav class="flex items-center gap-6 text-sm font-bold">
      <Dropdown />

      <div class="flex gap-4 text-dark-blue">
        <a href="https://www.linkedin.com/in/fiorella-milla/" target="_blank" class="hover:text-dark-pink transition">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="w-6 h-6" />
        </a>
        <a href="https://github.com/fiom2307" target="_blank" class="hover:text-dark-pink transition">
          <font-awesome-icon :icon="['fab', 'github']" class="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/fio_milla_/" target="_blank" class="hover:text-dark-pink transition">
          <font-awesome-icon :icon="['fab', 'instagram']" class="w-6 h-6" />
        </a>
      </div>

      <a href="/Fiorella_Milla_CV.pdf" target="_blank"
        class="bg-dark-blue text-pink-soft font-semibold px-5 py-2 rounded-lg hover:bg-dark-pink transition">
        {{ t('navbar.cv') }}
      </a>
    </nav>
  </header>
</template>
