import Image from "next/image";
import React from "react";

import InfoList from "@/components/InfoList";

import styles from "./FlagCard.module.css";
import { capitalsToString } from "./helper";

interface FlagCardProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
  population: number;
  region: string;
  capitals: string[];
}

function FlagCard({
  name,
  imageSrc,
  imageAlt,
  population,
  region,
  capitals,
}: FlagCardProps) {
  const capitalsString = capitalsToString(capitals);

  return (
    <article className={styles.card}>
      <Image
        className={styles.image}
        width={264}
        height={160}
        src={imageSrc}
        alt={imageAlt}
      />
      <div className={styles.content}>
        <h2 className={styles.heading}>{name}</h2>
        <InfoList
          className={styles.infoList}
          items={[
            { label: "Population:", value: population.toLocaleString() },
            { label: "Region:", value: region },
            {
              label: capitals.length > 1 ? "Capitals:" : "Capital:",
              value: capitalsString,
            },
          ]}
        />
      </div>
    </article>
  );
}

export default FlagCard;
