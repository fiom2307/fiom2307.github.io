<script setup>
import { useI18n } from 'vue-i18n'
import SectionTitle from './SectionTitle.vue'
import ContactForm from './ContactForm.vue'

const { t } = useI18n()
</script>

<template>
    <section id="contact" class="py-14">
        <div class="max-w-5xl mx-auto px-6">
            <SectionTitle :title="t('contactmesection.title')" />

            <ContactForm />
        </div>
    </section>
</template>