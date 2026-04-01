import type { Country, CountryDetail, BorderCountry } from "@/types";

const BASE_URL = "https://restcountries.com/v3.1";

const ALL_COUNTRIES_URL = `${BASE_URL}/all?fields=name,flags,population,region,capital,cca2`;

const COUNTRY_DETAIL_FIELDS =
  "name,flags,population,region,subregion,capital,tld,currencies,languages,borders";

export async function fetchAllCountries(): Promise<Country[]> {
  const response = await fetch(ALL_COUNTRIES_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch countries: ${response.status}`);
  }

  return response.json();
}

export async function fetchCountryByCode(
  code: string,
): Promise<CountryDetail> {
  const response = await fetch(
    `${BASE_URL}/alpha/${code}?fields=${COUNTRY_DETAIL_FIELDS}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch country ${code}: ${response.status}`);
  }

  return response.json();
}

export async function fetchCountriesByCodes(
  codes: string[],
): Promise<BorderCountry[]> {
  if (codes.length === 0) {
    return [];
  }

  const response = await fetch(
    `${BASE_URL}/alpha?codes=${codes.join(",")}&fields=name,cca2`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch border countries: ${response.status}`);
  }

  return response.json();
}
