import { matchesIrregularVerb } from "../features/cheatsheet/search";
import type {
  IrregularVerb,
  IrregularVerbFrequency,
  IrregularVerbPatternDefinition,
  IrregularVerbPatternFamily,
  IrregularVerbPatternGroup
} from "../shared/types/content";
import { splitVerbFormVariants } from "../shared/utils/verbFormVariants";

export const irregularVerbPatternDefinitions: IrregularVerbPatternDefinition[] = [
  {
    key: "aaa",
    code: "AAA",
    title: "All forms the same",
    memoryLabel: "one shape all the way",
    explanation:
      "The infinitive, past simple, and past participle stay the same."
  },
  {
    key: "abb",
    code: "ABB",
    title: "Past = participle",
    memoryLabel: "two forms match at the end",
    explanation:
      "The past simple and past participle match, while the infinitive changes."
  },
  {
    key: "aba",
    code: "ABA",
    title: "Infinitive = participle",
    memoryLabel: "first and last match",
    explanation:
      "The infinitive and past participle match, while the past simple changes."
  },
  {
    key: "abc",
    code: "ABC",
    title: "All forms different",
    memoryLabel: "three different shapes",
    explanation:
      "Each form changes, so you need to remember all three shapes."
  },
  {
    key: "mixed",
    code: "MIXED",
    title: "Mixed / special forms",
    memoryLabel: "irregular inside the irregulars",
    explanation:
      "Use this for special cases such as split past forms like was/were, or beat, beat, beaten."
  }
];

export function getIrregularVerbPatternGroups(
  irregularVerbs: IrregularVerb[],
  filters: { searchTerm?: string; frequency?: IrregularVerbFrequency }
) {
  const searchTerm = filters.searchTerm ?? "";
  const frequencyFilteredVerbs = irregularVerbs.filter((verb) =>
    filters.frequency ? verb.frequency === filters.frequency : true
  );

  return irregularVerbPatternDefinitions
    .map((definition) => {
      const verbsInFamily = frequencyFilteredVerbs.filter(
        (verb) => getIrregularVerbPatternFamily(verb) === definition.key
      );

      const matchesFamilySearch = matchesPatternDefinition(definition, searchTerm);
      const visibleVerbs = matchesFamilySearch
        ? verbsInFamily
        : verbsInFamily.filter((verb) => matchesIrregularVerb(verb, searchTerm));

      return {
        ...definition,
        verbs: visibleVerbs
      } satisfies IrregularVerbPatternGroup;
    })
    .filter((group) => group.verbs.length > 0);
}

export function getIrregularVerbPatternFamily(
  irregularVerb: IrregularVerb
): IrregularVerbPatternFamily {
  const infinitive = normalizePatternPart(irregularVerb.infinitive);
  const pastSimpleVariants = splitVerbFormVariants(normalizePatternPart(irregularVerb.pastSimple));
  const pastParticipleVariants = splitVerbFormVariants(
    normalizePatternPart(irregularVerb.pastParticiple)
  );

  // A split past that shares nothing with the participle (was/were vs been) is special.
  if (
    pastSimpleVariants.length > 1 &&
    !pastSimpleVariants.some((variant) => pastParticipleVariants.includes(variant))
  ) {
    return "mixed";
  }

  // Otherwise classify by the most common (first) variant of each form.
  const [pastSimple = ""] = pastSimpleVariants;
  const [pastParticiple = ""] = pastParticipleVariants;

  if (infinitive === pastSimple && pastSimple === pastParticiple) {
    return "aaa";
  }

  if (pastSimple === pastParticiple) {
    return "abb";
  }

  if (infinitive === pastParticiple) {
    return "aba";
  }

  // Infinitive = past but a different participle (beat, beat, beaten) fits no family.
  if (infinitive === pastSimple) {
    return "mixed";
  }

  return "abc";
}

function matchesPatternDefinition(
  definition: IrregularVerbPatternDefinition,
  searchTerm: string
) {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  if (!normalizedSearchTerm) {
    return true;
  }

  const searchableContent = [
    definition.code,
    definition.title,
    definition.memoryLabel,
    definition.explanation
  ]
    .join(" ")
    .toLowerCase();

  return searchableContent.includes(normalizedSearchTerm);
}

function normalizePatternPart(value: string) {
  return value.trim().toLowerCase();
}
