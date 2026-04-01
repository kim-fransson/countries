import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LIGHT_COLORS, DARK_COLORS } from "@/constants";
import InfoList from "./InfoList";

const meta = {
  title: "InfoList",
  component: InfoList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Population:", value: "83,491,249" },
      { label: "Region:", value: "Europe" },
      { label: "Capital:", value: "Berlin" },
    ],
  },
} satisfies Meta<typeof InfoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompactLight: Story = {
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

export const CompactDark: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          ...(DARK_COLORS as React.CSSProperties),
          padding: "4rem",
          background: "var(--color-bg)",
          color: "var(--color-text)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const DetailedLight: Story = {
  args: {
    variant: "detailed",
    items: [
      { label: "Native Name:", value: "België" },
      { label: "Population:", value: "11,555,997" },
      { label: "Region:", value: "Europe" },
      { label: "Sub Region:", value: "Western Europe" },
      { label: "Capital:", value: "Brussels" },
    ],
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

export const DetailedDark: Story = {
  args: {
    variant: "detailed",
    items: [
      { label: "Top Level Domain:", value: ".be" },
      { label: "Currencies:", value: "Euro" },
      { label: "Languages:", value: "German, French, Dutch" },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          ...(DARK_COLORS as React.CSSProperties),
          padding: "4rem",
          background: "var(--color-bg)",
          color: "var(--color-text)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
