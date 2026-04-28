import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionCard } from "./SectionCard";

const meta = {
  title: "UI/SectionCard",
  component: SectionCard,
  args: {
    title: "When to use it",
    description: "A compact section for rules, examples, notes and learning patterns.",
    children: (
      <ul className="space-y-2">
        <li>• Keep related ideas together.</li>
        <li>• Prefer short, scannable content.</li>
        <li>• Use semantic variants, not random colors.</li>
      </ul>
    )
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SectionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2">
      <SectionCard title="Default" variant="default">
        Neutral explanation block.
      </SectionCard>
      <SectionCard title="Primary" variant="primary">
        Main learning idea or important rule.
      </SectionCard>
      <SectionCard title="Warning" variant="warning">
        Memory hook or caution.
      </SectionCard>
      <SectionCard title="Danger" variant="danger">
        Common mistake or wrong structure.
      </SectionCard>
    </div>
  )
};
