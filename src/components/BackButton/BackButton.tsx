"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import BaseButton from "@/components/BaseButton";
import useBoop from "@/hooks/useBoop";

import type { BaseButtonProps } from "@/components/BaseButton";
import { useRouter } from "next/navigation";

export type BackButtonProps = Omit<BaseButtonProps, "children">;

function BackButton({ onPress, ...props }: BackButtonProps) {
  const [style, trigger] = useBoop({ x: -3, timing: 150 });

  const router = useRouter();

  const handlePress = onPress ?? (() => router.push("/"));

  return (
    <BaseButton
      {...props}
      onPress={handlePress}
      onHoverStart={trigger}
    >
      <ArrowLeft size={20} style={style} />
      Back to countries
    </BaseButton>
  );
}

export default BackButton;
