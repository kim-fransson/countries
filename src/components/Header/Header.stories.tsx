import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn } from "storybook/test";

import { LIGHT_COLORS, DARK_COLORS } from "@/constants";
import Header from "./Header";
import { setCSSVariables } from "@/utils";

const meta = {
  title: "Header",
  component: Header,
  parameters: {
    layout: "full",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    defaultTheme: "light",
  },
  decorators: [
    (Story) => {
      setCSSVariables(LIGHT_COLORS);

      return <Story />;
    },
  ],
};

export const Dark: Story = {
  args: {
    defaultTheme: "dark",
  },
  decorators: [
    (Story) => {
      setCSSVariables(DARK_COLORS);

      return <Story />;
    },
  ],
};
