<template>
  <div
    :class="'flex flex-col p-4 bg-gray-700 text-white rounded-lg justify-center items-center mb-3 bg-'"
    @click="$emit('clicked-country')"
  >
    <div class="text-center text-[2vw]">Name: {{ props.name }}</div>
    <div class="text-center ml-3 text-[1.5vw] font-bold">
      Local Name: {{ props.localName }}
    </div>
    <div class="text-center ml-3 text-[1.5vw] font-bold">
      Date: {{ props.date }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountryHolidayDetails } from '../interfaces';

const props = defineProps<CountryHolidayDetails>();
</script>
