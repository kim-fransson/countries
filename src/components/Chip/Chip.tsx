"use client";

import { Link } from "react-aria-components";

import styles from "./Chip.module.css";

interface ChipProps {
  href: string;
  children: React.ReactNode;
}

function Chip({ href, children }: ChipProps) {
  return (
    <Link href={href} className={styles.chip}>
      {children}
    </Link>
  );
}

export default Chip;
