<template>
  <div class="bg-slate-500 h-screen">
    <div class="absolute top-2 left-2">
      <RouterLink to="/">
        <div class="hover:text-blue-500 text-white">
          <span class="text-2xl"><</span>
          <span class="text-xl"> HOME</span>
        </div>
      </RouterLink>
    </div>
    <div><YearsNavigation @year-changed="selectYear" /></div>
    <div class="text-center text-[2vw] text-white font-bold">
      {{ route.params.country }} Holidays
    </div>
    <div class="h-[75vh] mt-4 m-auto overflow-auto w-[80%]">
      <HolidayDetailsList :country-details="countryDetails" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import YearsNavigation from '../components/YearsNavigation.vue';
import HolidayDetailsList from '../components/HolidayDetailsList.vue';
import { CountryHolidayDetails } from '../interfaces';
import { useMainStore } from '../store';
import { useRoute } from 'vue-router';

const store = useMainStore();
const route = useRoute();

const selectedYear = ref<number>(2024);
const selectedCountryCode = computed<string>(() => store.selectedCountryCode);

const selectYear = (year: number) => {
  selectedYear.value = year;
  store.fetchSelectedCountryHolidaysByYear(year, selectedCountryCode.value);
};

const countryDetails = computed<CountryHolidayDetails[]>(
  () => store.getSelectedCountryHolidaysByYear,
);

onMounted(() => {
  store.fetchSelectedCountryHolidaysByYear(
    selectedYear.value,
    selectedCountryCode.value,
  );
});
</script>
