import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LIGHT_COLORS, DARK_COLORS } from "@/constants";
import Chip from "./Chip";

const meta = {
  title: "Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    href: "/countries/fr",
    children: "France",
  },
} satisfies Meta<typeof Chip>;

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
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const LongName: Story = {
  args: {
    href: "/countries/nl",
    children: "Netherlands",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          ...(LIGHT_COLORS as React.CSSProperties),
          padding: "4rem",
          background: "#ebf2f6",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
