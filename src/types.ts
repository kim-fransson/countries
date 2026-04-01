export interface Country {
  name: { common: string; official: string };
  flags: { svg: string; alt: string };
  population: number;
  region: string;
  capital: string[];
  cca2: string;
}

export interface CountryDetail {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { common: string; official: string }>;
  };
  flags: { svg: string; alt: string };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  languages: Record<string, string>;
  borders: string[];
}

export interface BorderCountry {
  name: { common: string };
  cca2: string;
}
