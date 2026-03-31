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
import type { SelectProps } from "react-aria-components";
import { UNSAFE_PortalProvider } from "@react-aria/overlays";
import { ChevronDown } from "lucide-react";

import styles from "./DropDown.module.css";

export interface DropDownProps<T extends object> extends SelectProps<T> {
  label?: string;
  placeholder?: string;
  children: React.ReactNode;
}

function DropDown<T extends object>({
  label,
  placeholder = "Filter by Region",
  children,
  ...props
}: DropDownProps<T>) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <UNSAFE_PortalProvider getContainer={() => containerRef.current!}>
        <Select {...props} className={styles.select}>
          {label && <Label>{label}</Label>}
          <Button className={styles.trigger}>
            <SelectValue className={styles.value}>
              {({ selectedText }) => selectedText || placeholder}
            </SelectValue>
            <span aria-hidden="true" className={styles.chevron}>
              <ChevronDown size={16} />
            </span>
          </Button>
          <Popover className={styles.popover} offset={8}>
            <ListBox className={styles.listbox}>
              {children}
            </ListBox>
          </Popover>
        </Select>
      </UNSAFE_PortalProvider>
    </div>
  );
}

export { ListBoxItem };
export default DropDown;
