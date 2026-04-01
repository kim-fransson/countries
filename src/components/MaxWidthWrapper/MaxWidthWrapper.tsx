import React from "react";

import styles from "./MaxWidthWrapper.module.css";
import clsx from "clsx";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

function MaxWidthWrapper({
  children,
  as: Template = "div",
  className,
}: MaxWidthWrapperProps) {
  return (
    <Template className={clsx(styles.wrapper, className)}>
      {children}
    </Template>
  );
}

export default MaxWidthWrapper;
