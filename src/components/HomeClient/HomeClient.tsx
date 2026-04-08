"use client";

import React from "react";
import type { Key } from "react-aria-components";

import SearchField from "@/components/SearchField";
import DropDown, { SelectItem } from "@/components/Dropdown";
import FlagCardListView from "@/components/FlagCard/FlagCardListView";
import useDebounce from "@/hooks/useDebounce";
import useFilterAnnouncement from "@/hooks/useFilterAnnouncement";
import { REGION_OPTIONS } from "@/constants";
import type { Country } from "@/types";

import styles from "./HomeClient.module.css";

interface HomeClientProps {
  countries: Country[];
}

function HomeClient({ countries }: HomeClientProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const [selectedRegion, setSelectedRegion] =
    React.useState<Key | null>(null);

  const filteredCountries = React.useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
      const matchesRegion = selectedRegion
        ? country.region.toLowerCase() === selectedRegion
        : true;
      return matchesSearch && matchesRegion;
    });
  }, [countries, debouncedSearchTerm, selectedRegion]);

  useFilterAnnouncement(filteredCountries.length);

  function handleRegionChange(key: Key | null) {
    if (key === "all") {
      setSelectedRegion(null);
      return;
    }
    setSelectedRegion(key);
  }

  return (
    <>
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

      <FlagCardListView countries={filteredCountries} />
    </>
  );
}

export default HomeClient;
