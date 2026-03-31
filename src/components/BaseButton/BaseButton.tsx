"use client";

import { Button as RACButton } from "react-aria-components";
import type { ButtonProps as RACButtonProps } from "react-aria-components";

import styles from "./BaseButton.module.css";

export type BaseButtonProps = RACButtonProps;

function BaseButton(props: BaseButtonProps) {
  return <RACButton {...props} className={styles.button} />;
}

export default BaseButton;
