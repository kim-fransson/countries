import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import DarkLightToggle from "./DarkLightToggle";
import { LIGHT_COLORS, DARK_COLORS } from "@/constants";

const meta = {
  title: "DarkLightToggle",
  component: DarkLightToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DarkLightToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    defaultTheme: "light",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          ...(LIGHT_COLORS as React.CSSProperties),
          padding: "4rem",
          background: "var(--color-bg)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: {
    defaultTheme: "dark",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          ...(DARK_COLORS as React.CSSProperties),
          padding: "2rem",
          background: "var(--color-bg)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Interaction: Story = {
  args: {
    defaultTheme: "light",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          ...(LIGHT_COLORS as React.CSSProperties),
          padding: "2rem",
          background: "var(--color-bg)",
        }}
      >
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", {
      name: "Toggle dark mode",
    });
    await button.click();
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(button).toHaveAccessibleName("Toggle light mode");
    await button.click();
    await expect(button).toHaveAttribute("aria-pressed", "false");
    await expect(button).toHaveAccessibleName("Toggle dark mode");
  },
};
