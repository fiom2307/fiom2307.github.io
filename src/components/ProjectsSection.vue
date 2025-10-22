<script setup>
import { useI18n } from 'vue-i18n'
import SectionTitle from './SectionTitle.vue'

const { t, tm } = useI18n()
</script>

<template>
  <section class="pt-14">
    <div class="max-w-4xl mx-auto px-6">
      <SectionTitle :title="t('projectsection.title')" />
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(project, index) in tm('projectsection.projects')"
          :key="index"
          :href="project.link"
          target="_blank"
          class="bg-pink/60 rounded-xl p-6 text-left shadow-md hover:shadow-lg hover:-translate-y-1 transition"
        >
          <font-awesome-icon :icon="['far', 'folder']" class="w-6 h-6" />
          <h3 class="font-bold text-lg mt-3  mb-2">{{ project.title }}</h3>
          <p class="text-sm mb-4 text-dark-blue">{{ project.description }}</p>
          <p class="text-xs text-dark-blue/70">
            {{ project.tags.join(' · ') }}
          </p>
        </a>
      </div>
    </div>
  </section>
</template>