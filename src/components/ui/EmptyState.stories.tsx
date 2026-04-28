import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { BackLink } from "./BackLink";
import { EmptyState } from "./EmptyState";

const meta = {
  title: "UI/EmptyState",
  component: EmptyState,
  args: {
    eyebrow: "Grammar",
    title: "Topic not found",
    description: "The requested topic does not exist in the current cheatsheet data."
  },
  tags: ["autodocs"]
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAction: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    action: <BackLink to="/sentence-building" label="Back to Sentence building" />
  }
};
