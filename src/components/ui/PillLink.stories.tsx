import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { PillLink } from "./PillLink";

const meta = {
  title: "UI/PillLink",
  component: PillLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    to: "/sentence-building/question-builder-cheat-sheet",
    children: "Question Builder Cheat Sheet"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof PillLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
