<template>
  <div
    :class="'cursor-pointer country-button transition-transform border border-black p-4 bg-gray-700 text-white rounded-lg flex justify-center items-center mb-3 bg-'"
    @click="$emit('clicked-country')"
  >
    <div class="text-center text-[2vw]">{{ props.name }}</div>
    <div class="text-center ml-3 text-[1.5vw] font-bold">{{ props.code }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  code: string;
}>();
</script>

<style scoped>
.country-button {
  transition: transform 0.3s ease; /* Smooth transition */
}

.country-button:active {
  transform: scale(0.95); /* Scale down effect */
}
</style>
