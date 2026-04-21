import { Link } from "react-router-dom";
import { getGrammarTopicsBySection } from "../data/grammarTopics";
import { irregularVerbs } from "../data/irregularVerbs";
import { verbTenses } from "../data/verbTenses";

const cards = [
  {
    title: "Verb Tenses",
    description: "Structures, uses, signal words, and common mistakes.",
    to: "/verb-tenses",
    count: verbTenses.length
  },
  {
    title: "Modal Verbs",
    description: "Ability, permission, advice, obligation, possibility, and requests.",
    to: "/modal-verbs",
    count: getGrammarTopicsBySection("modal-verbs").length
  },
  {
    title: "Core Grammar",
    description: "WH questions, auxiliaries, prepositions, pronouns, and key contrasts.",
    to: "/core-grammar",
    count: getGrammarTopicsBySection("core-grammar").length
  },
  {
    title: "Irregular Verbs",
    description: "Infinitive, past simple, past participle, and examples.",
    to: "/irregular-verbs",
    count: irregularVerbs.length
  }
];

export function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          MVP
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight">
          A fast reference for studying English without jumping between tools.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Start with the essentials: verb tenses, irregular verbs, search, and
          filters. Expand only after the foundation is useful.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-950">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.description}</p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
                {card.count}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
