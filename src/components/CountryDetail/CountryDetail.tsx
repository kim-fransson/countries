import Image from "next/image";

import InfoList from "@/components/InfoList";
import Chip from "@/components/Chip";

import type { CountryDetail as CountryDetailType, BorderCountry } from "@/types";

import {
  getNativeName,
  getCurrencies,
  getLanguages,
  capitalsToString,
} from "./helpers";
import styles from "./CountryDetail.module.css";

interface CountryDetailProps {
  country: CountryDetailType;
  borderCountries: BorderCountry[];
}

function CountryDetail({ country, borderCountries }: CountryDetailProps) {
  const leftStats = [
    { label: "Native Name:", value: getNativeName(country.name.nativeName) },
    { label: "Population:", value: country.population.toLocaleString() },
    { label: "Region:", value: country.region },
    { label: "Sub Region:", value: country.subregion },
    {
      label: country.capital.length > 1 ? "Capitals:" : "Capital:",
      value: capitalsToString(country.capital),
    },
  ];

  const rightStats = [
    { label: "Top Level Domain:", value: country.tld.join(", ") },
    { label: "Currencies:", value: getCurrencies(country.currencies) },
    { label: "Languages:", value: getLanguages(country.languages) },
  ];

  return (
    <div className={styles.layout}>
      <Image
        className={styles.flag}
        src={country.flags.svg}
        alt={country.flags.alt || `Flag of ${country.name.common}`}
        width={560}
        height={401}
      />

      <div className={styles.details}>
        <h2 className={styles.countryName}>{country.name.common}</h2>

        <div className={styles.stats}>
          <InfoList variant="detailed" items={leftStats} />
          <InfoList variant="detailed" items={rightStats} />
        </div>

        {borderCountries.length > 0 && (
          <div className={styles.bordersSection}>
            <span className={styles.bordersLabel}>Border Countries:</span>
            <div className={styles.bordersList}>
              {borderCountries.map((border) => (
                <Chip
                  key={border.cca2}
                  href={`/countries/${border.cca2.toLowerCase()}`}
                >
                  {border.name.common}
                </Chip>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDetail;
