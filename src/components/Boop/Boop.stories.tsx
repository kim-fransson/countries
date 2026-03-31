import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Boop from "./Boop";

const meta = {
  title: "Boop",
  component: Boop,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Boop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rotation: Story = {
  args: {
    rotation: 20,
    timing: 150,
    children: "👋 Hover me",
  },
};

export const Scale: Story = {
  args: {
    scale: 1.2,
    timing: 150,
    children: "🔍 Hover me",
  },
};

export const TranslateX: Story = {
  args: {
    x: -5,
    timing: 150,
    children: "← Hover me",
  },
};
