<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

import 'swiper/css'
import 'swiper/css/navigation'

import smallGarden from '@/assets/small-garden.png'
import InfoCard from '@/components/InfoCard.vue'
import MapCard from '@/components/MapCard.vue'

const birthDate = new Date('2004-07-23')

function calculateAge(date) {
  const today = new Date()
  let age = today.getFullYear() - date.getFullYear()
  const m = today.getMonth() - date.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--
  }
  return age
}

const age = calculateAge(birthDate)
</script>

<template>
  <Swiper
    :modules="[Navigation]"
    navigation
    class="mySwiper w-full bg-dark-blue text-pink-soft"
  >
    <SwiperSlide>
        <div class="flex justify-center items-end gap-12 mx-auto px-8">
            <!-- Texto -->
            <div class="text-left py-20">
                <h1 class="text-5xl font-extrabold mb-2">
                    {{ t('hero.slide1.title') }}<span class="text-pink">Fiorella</span>,
                </h1>
                <h2 class="text-3xl font-semibold mb-6">
                    {{ t('hero.slide1.subtitle') }}
                </h2>
                <p class="text-lg text-pink-soft max-w-2xl">
                    {{ t('hero.slide1.description') }}
                </p>
            </div>

            <img
            :src="smallGarden"
            alt="Flowers"
            class="w-72 h-auto"
            />
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div class="flex justify-center gap-8 flex-wrap py-6">
            <InfoCard>
                <p class="text-lg mb-2">I’m</p>
                <p class="text-7xl font-extrabold text-pink">{{ age }}</p>
                <p class="text-lg mt-2">years old</p>
            </InfoCard>

            <InfoCard>
                <p class="text-lg mb-4">I’m from Lima, Peru</p>
                <MapCard />
            </InfoCard>

            <InfoCard>
                <p class="text-md mb-4">I speak</p>
                <div class="flex flex-col gap-3 text-left">
                    <a
                    href="/Fiorella_Milla_CV.pdf"
                    target="_blank"
                    class="text-base font-medium hover:underline transition"
                    >
                        <span class="fi fi-de"></span> German - C2
                    </a>
                    <a
                    href="/Fiorella_Milla_CV.pdf"
                    target="_blank"
                    class="text-base font-medium hover:underline transition"
                    >
                        <span class="fi fi-gb"></span> English - B2
                    </a>
                    <div
                    class="text-base font-medium"
                    >
                        <span class="fi fi-es"></span> Spanish - native speaker
                    </div>
                </div>
            </InfoCard>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style>

.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
  color: #ffeff4;
  width: 1rem;
  height: 1rem;
}

.mySwiper .swiper-button-next:hover,
.mySwiper .swiper-button-prev:hover {
  color: #27476e;
  transition: color 0.3s ease;
}

.mySwiper .swiper-button-next {
  right: 1.5rem;
}
.mySwiper .swiper-button-prev {
  left: 1.5rem;
}
</style>