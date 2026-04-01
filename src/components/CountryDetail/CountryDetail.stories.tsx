import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LIGHT_COLORS, DARK_COLORS } from "@/constants";
import CountryDetail from "./CountryDetail";

const belgiumData = {
  country: {
    name: {
      common: "Belgium",
      official: "Kingdom of Belgium",
      nativeName: {
        deu: { official: "Königreich Belgien", common: "Belgien" },
        fra: { official: "Royaume de Belgique", common: "Belgique" },
        nld: { official: "Koninkrijk België", common: "België" },
      },
    },
    flags: {
      svg: "https://flagcdn.com/be.svg",
      alt: "The flag of Belgium is composed of three equal vertical bands of black, yellow and red.",
    },
    population: 11555997,
    region: "Europe",
    subregion: "Western Europe",
    capital: ["Brussels"],
    tld: [".be"],
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    languages: { deu: "German", fra: "French", nld: "Dutch" },
    borders: ["FRA", "DEU", "LUX", "NLD"],
  },
  borderCountries: [
    { name: { common: "France" }, cca2: "FR" },
    { name: { common: "Germany" }, cca2: "DE" },
    { name: { common: "Luxembourg" }, cca2: "LU" },
    { name: { common: "Netherlands" }, cca2: "NL" },
  ],
};

const meta = {
  title: "CountryDetail",
  component: CountryDetail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: belgiumData,
} satisfies Meta<typeof CountryDetail>;

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
          color: "var(--color-text)",
          maxWidth: 1280,
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
          color: "var(--color-text)",
          maxWidth: 1280,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const NoBorders: Story = {
  args: {
    country: {
      name: {
        common: "Japan",
        official: "Japan",
        nativeName: {
          jpn: { official: "日本", common: "日本" },
        },
      },
      flags: {
        svg: "https://flagcdn.com/jp.svg",
        alt: "The flag of Japan has a white field with a large red circle at the center.",
      },
      population: 125836021,
      region: "Asia",
      subregion: "Eastern Asia",
      capital: ["Tokyo"],
      tld: [".jp"],
      currencies: { JPY: { name: "Japanese yen", symbol: "¥" } },
      languages: { jpn: "Japanese" },
      borders: [],
    },
    borderCountries: [],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          ...(LIGHT_COLORS as React.CSSProperties),
          padding: "2rem",
          background: "var(--color-bg)",
          color: "var(--color-text)",
          maxWidth: 1280,
        }}
      >
        <Story />
      </div>
    ),
  ],
};
