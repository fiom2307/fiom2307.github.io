<script setup>
    defineProps({
    title: {
        type: String,
        required: true,
    },
    })
</script>

<template>
    <div class="flex items-center gap-4 mb-8">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <div class="flex-1 h-[2px] bg-dark-blue"></div>
    </div>
</template>