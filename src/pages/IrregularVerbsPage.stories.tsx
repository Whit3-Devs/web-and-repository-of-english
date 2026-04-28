import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter, Link } from "react-router-dom";
import { Badge, Card } from "../components/ui";

const meta = {
  title: "Pages/IrregularVerbsPage/Composition",
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

const verbs = [
  {
    id: "begin",
    infinitive: "begin",
    pastSimple: "began",
    pastParticiple: "begun",
    frequency: "high",
    fullExplanationPath: "/irregular-verbs/begin"
  },
  {
    id: "drink",
    infinitive: "drink",
    pastSimple: "drank",
    pastParticiple: "drunk",
    frequency: "medium",
    fullExplanationPath: "/irregular-verbs/drink"
  }
];

export const PatternGroup: Story = {
  render: () => (
    <section>
      <Card interactive>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
              ABC — All forms different
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              The infinitive, past simple, and past participle all change.
            </p>
          </div>
          <div className="rounded-2xl bg-amber-50 px-4 py-3 text-right dark:bg-amber-950/40">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
              Memory label
            </p>
            <p className="mt-1 font-bold text-amber-950 dark:text-amber-100">
              Three different forms
            </p>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-4 gap-4 bg-slate-100 px-5 py-3 text-sm font-bold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            <span>Infinitive</span>
            <span>Past</span>
            <span>Participle</span>
            <span>Frequency</span>
          </div>

          {verbs.map((verb) => (
            <article
              key={verb.id}
              className="grid grid-cols-1 gap-2 border-t border-slate-100 px-5 py-4 text-slate-700 dark:border-slate-800 dark:text-slate-300 md:grid-cols-4 md:gap-4"
            >
              <Link
                to={verb.fullExplanationPath}
                className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:text-blue-700 dark:text-blue-300 dark:decoration-slate-600 dark:hover:text-blue-200"
              >
                {verb.infinitive}
              </Link>
              <span>{verb.pastSimple}</span>
              <span>{verb.pastParticiple}</span>
              <Badge variant="neutral" className="capitalize">
                {verb.frequency}
              </Badge>
            </article>
          ))}
        </div>
      </Card>
    </section>
  )
};
