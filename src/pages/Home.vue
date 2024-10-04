<template>
  <div class="flex h-screen bg-slate-500">
    <div class="basis-1/2 pl-4 mt-10">
      <div class="w-[50%] m-auto">
        <CustomInput
          v-model="countrySearch"
          placeholder="Search Country By Name"
        />
      </div>
      <div class="mt-6 mb-3 font-bold text-2xl text-center text-white">
        Countries List
      </div>
      <div class="max-h-[70vh] overflow-auto max-w-[70%] m-auto">
        <CountriesList :countries="filteredCountries" />
      </div>
    </div>

    <div class="basis-1/2 pl-4 h-screen flex items-center justify-center">
      <div class="w-full max-w-[80%]">
        <RandomCountriesSection :random-countries="randomCountries" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import CustomInput from '../components/UI/CustomInput.vue';
import CountriesList from '../components/CountriesList.vue';
import RandomCountriesSection from '../components/RandomCountriesSection.vue';
import { useMainStore } from '../store';
import { Country, RandomCountry } from '../interfaces';

const mainStore = useMainStore();

function getRandomCountries(countries: Country[], count: number) {
  const shuffled = countries.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const countries = computed<Country[]>(() => mainStore.countries);
const countrySearch = ref<string>('');

const filteredCountries = computed<Country[]>(() => {
  const searchTerm = countrySearch.value.toLowerCase();
  return countries.value.filter((country) =>
    country.name.toLowerCase().includes(searchTerm),
  );
});

const randomCountiesCodes = computed<string[]>(() => {
  const allCountries = countries.value;
  return getRandomCountries(allCountries, 3).map((country) => country.code);
});

const randomCountries = computed<RandomCountry[]>(
  () => mainStore.RandomCountries,
);

onMounted(async () => {
  await mainStore.fetchCountries();
  await mainStore.fetchRandomCountryHolidays(randomCountiesCodes.value);
  console.log('Random Country Names:', randomCountiesCodes.value);
});
</script>
