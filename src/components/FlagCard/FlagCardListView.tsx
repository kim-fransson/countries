"use client";

import React, { useCallback } from "react";
import { GridList, GridListItem } from "react-aria-components";

import FlagCard from "./FlagCard";
import type { Country } from "@/types";
import styles from "./FlagCardListView.module.css";

interface FlagCardListViewProps {
  countries: Country[];
}

function FlagCardListView({ countries }: FlagCardListViewProps) {
  const handleFocus = useCallback((e: React.FocusEvent) => {
    const target = e.target as HTMLElement;
    if (target.matches("[role=row]")) {
      target.scrollIntoView({ block: "center" });
    }
  }, []);

  return (
    <div onFocus={handleFocus}>
      <GridList
        aria-label='Countries'
        layout='grid'
        items={countries}
        className={styles.grid}
        renderEmptyState={() => (
          <p className={styles.emptyState}>
            No countries found. Try adjusting your search or filter.
          </p>
        )}
      >
        {(country) => (
          <GridListItem
            id={country.cca2}
            href={`/countries/${country.cca2.toLowerCase()}`}
            textValue={country.name.common}
            className={styles.gridItem}
          >
            <FlagCard
              name={country.name.common}
              imageSrc={country.flags.svg}
              imageAlt={
                country.flags.alt || `Flag of ${country.name.common}`
              }
              population={country.population}
              region={country.region}
              capitals={country.capital ?? []}
            />
          </GridListItem>
        )}
      </GridList>
    </div>
  );
}

export default FlagCardListView;
