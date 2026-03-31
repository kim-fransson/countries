import React from "react";

import Link from "next/link";
import DarkLightToggle from "../DarkLightToggle";

import styles from "./Header.module.css";

export type HeaderProps = {
  defaultTheme?: "light" | "dark";
};

function Header({ defaultTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.link}>
        <h1 className={styles.headline}>Where in the world?</h1>
      </Link>

      <DarkLightToggle defaultTheme={defaultTheme} />
    </header>
  );
}

export default Header;
