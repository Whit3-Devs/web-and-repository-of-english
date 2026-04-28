import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { FullExplanationLink } from "../components/FullExplanationLink";
import { Badge, Card } from "../components/ui";

const meta = {
  title: "Pages/VerbTensesPage/Composition",
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

export const FullTenseCard: Story = {
  render: () => (
    <article>
      <Card interactive>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
              Present Perfect
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Use it for past actions connected to the present, experiences, and
              results that still matter now.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="neutral" className="capitalize">
              perfect
            </Badge>
            <FullExplanationLink
              to="/verb-tenses/present-perfect"
              available
            />
          </div>
        </div>

        <dl className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/40">
            <dt className="font-bold text-emerald-900 dark:text-emerald-100">
              Affirmative
            </dt>
            <dd className="mt-1 text-emerald-800 dark:text-emerald-200">
              Subject + have/has + past participle
            </dd>
          </div>
          <div className="rounded-2xl bg-rose-50 p-4 dark:bg-rose-950/40">
            <dt className="font-bold text-rose-900 dark:text-rose-100">
              Negative
            </dt>
            <dd className="mt-1 text-rose-800 dark:text-rose-200">
              Subject + have/has not + past participle
            </dd>
          </div>
          <div className="rounded-2xl bg-blue-50 p-4 dark:bg-blue-950/40">
            <dt className="font-bold text-blue-900 dark:text-blue-100">
              Interrogative
            </dt>
            <dd className="mt-1 text-blue-800 dark:text-blue-200">
              Have/Has + subject + past participle?
            </dd>
          </div>
        </dl>
      </Card>
    </article>
  )
};
