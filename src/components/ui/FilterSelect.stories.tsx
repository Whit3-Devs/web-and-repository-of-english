import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterSelect } from "./FilterSelect";

const meta = {
  title: "UI/FilterSelect",
  component: FilterSelect,
  args: {
    label: "Category",
    value: "all",
    onChange: () => undefined,
    options: [
      { value: "all", label: "all" },
      { value: "present", label: "present" },
      { value: "past", label: "past" },
      { value: "future", label: "future" }
    ]
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FilterSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
