import Image from "next/image";
import React from "react";

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
        <dl className={styles.infoList}>
          <div className={styles.item}>
            <dt>Population:</dt>
            <dd>{population.toLocaleString()}</dd>
          </div>

          <div className={styles.item}>
            <dt>Region:</dt>
            <dd>{region}</dd>
          </div>

          <div className={styles.item}>
            <dt>{capitals.length > 1 ? "Capitals:" : "Capital:"}</dt>
            <dd>{capitalsString}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default FlagCard;
