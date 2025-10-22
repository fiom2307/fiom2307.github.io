<script setup>
import { useI18n } from 'vue-i18n'
import SectionTitle from './SectionTitle.vue'

const { t } = useI18n()
</script>

<template>
  <section class="pt-14">
    <div class="max-w-4xl mx-auto px-6 text-left text-lg leading-relaxed">
      <SectionTitle :title="t('aboutsection.title')" />

      <div class="whitespace-pre-line">
        {{ t('aboutsection.content.intro') }}
      </div>
        
      <div class="pt-2">
        {{ t('aboutsection.content.motivation') }}
      </div>

      <div class="pt-4">
        {{ t('aboutsection.content.languages.intro') }}
        <a
            href="/certificates/Abitur.pdf"
            target="_blank"
            class="hover:underline transition"
        >
            {{ t('aboutsection.content.languages.german') }}
        </a>, 
        <a
            href="/certificates/FCE.pdf"
            target="_blank"
            class="hover:underline transition"
        >
            {{ t('aboutsection.content.languages.english') }}
        </a>, 
        <a>
            {{ t('aboutsection.content.languages.spanish') }}
        </a>.
      </div>

    </div>
  </section>
</template>