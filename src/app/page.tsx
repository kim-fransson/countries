"use client";

import React from "react";
import type { Key } from "react-aria-components";

import SearchField from "@/components/SearchField";
import DropDown, { SelectItem } from "@/components/Dropdown";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import useDebounce from "@/hooks/useDebounce";

import styles from "./page.module.css";
import { REGION_OPTIONS } from "@/constants";

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const [selectedRegion, setSelectedRegion] =
    React.useState<Key | null>(null);

  function handleRegionChange(key: Key | null) {
    if (key === "all") {
      setSelectedRegion(null);
      return;
    }
    setSelectedRegion(key);
  }

  return (
    <main className={styles.main}>
      <MaxWidthWrapper className={styles.wrapper}>
        <div className={styles.controls}>
          <div className={styles.searchWrapper}>
            <SearchField
              aria-label='Search for a country'
              placeholder='Search for a country...'
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
          <DropDown
            aria-label='Filter by Region'
            placeholder='Filter by Region'
            value={selectedRegion ?? "all"}
            onChange={handleRegionChange}
          >
            <SelectItem id='all'>All Regions</SelectItem>
            {REGION_OPTIONS.map((region) => (
              <SelectItem key={region.id} id={region.id}>
                {region.name}
              </SelectItem>
            ))}
          </DropDown>
        </div>

        {/* FlagCardListView will go here */}
        <div />
      </MaxWidthWrapper>
    </main>
  );
}
