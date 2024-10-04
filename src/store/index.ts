import { defineStore } from 'pinia';
import axios from 'axios';
import {
  Country,
  RandomCountry,
  CountryHolidayDetails,
} from '../interfaces/index';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useMainStore = defineStore('main', {
  state: () => ({
    countries: [] as Array<Country>,
    RandomCountries: [] as Array<RandomCountry>,
    selectedCountryCode: '',
    selectedCountryHolidaysByYear: [] as Array<CountryHolidayDetails>,
  }),

  actions: {
    async fetchCountries() {
      try {
        const response = await axios.get(`${API_BASE_URL}/AvailableCountries`);

        const mappedCountries: Array<Country> = response.data.map(
          (country: { countryCode: string; name: string }) => ({
            code: country.countryCode,
            name: country.name,
          }),
        );

        this.countries = mappedCountries;
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    },

    async fetchRandomCountryHolidays(countryCodes: string[]) {
      try {
        const holidayRequests = countryCodes.map((code) =>
          axios.get(`${API_BASE_URL}/NextPublicHolidays/${code}`),
        );

        const responses = await axios.all(holidayRequests);

        this.RandomCountries = responses.map((response, index) => {
          const countryName = this.countries.find(
            (country) => country.code === countryCodes[index],
          )?.name;

          return {
            name: countryName || 'Unknown Country',
            nextHoliday: response.data[0]?.name || 'No Upcoming Holidays',
            holidayDate: response.data[0]?.date || 'Unknown Date',
          };
        });
      } catch (error) {
        console.error('Error fetching random country holidays:', error);
      }
    },

    async fetchSelectedCountryHolidaysByYear(
      year: number,
      countryCode: string,
    ) {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/PublicHolidays/${year}/${countryCode}`,
        );

        this.selectedCountryHolidaysByYear = response.data.map(
          (holiday: any) => ({
            date: holiday.date,
            localName: holiday.localName,
            name: holiday.name,
          }),
        ) as Array<CountryHolidayDetails>;
      } catch (error) {
        console.error('Error fetching selected country holidays:', error);
      }
    },

    setSelectedCountryCode(code: string) {
      this.selectedCountryCode = code;
    },
  },

  getters: {
    getAllCountries: (state) => state.countries,
    getRandomCountriesWithHolidays: (state) => state.RandomCountries,
    getSelectedCountryHolidaysByYear: (state) =>
      state.selectedCountryHolidaysByYear,
  },
});
