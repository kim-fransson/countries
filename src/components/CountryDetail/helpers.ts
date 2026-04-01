import type { CountryDetail } from "@/types";

export function getNativeName(
  nativeName: CountryDetail["name"]["nativeName"],
): string {
  const entries = Object.values(nativeName);
  if (entries.length === 0) return "";
  return entries[0].common;
}

export function getCurrencies(
  currencies: CountryDetail["currencies"],
): string {
  return Object.values(currencies)
    .map((c) => c.name)
    .join(", ");
}

export function getLanguages(languages: CountryDetail["languages"]): string {
  return Object.values(languages).join(", ");
}

export function capitalsToString(capitals: string[]): string {
  return capitals.length <= 1
    ? (capitals[0] ?? "")
    : `${capitals.slice(0, -1).join(", ")} and ${capitals.at(-1)}`;
}
