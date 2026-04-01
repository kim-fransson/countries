import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BackButton from "@/components/BackButton";

import styles from "./page.module.css";

interface CountryDetailPageProps {
  params: Promise<{ code: string }>;
}

export default async function CountryDetailPage({
  params,
}: CountryDetailPageProps) {
  const { code } = await params;

  return (
    <main className={styles.main}>
      <MaxWidthWrapper>
        <BackButton />
        <p>Country detail page for: {code.toUpperCase()}</p>
      </MaxWidthWrapper>
    </main>
  );
}
