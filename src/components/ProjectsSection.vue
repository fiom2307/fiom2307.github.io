<script setup>
import { useI18n } from 'vue-i18n'
import SectionTitle from './SectionTitle.vue'

const { t, tm } = useI18n()
</script>

<template>
  <section class="pt-14">
    <div class="max-w-5xl mx-auto px-6">
      <SectionTitle :title="t('projectsection.title')" />
      
      <div class="grid grid-cols-3 gap-6">
        <a
          v-for="(project, index) in tm('projectsection.projects')"
          :key="index"
          :href="project.link"
          target="_blank"
          class="bg-pink/60 rounded-xl p-6 text-left shadow-md hover:shadow-lg hover:-translate-y-1 transition"
        >
          <div class="mb-3 text-3xl">📁</div>
          <h3 class="font-bold text-lg mb-2">{{ project.title }}</h3>
          <p class="text-sm mb-4 text-dark-blue">{{ project.description }}</p>
          <p class="text-xs text-dark-blue/70">
            {{ project.tags.join(' · ') }}
          </p>
        </a>
      </div>
    </div>
  </section>
</template>