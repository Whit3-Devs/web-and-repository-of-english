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

export const Interactive: Story = {
  args: {
    interactive: true,
    children: (
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700 dark:text-blue-300">
          Study path
        </p>
        <h3 className="mt-2 text-xl font-black text-slate-950 dark:text-slate-50">
          Question Builder Cheat Sheet
        </h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Use interactive cards for navigable learning blocks, topic previews,
          or surfaces that contain links/actions.
        </p>
        <a
          className="mt-5 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:focus-visible:ring-blue-950"
          href="#"
        >
          Open topic
        </a>
      </div>
    )
  }
};
