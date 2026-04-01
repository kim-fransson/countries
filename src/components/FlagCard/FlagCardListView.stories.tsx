import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent } from "storybook/test";
import { RouterProvider } from "react-aria-components";

import { LIGHT_COLORS, DARK_COLORS } from "@/constants";
import FlagCardListView from "./FlagCardListView";
import type { Country } from "@/types";

const SAMPLE_COUNTRIES: Country[] = [
  {
    name: { common: "Germany", official: "Federal Republic of Germany" },
    flags: {
      svg: "https://flagcdn.com/de.svg",
      alt: "The flag of Germany is composed of three equal horizontal bands of black, red and gold.",
    },
    population: 83491249,
    region: "Europe",
    capital: ["Berlin"],
    cca2: "DE",
  },
  {
    name: { common: "Brazil", official: "Federative Republic of Brazil" },
    flags: {
      svg: "https://flagcdn.com/br.svg",
      alt: "The flag of Brazil has a green field with a large yellow rhombus in the center.",
    },
    population: 214326223,
    region: "Americas",
    capital: ["Brasília"],
    cca2: "BR",
  },
  {
    name: { common: "Japan", official: "Japan" },
    flags: {
      svg: "https://flagcdn.com/jp.svg",
      alt: "The flag of Japan features a crimson-red circle at the center of a white field.",
    },
    population: 125681593,
    region: "Asia",
    capital: ["Tokyo"],
    cca2: "JP",
  },
  {
    name: { common: "Nigeria", official: "Federal Republic of Nigeria" },
    flags: {
      svg: "https://flagcdn.com/ng.svg",
      alt: "The flag of Nigeria is composed of three equal vertical bands of green, white and green.",
    },
    population: 218541212,
    region: "Africa",
    capital: ["Abuja"],
    cca2: "NG",
  },
  {
    name: { common: "Australia", official: "Commonwealth of Australia" },
    flags: {
      svg: "https://flagcdn.com/au.svg",
      alt: "The flag of Australia has a dark blue field.",
    },
    population: 25921089,
    region: "Oceania",
    capital: ["Canberra"],
    cca2: "AU",
  },
  {
    name: { common: "France", official: "French Republic" },
    flags: {
      svg: "https://flagcdn.com/fr.svg",
      alt: "The flag of France is composed of three equal vertical bands of blue, white and red.",
    },
    population: 67749632,
    region: "Europe",
    capital: ["Paris"],
    cca2: "FR",
  },
];

const navigate = fn();

const meta = {
  title: "FlagCardListView",
  component: FlagCardListView,
  decorators: [
    (Story) => (
      <RouterProvider navigate={navigate}>
        <Story />
      </RouterProvider>
    ),
  ],
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    countries: SAMPLE_COUNTRIES,
  },
} satisfies Meta<typeof FlagCardListView>;

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
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Empty: Story = {
  args: {
    countries: [],
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
};

export const KeyboardNavigation: Story = {
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
    const grid = canvas.getByRole("grid");
    await expect(grid).toBeInTheDocument();

    const items = canvas.getAllByRole("row");
    await expect(items.length).toBe(6);

    await userEvent.click(items[0]);
    await userEvent.keyboard("{ArrowRight}");
    await expect(items[1]).toHaveFocus();
  },
};
