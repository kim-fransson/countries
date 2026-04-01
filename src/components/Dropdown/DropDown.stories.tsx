import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";

import DropDown, { SelectItem } from "./DropDown";
import { REGION_OPTIONS } from "./helpers";
import { LIGHT_COLORS, DARK_COLORS } from "@/constants";
import { setCSSVariables } from "@/utils";

const meta = {
  title: "DropDown",
  component: DropDown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSelectionChange: fn(),
    "aria-label": "Filter by Region",
    placeholder: "Filter by Region",
  },
  render: (args) => (
    <DropDown {...args}>
      {REGION_OPTIONS.map((region) => (
        <SelectItem key={region.id} id={region.id}>
          {region.name}
        </SelectItem>
      ))}
    </DropDown>
  ),
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    (Story) => {
      setCSSVariables(LIGHT_COLORS);

      return (
        <div
          style={{
            padding: "4rem",
            background: "#ebf2f6",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export const Dark: Story = {
  decorators: [
    (Story) => {
      setCSSVariables(DARK_COLORS);

      return (
        <div
          style={{
            padding: "4rem",
            background: "#ebf2f6",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export const Interaction: Story = {
  decorators: [
    (Story) => {
      setCSSVariables(DARK_COLORS);

      return (
        <div
          style={{
            padding: "4rem",
            background: "#ebf2f6",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  play: async ({ canvas, canvasElement, args }) => {
    const trigger = canvas.getByRole("button");
    await userEvent.click(trigger);

    const body = within(canvasElement.ownerDocument.body);
    const option = body.getByRole("option", { name: "Europe" });
    await userEvent.click(option);

    await expect(args.onSelectionChange).toHaveBeenCalled();
    await expect(trigger).toHaveTextContent("Europe");
  },
};
