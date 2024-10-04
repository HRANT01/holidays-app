<template>
  <div class="year-selector flex justify-center space-x-2 mb-4 pt-7">
    <button
      v-for="year in years"
      :key="year"
      @click="selectYear(year)"
      :class="{
        'bg-blue-500 text-white': year === selectedYear,
        'bg-gray-200 text-gray-600': year !== selectedYear,
      }"
      class="px-4 py-2 rounded focus:outline-none hover:bg-blue-400"
    >
      {{ year }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'yearChanged', year: number): void;
}>();

const years = Array.from({ length: 11 }, (_, i) => 2020 + i);
const selectedYear = ref<number>(2024);

const selectYear = (year: number) => {
  selectedYear.value = year;
  emit('yearChanged', year);
};
</script>

<style scoped>
.year-selector button {
  transition: background-color 0.3s ease;
}
</style>
