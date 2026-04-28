import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { BackLink } from "./BackLink";

const meta = {
  title: "UI/BackLink",
  component: BackLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    to: "/verb-tenses",
    label: "Back to Verb tenses"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof BackLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
