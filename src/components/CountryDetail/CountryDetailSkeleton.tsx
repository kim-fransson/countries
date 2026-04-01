import styles from "./CountryDetailSkeleton.module.css";

function CountryDetailSkeleton() {
  return (
    <div className={styles.layout} aria-hidden="true">
      <div className={styles.flag} />

      <div className={styles.details}>
        <div className={styles.titleLine} />

        <div className={styles.stats}>
          <div className={styles.statGroup}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
          <div className={styles.statGroup}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        </div>

        <div className={styles.borders}>
          <div className={styles.bordersLabel} />
          <div className={styles.chip} />
          <div className={styles.chip} />
          <div className={styles.chip} />
        </div>
      </div>
    </div>
  );
}

export default CountryDetailSkeleton;
