import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn } from "storybook/test";

import BaseButton from "./BaseButton";
import { LIGHT_COLORS, DARK_COLORS } from "@/constants";

const meta = {
  title: "BaseButton",
  component: BaseButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onPress: fn() },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "Back",
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

export const Dark: Story = {
  args: {
    children: "Back",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          ...(DARK_COLORS as React.CSSProperties),
          padding: "4rem",
          background: "#ebf2f6",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Interaction: Story = {
  args: {
    children: "Click me",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          ...(DARK_COLORS as React.CSSProperties),
          padding: "4rem",
          background: "#ebf2f6",
        }}
      >
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole("button", { name: "Click me" });
    await button.click();
    await expect(args.onPress).toHaveBeenCalled();
  },
};
