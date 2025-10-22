<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

import smallGarden from '@/assets/small-garden.png'
</script>

<template>
  <section class="bg-dark-blue text-pink-soft">
    <div class="flex justify-center items-end gap-12 px-6">
        <!-- Texto -->
      <div class="text-left py-20">
          <h1 class="text-5xl font-extrabold mb-2">
              {{ t('hero.title') }}<span class="text-pink">Fiorella Milla</span>,
          </h1>
          <h2 class="text-3xl font-semibold mb-6">
              {{ t('hero.subtitle') }}
          </h2>
          <p class="text-lg text-pink-soft max-w-2xl">
              {{ t('hero.description') }}
          </p>
      </div>

      <img
      :src="smallGarden"
      alt="Flowers"
      class="hidden md:block w-72 h-auto"
      />
    </div>
  </section>
</template>