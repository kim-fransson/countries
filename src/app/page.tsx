import { Suspense } from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HomeClient from "@/components/HomeClient";
import FlagCardSkeletonGrid from "@/components/FlagCard/FlagCardSkeletonGrid";
import { fetchAllCountries } from "@/lib/api";

import styles from "./page.module.css";

async function CountriesLoader() {
  const countries = await fetchAllCountries();

  countries.sort((a, b) => (a.name.common < b.name.common ? -1 : 1));

  return <HomeClient countries={countries} />;
}

export default function Home() {
  return (
    <main className={styles.main}>
      <MaxWidthWrapper className={styles.wrapper}>
        <Suspense fallback={<FlagCardSkeletonGrid />}>
          <CountriesLoader />
        </Suspense>
      </MaxWidthWrapper>
    </main>
  );
}
