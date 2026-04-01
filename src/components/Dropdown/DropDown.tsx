"use client";

import React from "react";
import {
  Select,
  Label,
  Button,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
} from "react-aria-components";
import type {
  ListBoxItemProps,
  SelectProps,
} from "react-aria-components";
import { ChevronDown } from "lucide-react";

import { DropDownItem } from "./DropDownItem";
import { motion } from "motion/react";
import styles from "./DropDown.module.css";
import useBoop from "@/hooks/useBoop";

export interface DropDownProps<
  T extends object,
> extends SelectProps<T> {
  label?: string;
  placeholder?: string;
  children: React.ReactNode;
}

function DropDown<T extends object>({
  label,
  placeholder,
  children,
  ...props
}: DropDownProps<T>) {
  const [style, trigger] = useBoop({ y: 2 });
  return (
    <Select {...props} className={styles.select}>
      {label && <Label>{label}</Label>}
      <Button className={styles.trigger} onHoverStart={trigger}>
        <SelectValue className={styles.value}>
          {({ selectedText }) => selectedText || placeholder}
        </SelectValue>
        <span
          aria-hidden='true'
          className={styles.chevron}
        >
          <span style={style}>
            <ChevronDown size={16} />
          </span>
        </span>
      </Button>
      <Popover className={styles.popover} offset={8}>
        <ListBox className={styles.listbox}>{children}</ListBox>
      </Popover>
    </Select>
  );
}

export function SelectItem(props: ListBoxItemProps) {
  return <DropDownItem {...props} />;
}

export { ListBoxItem };
export default DropDown;
