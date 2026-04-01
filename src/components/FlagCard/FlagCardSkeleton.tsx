import React from "react";

import styles from "./FlagCardSkeleton.module.css";

function FlagCardSkeleton() {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.imagePlaceholder} />
      <div className={styles.content}>
        <div className={styles.titleLine} />
        <div className={styles.infoLines}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
    </div>
  );
}

export default FlagCardSkeleton;
