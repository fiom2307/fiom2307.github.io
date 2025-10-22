<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { onClickOutside } from '@vueuse/core'

const { locale } = useI18n()
const open = ref(false)
const lang = ref(locale.value)
const dropdownRef = ref(null)

onClickOutside(dropdownRef, () => (open.value = false))

const langs = [
    { code: 'en', label: 'English'},
    { code: 'de', label: 'Deutsch'},
    { code: 'es', label: 'Español'},
]

const currentLangLabel = computed(() => {
    const found = langs.find(l => l.code === lang.value)
    return found ? found.label : 'Language'
})

function changeLang(code) {
    locale.value = code
    lang.value = code
    localStorage.setItem('lang', code)
    open.value = false
}

onMounted(() => {
    const saved = localStorage.getItem('lang')
    if (saved) {
        locale.value = saved
        lang.value = saved
    }
})
</script>

<template>
  <div ref="dropdownRef" class="relative inline-block text-left">
    <!-- Principal button -->
    <button
      @click="open = !open"
      class="flex items-center gap-1 text-sm font-bold hover:text-dark-pink"
    >
      <span>{{ currentLangLabel }}</span>
      <svg
        :class="{ 'rotate-180': open }"
        class="w-4 h-4 transition-transform"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition name="fade">
      <div
        v-if="open"
        class="absolute right-0 mt-2 w-40 rounded-md bg-pink-soft border border-dark-blue shadow-lg"
      >
        <div class="py-2">
          <p class="font-normal px-4 text-xs mb-1">Languages</p>
          <button
            v-for="l in langs"
            :key="l.code"
            @click="changeLang(l.code)"
            :class="[
              'w-full text-left px-4 py-2 text-sm',
              l.code === lang ? 'font-bold underline' : 'font-semibold hover:text-dark-pink'
            ]"
          >
            <span>{{ l.label }}</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

