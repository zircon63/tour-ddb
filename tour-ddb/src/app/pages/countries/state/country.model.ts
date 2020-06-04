import { CountryInterface } from '@backend/countries/country.interface';

export interface Country extends CountryInterface {
}

export function createCountry(params: Partial<Country>) {
  return {} as Country;
}
