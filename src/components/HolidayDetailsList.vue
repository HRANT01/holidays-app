<template>
  <div>
    <div
      v-for="countryDetails in props.countryDetails"
      :key="countryDetails.name"
      class="text-center"
    >
      <CountryDetailsCard
        :name="countryDetails.name"
        :localName="countryDetails.localName"
        :date="countryDetails.date"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountryHolidayDetails } from '../interfaces/index';
import CountryDetailsCard from './CountryDetailsCard.vue';

const props = defineProps<{
  countryDetails: CountryHolidayDetails[];
}>();
</script>
