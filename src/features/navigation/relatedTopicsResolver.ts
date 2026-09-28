import { grammarTopics } from "../../data/grammarTopics";
import { verbTenses } from "../../data/verbTenses";

export type ResolvedRelatedTopic = {
  label: string;
  path: string | null;
};

/**
 * Resolves a "related topics" label (a plain string stored in the content
 * data) to a real route, if one exists.
 *
 * Matching order:
 * 1. Exact match against a GrammarTopic.title
 * 2. Exact match against a VerbTense.name
 * 3. Case-insensitive match against a GrammarTopic.title
 * 4. Case-insensitive match against a VerbTense.name
 *
 * Some labels are generic groupings (e.g. "Verb Tenses") with no matching
 * route. That is expected: callers should render those as plain text using
 * the null `path`, without warning or throwing.
 */
export function resolveRelatedTopic(label: string): ResolvedRelatedTopic {
  const exactGrammarTopic = grammarTopics.find((topic) => topic.title === label);
  if (exactGrammarTopic) {
    return { label, path: exactGrammarTopic.fullExplanationPath };
  }

  const exactVerbTense = verbTenses.find((tense) => tense.name === label);
  if (exactVerbTense) {
    return { label, path: exactVerbTense.fullExplanationPath };
  }

  const normalizedLabel = label.toLowerCase();

  const caseInsensitiveGrammarTopic = grammarTopics.find(
    (topic) => topic.title.toLowerCase() === normalizedLabel
  );
  if (caseInsensitiveGrammarTopic) {
    return { label, path: caseInsensitiveGrammarTopic.fullExplanationPath };
  }

  const caseInsensitiveVerbTense = verbTenses.find(
    (tense) => tense.name.toLowerCase() === normalizedLabel
  );
  if (caseInsensitiveVerbTense) {
    return { label, path: caseInsensitiveVerbTense.fullExplanationPath };
  }

  return { label, path: null };
}
