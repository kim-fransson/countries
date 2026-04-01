import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LIGHT_COLORS, DARK_COLORS } from "@/constants";
import FlagCardSkeleton from "./FlagCardSkeleton";

const meta = {
  title: "FlagCardSkeleton",
  component: FlagCardSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FlagCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          ...(LIGHT_COLORS as React.CSSProperties),
          padding: "4rem",
          background: "#ebf2f6",
          width: 264,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          ...(DARK_COLORS as React.CSSProperties),
          padding: "4rem",
          background: "var(--color-bg)",
          width: 264,
        }}
      >
        <Story />
      </div>
    ),
  ],
};
