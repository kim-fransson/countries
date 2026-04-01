"use client";

import React, { useEffect } from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BaseButton from "@/components/BaseButton";

import styles from "./error.module.css";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.main}>
      <MaxWidthWrapper>
        <div className={styles.errorContainer}>
          <h2 className={styles.heading}>Something went wrong</h2>
          <p className={styles.message}>
            We couldn&apos;t load this country. Please try again.
          </p>
          <BaseButton onPress={() => unstable_retry()}>Try again</BaseButton>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
