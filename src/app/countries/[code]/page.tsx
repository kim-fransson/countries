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

async function CountryDetailLoader({ code }: { code: string }) {
  const country = await fetchCountryByCode(code);
  const borderCountries = await fetchCountriesByCodes(country.borders);

  return (
    <CountryDetail country={country} borderCountries={borderCountries} />
  );
}

export default async function CountryDetailPage({
  params,
}: CountryDetailPageProps) {
  const { code } = await params;

  return (
    <main className={styles.main}>
      <MaxWidthWrapper className={styles.wrapper}>
        <BackButton />
        <Suspense fallback={<CountryDetailSkeleton />}>
          <CountryDetailLoader code={code} />
        </Suspense>
      </MaxWidthWrapper>
    </main>
  );
}
