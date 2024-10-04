<template>
  <div class="bg-gray-700 w-[80%] mb-4 p-6 rounded-[3em] text-white">
    <div class="p-1">Country: {{ props.name }}</div>
    <div class="p-1">Next Holiday: {{ props.nextHoliday }}</div>
    <div class="p-1">Date: {{ props.holidayDate }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  nextHoliday: string;
  holidayDate: string;
}>();
</script>
