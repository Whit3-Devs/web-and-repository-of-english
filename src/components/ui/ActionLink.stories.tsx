import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { ActionLink } from "./ActionLink";

const meta = {
  title: "UI/ActionLink",
  component: ActionLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    to: "/verb-tenses",
    children: "Full explanation"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ActionLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Soft: Story = {};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Back to Verb Tenses"
  }
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "View all verb tenses →"
  }
};
