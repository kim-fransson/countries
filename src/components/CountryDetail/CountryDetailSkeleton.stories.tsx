import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LIGHT_COLORS, DARK_COLORS } from "@/constants";
import CountryDetailSkeleton from "./CountryDetailSkeleton";

const meta = {
  title: "CountryDetailSkeleton",
  component: CountryDetailSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CountryDetailSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          ...(LIGHT_COLORS as React.CSSProperties),
          padding: "2rem",
          background: "var(--color-bg)",
          maxWidth: 1280,
          width: "100%",
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
          padding: "2rem",
          background: "var(--color-bg)",
          maxWidth: 1280,
          width: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
