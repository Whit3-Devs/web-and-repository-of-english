import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { ActionLink, Badge, Card, PillLink } from "../components/ui";

const meta = {
  title: "Pages/HomePage/Composition",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const topics = [
  { label: "Present Simple", to: "/verb-tenses/present-simple" },
  { label: "Present Continuous", to: "/verb-tenses/present-continuous" },
  { label: "Present Perfect", to: "/verb-tenses/present-perfect" },
  { label: "Future Simple", to: "/verb-tenses/future-simple" }
];

export const DirectorySection: Story = {
  render: () => (
    <section>
      <Card interactive>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-950 dark:text-slate-50">
              Verb Tenses
            </h3>
            <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-400">
              Open any tense directly and jump into its full explanation route.
            </p>
          </div>
          <Badge variant="primary">{topics.length}</Badge>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {topics.map((topic) => (
            <PillLink
              key={topic.label}
              to={topic.to}
            >
              {topic.label}
            </PillLink>
          ))}
        </div>

        <div className="mt-5">
          <ActionLink
            to="/verb-tenses"
            variant="text"
          >
            View all verb tenses →
          </ActionLink>
        </div>
      </Card>
    </section>
  )
};
