<script setup>
    import { onMounted } from 'vue'
    import L from 'leaflet'
    import 'leaflet/dist/leaflet.css'

    onMounted(() => {
        const map = L.map('map').setView([-12.0464, -77.0428], 2) // Lima 🇵🇪

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '',
        }).addTo(map)

        L.marker([-12.0464, -77.0428]).addTo(map)
    })
</script>

<template>
  <div
    id="map"
    class="rounded-lg w-64 h-40"
  ></div>
</template>