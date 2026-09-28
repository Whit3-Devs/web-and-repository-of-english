import { resolveRelatedTopic } from "../features/navigation/relatedTopicsResolver";
import { PillLink } from "./ui";

type RelatedTopicsSectionProps = {
  items: string[];
};

/**
 * Renders a "Related topics" block where each label becomes a clickable
 * PillLink when it resolves to a real grammar topic or verb tense route,
 * and plain (non-interactive) text otherwise.
 *
 * Visual container matches ContentSection's "default" variant so replacing
 * `<ContentSection title="Related topics" items={...} />` with this
 * component does not change the surrounding layout.
 */
export function RelatedTopicsSection({ items }: RelatedTopicsSectionProps) {
  return (
    <div className="rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
      <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">Related topics</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => {
          const resolved = resolveRelatedTopic(item);

          if (resolved.path) {
            return (
              <PillLink key={item} to={resolved.path}>
                {item}
              </PillLink>
            );
          }

          return (
            <span
              key={item}
              className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
