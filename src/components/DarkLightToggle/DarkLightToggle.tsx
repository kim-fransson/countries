"use client";

import React from "react";
import { ToggleButton } from "react-aria-components";
import { Moon, Sun } from "lucide-react";
import Cookie from "js-cookie";

import useBoop from "@/hooks/useBoop";
import {
  THEME_COOKIE_NAME,
  LIGHT_COLORS,
  DARK_COLORS,
} from "@/constants";
import { setCSSVariables } from "@/utils";

import styles from "./DarkLightToggle.module.css";

export type DarkLightToggleProps = {
  defaultTheme?: "light" | "dark";
};

function DarkLightToggle({
  defaultTheme = "light",
}: DarkLightToggleProps) {
  const [theme, setTheme] = React.useState<"light" | "dark">(
    defaultTheme,
  );
  const [iconStyle, triggerBoop] = useBoop({
    rotation: 20,
    timing: 150,
  });

  function handleThemeChange(isSelected: boolean) {
    const nextTheme = isSelected ? "dark" : "light";
    setTheme(nextTheme);
    Cookie.set(THEME_COOKIE_NAME, nextTheme, { expires: 1000 });
    const root = document.documentElement;
    const colors = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;
    root.setAttribute("data-color-theme", nextTheme);
    setCSSVariables(colors);
  }

  const isLightMode = theme === "light";
  const ariaLabel = isLightMode
    ? "Toggle dark mode"
    : "Toggle light mode";
  const Icon = isLightMode ? <Moon size={20} /> : <Sun size={20} />;
  const label = isLightMode ? "Dark Mode" : "Light Mode";

  return (
    <ToggleButton
      className={styles.button}
      isSelected={!isLightMode}
      onChange={handleThemeChange}
      onHoverStart={triggerBoop}
      aria-label={ariaLabel}
    >
      <span className={styles.iconWrapper} style={iconStyle}>
        {Icon}
      </span>
      {label}
    </ToggleButton>
  );
}

export default DarkLightToggle;
