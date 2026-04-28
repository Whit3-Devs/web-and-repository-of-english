import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";
import { PageHeader } from "./PageHeader";

const meta = {
  title: "UI/PageHeader",
  component: PageHeader,
  args: {
    eyebrow: "Grammar topic",
    title: "Verb tenses",
    description:
      "Learn how English tenses describe time, continuity and completion with practical examples."
  },
  tags: ["autodocs"]
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    actions: <Badge variant="success">Available now</Badge>
  }
};
