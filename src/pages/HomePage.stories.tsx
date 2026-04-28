import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Link } from "react-router-dom";
import { Badge, Card } from "../components/ui";

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
      <Card>
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
            <Link
              key={topic.label}
              to={topic.to}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:bg-blue-950/60 dark:hover:text-blue-200"
            >
              {topic.label}
            </Link>
          ))}
        </div>

        <div className="mt-5">
          <Link
            to="/verb-tenses"
            className="text-sm font-bold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
          >
            View all verb tenses →
          </Link>
        </div>
      </Card>
    </section>
  )
};
