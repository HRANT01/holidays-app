<template>
  <div>
    <div
      v-for="country in props.countries"
      :key="country.code"
      class="text-center"
    >
      <CountryCard
        :name="country.name"
        :code="country.code"
        @click="goToCountry(country.name, country.code)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import CountryCard from './CountryCard.vue';
import { Country } from '../../src/interfaces/index';
import { useMainStore } from '../store';

const props = defineProps<{
  countries: Country[];
}>();

const router = useRouter();
const mainStore = useMainStore();

const goToCountry = (countryName: string, countryCode: string) => {
  mainStore.setSelectedCountryCode(countryCode);
  let formattedCountryName = countryName.replace(/ /g, '');
  router.push({ path: `/${formattedCountryName}` });
};
</script>

<style scoped></style>
