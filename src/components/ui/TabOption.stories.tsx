import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabOption } from "./TabOption";

const meta = {
  title: "UI/TabOption",
  component: TabOption,
  args: {
    active: false,
    label: "Decision Map",
    description: "Choose the right tense by communicative intention.",
    id: "decision-map-tab",
    panelId: "decision-map-panel",
    onClick: () => undefined
  },
  tags: ["autodocs"]
} satisfies Meta<typeof TabOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Inactive: Story = {};

export const Active: Story = {
  args: {
    active: true
  }
};
