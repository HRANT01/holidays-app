<template>
  <div v-for="country in props.randomCountries" :key="country.name">
    <RandomCountryCard
      :holiday-date="country.holidayDate"
      :name="country.name"
      :next-holiday="country.nextHoliday"
    />
  </div>
</template>

<script setup lang="ts">
import RandomCountryCard from './RandomCountryCard.vue';
import { RandomCountry } from '../interfaces/index';

const props = defineProps<{
  randomCountries: RandomCountry[];
}>();
</script>
