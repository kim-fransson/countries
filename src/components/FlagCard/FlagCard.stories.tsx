import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn } from "storybook/test";

import { LIGHT_COLORS, DARK_COLORS } from "@/constants";
import FlagCard from "./FlagCard";

const meta = {
  title: "FlagCard",
  component: FlagCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    name: "Germany",
    imageSrc: "https://flagcdn.com/de.svg",
    imageAlt:
      "The flag of Germany is composed of three equal horizontal bands of black, red and gold.",
    population: 83491249,
    region: "Europe",
    capitals: ["Berlin"],
  },
} satisfies Meta<typeof FlagCard>;

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

export const MultipleCapitals: Story = {
  args: {
    name: "South Africa",
    imageSrc: "https://flagcdn.com/za.svg",
    imageAlt:
      "he flag of South Africa is composed of two equal horizontal bands of red and blue, with a yellow-edged black isosceles triangle superimposed on the hoist side of the field. This triangle has its base centered on the hoist end, spans about two-fifth the width and two-third the height of the field, and is enclosed on its sides by the arms of a white-edged green horizontally oriented Y-shaped band which extends along the boundary of the red and blue bands to the fly end of the field.",
    capitals: ["Pretoria", "Bloemfontein", "Cape Town"],
    region: "Africa",
    population: 63100945,
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

export const LongName: Story = {
  args: {
    name: "United Kingdom of Great Britain and Northern Ireland",
    imageSrc: "https://flagcdn.com/gb.svg",
    imageAlt:
      "The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew.",
    capitals: ["London"],
    region: "Europe",
    population: 69281437,
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
