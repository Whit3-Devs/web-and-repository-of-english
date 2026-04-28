import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta = {
  title: "UI/Card",
  component: Card,
  args: {
    children: (
      <div>
        <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">
          Study block
        </h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Use cards to group related learning content without distracting from
          the explanation.
        </p>
      </div>
    )
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Muted: Story = {
  args: {
    variant: "muted"
  }
};

export const Highlight: Story = {
  args: {
    variant: "highlight",
    children: (
      <div>
        <h3 className="text-xl font-black">Core grammar</h3>
        <p className="mt-3 text-slate-200">
          Reserve highlighted cards for hero or high-emphasis regions.
        </p>
      </div>
    )
  }
};
