"use client";

import {
  SearchField as RACSearchField,
  Label,
  Input,
  Button,
  FieldError,
  Text,
} from "react-aria-components";
import type {
  SearchFieldProps as RACSearchFieldProps,
  ValidationResult,
} from "react-aria-components";
import { Search, X } from "lucide-react";

import styles from "./SearchField.module.css";
import useBoop from "@/hooks/useBoop";

export interface SearchFieldProps extends RACSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

function SearchField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: SearchFieldProps) {
  const [style, trigger] = useBoop({ x: -2, y: -2, timing: 150 });
  return (
    <RACSearchField
      {...props}
      onMouseEnter={trigger}
      className={styles.searchField}
    >
      {label && <Label className={styles.label}>{label}</Label>}
      <div className={styles.inputWrapper}>
        <span
          aria-hidden
          className={styles.iconWrapper}
          style={style}
        >
          <Search size={20} />
        </span>
        <Input placeholder={placeholder} className={styles.input} />
      </div>
      <Button className={styles.clearButton}>
        <X size={14} aria-hidden />
      </Button>
      {description && (
        <Text slot='description' className={styles.description}>
          {description}
        </Text>
      )}
      <FieldError className={styles.error}>{errorMessage}</FieldError>
    </RACSearchField>
  );
}

export default SearchField;
