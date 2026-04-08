import type { Metadata } from "next";
import { Suspense } from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BackButton from "@/components/BackButton";
import CountryDetail from "@/components/CountryDetail";
import { CountryDetailSkeleton } from "@/components/CountryDetail";
import { fetchCountryByCode, fetchCountriesByCodes } from "@/lib/api";

import styles from "./page.module.css";

interface CountryDetailPageProps {
  params: Promise<{ code: string }>;
}

export async function generateMetadata({
  params,
}: CountryDetailPageProps): Promise<Metadata> {
  const { code } = await params;
  const country = await fetchCountryByCode(code);

  const capital = country.capital?.[0];
  const languages = Object.values(country.languages).join(", ");
  const description = `${country.name.official}${capital ? ` — Capital: ${capital}.` : ""} Population: ${country.population.toLocaleString("en-US")}. Region: ${country.region}. Languages: ${languages}.`;

  return {
    title: country.name.common,
    description,
    icons: {
      icon: country.flags.svg,
    },
  };
}

async function CountryDetailLoader({ code }: { code: string }) {
  const country = await fetchCountryByCode(code);
  const borderCountries = await fetchCountriesByCodes(
    country.borders,
  );

  return (
    <CountryDetail
      country={country}
      borderCountries={borderCountries}
    />
  );
}

export default async function CountryDetailPage({
  params,
}: CountryDetailPageProps) {
  const { code } = await params;

  return (
    <main className={styles.main}>
      <MaxWidthWrapper className={styles.wrapper}>
        <div>
          <BackButton className={styles.backBtn} />
        </div>
        <Suspense fallback={<CountryDetailSkeleton />}>
          <CountryDetailLoader code={code} />
        </Suspense>
      </MaxWidthWrapper>
    </main>
  );
}
