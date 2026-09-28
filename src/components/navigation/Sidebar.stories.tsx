import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const meta = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <div className="h-[720px] w-72 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
        <Story />
      </div>
    )
  ],
  tags: ["autodocs"]
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

export const ActiveRouteExpanded: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/verb-tenses/present-perfect"]}>
        <Story />
      </MemoryRouter>
    )
  ]
};
