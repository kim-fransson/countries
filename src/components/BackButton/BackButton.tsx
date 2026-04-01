"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import BaseButton from "@/components/BaseButton";
import useBoop from "@/hooks/useBoop";

import type { BaseButtonProps } from "@/components/BaseButton";

export type BackButtonProps = Omit<BaseButtonProps, "children">;

function BackButton({ onPress, ...props }: BackButtonProps) {
  const [style, trigger] = useBoop({ x: -3, timing: 150 });

  const handlePress = onPress ?? (() => window.history.back());

  return (
    <BaseButton {...props} onPress={handlePress} onHoverStart={trigger}>
      <ArrowLeft size={20} style={style} />
      Back
    </BaseButton>
  );
}

export default BackButton;
