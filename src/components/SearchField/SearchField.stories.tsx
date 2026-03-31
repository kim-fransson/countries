import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent } from "storybook/test";

import SearchField from "./SearchField";
import { LIGHT_COLORS, DARK_COLORS } from "@/constants";

const meta = {
  title: "SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    onSubmit: fn(),
    onClear: fn(),
    "aria-label": "Search",
    placeholder: "Search...",
  },
} satisfies Meta<typeof SearchField>;

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
          background: "#ebf2f6",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Interaction: Story = {
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
  play: async ({ canvas, args }) => {
    const input = canvas.getByRole("searchbox");

    await userEvent.type(input, "Sweden");
    await expect(args.onChange).toHaveBeenCalled();

    const clearButton = canvas.getByRole("button");
    await clearButton.click();
    await expect(args.onClear).toHaveBeenCalled();
    await expect(input).toHaveValue("");
  },
};
