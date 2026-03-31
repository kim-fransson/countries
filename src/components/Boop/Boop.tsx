"use client";

import React from "react";
import useBoop from "@/hooks/useBoop";

import type { BoopConfig } from "@/hooks/useBoop";

type BoopProps = BoopConfig & {
  children: React.ReactNode;
};

function Boop({ children, ...boopConfig }: BoopProps) {
  const [style, trigger] = useBoop(boopConfig);

  return (
    <span onMouseEnter={trigger} style={{ display: "inline-block", ...style }}>
      {children}
    </span>
  );
}

export default Boop;
