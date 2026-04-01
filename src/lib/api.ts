import type { Country } from "@/types";

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2";

export async function fetchAllCountries(): Promise<Country[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch countries: ${response.status}`);
  }

  return response.json();
}
