<script setup>
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    import emailjs from 'emailjs-com'

    const { t } = useI18n()

    const form = ref({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    async function sendMessage() {
        try {
            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: form.value.name,
                    email: form.value.email,
                    subject: form.value.subject,
                    message: form.value.message,
                },
                USER_ID
            )
            console.log('SUCCESS', result.text)
            alert('Message sent successfully!')
            form.value = { name: '', email: '', subject: '', message: '' }
        } catch (error) {
            console.error('ERROR', error)
            alert('Failed to send message. Please try again later.')
        }
    }
</script>

<template>
  <form @submit.prevent="sendMessage" class="flex flex-col gap-2 text-left">
    <!-- Name -->
    <div>
      <label class="text-sm mb-1">{{ t('contactmesection.contactform.name') }}</label>
      <input
        v-model="form.name"
        type="text"
        required
        class="w-full p-2 bg-pink-soft border border-dark-blue rounded-lg focus:ring-2 focus:ring-dark-blue/20 focus:outline-none"
      />
    </div>

    <!-- Email -->
    <div>
      <label class="text-sm mb-1">{{ t('contactmesection.contactform.email') }}</label>
      <input
        v-model="form.email"
        type="email"
        required
        class="w-full p-2 bg-pink-soft border border-dark-blue rounded-lg focus:ring-2 focus:ring-dark-blue/20 focus:outline-none"
      />
    </div>

    <!-- Subject -->
    <div>
      <label class="text-sm mb-1">{{ t('contactmesection.contactform.subject') }}</label>
      <input
        v-model="form.subject"
        type="text"
        required
        class="w-full p-2 bg-pink-soft border border-dark-blue rounded-lg focus:ring-2 focus:ring-dark-blue/20 focus:outline-none"
      />
    </div>

    <!-- Message -->
    <div>
      <label class="text-sm mb-1">{{ t('contactmesection.contactform.message') }}</label>
      <textarea
        v-model="form.message"
        rows="4"
        required
        class="w-full p-2 bg-pink-soft border border-dark-blue rounded-lg focus:ring-2 focus:ring-dark-blue/20 focus:outline-none"
      ></textarea>
    </div>

    <!-- Submit -->
    <button
      type="submit"
      class="mt-2 bg-dark-blue text-pink-soft font-semibold py-2 rounded-lg hover:bg-dark-pink transition"
    >
      {{ t('contactmesection.contactform.send') }}
    </button>
  </form>
</template>