export interface Country {
  name: string;
  code: string;
}

export interface RandomCountry {
  name: string;
  nextHoliday: string;
  holidayDate: string;
}

export interface CountryHolidayDetails {
  date: string;
  localName: string;
  name: string;
}
