import {
  getGrammarTopicsBySection,
  grammarTopicSectionDetails,
  visibleGrammarTopicSections
} from "../../data/grammarTopics";
import { irregularVerbs } from "../../data/irregularVerbs";
import { verbTenses } from "../../data/verbTenses";
import { normalizeText } from "../../shared/utils/normalizeText";

export type NavLink = {
  id: string;
  label: string;
  to: string;
};

export type NavSubgroup = {
  id: string;
  label: string;
  items: NavLink[];
};

export type NavGroup = {
  id: string;
  label: string;
  viewAll: NavLink;
  items: NavLink[];
  subgroups: NavSubgroup[];
};

export type IrregularVerbLetterLink = {
  letter: string;
  to: string;
};

export type IrregularVerbsGroup = {
  id: "irregular-verbs";
  label: string;
  total: number;
  viewAll: NavLink;
  letters: IrregularVerbLetterLink[];
};

export type NavigationModel = {
  home: NavLink;
  groups: NavGroup[];
  irregularVerbs: IrregularVerbsGroup;
};

const verbTenseFamilyOrder: Array<"present" | "past" | "future"> = [
  "present",
  "past",
  "future"
];

const verbTenseFamilyLabels: Record<"present" | "past" | "future", string> = {
  present: "Present",
  past: "Past",
  future: "Future"
};

export function groupItemCount(group: NavGroup) {
  if (group.subgroups.length > 0) {
    return group.subgroups.reduce((total, subgroup) => total + subgroup.items.length, 0);
  }

  return group.items.length;
}

function buildVerbTensesGroup(): NavGroup {
  const subgroups = verbTenseFamilyOrder
    .map((family) => {
      const items = verbTenses
        .filter((tense) => tense.category === family)
        .map((tense) => ({
          id: tense.id,
          label: tense.name,
          to: tense.fullExplanationPath
        }));

      return {
        id: family,
        label: verbTenseFamilyLabels[family],
        items
      };
    })
    .filter((subgroup) => subgroup.items.length > 0);

  return {
    id: "verb-tenses",
    label: "Verb Tenses",
    viewAll: { id: "verb-tenses-view-all", label: "All verb tenses", to: "/verb-tenses" },
    items: [],
    subgroups
  };
}

function buildGrammarTopicGroups(): NavGroup[] {
  return visibleGrammarTopicSections.map((section) => {
    const details = grammarTopicSectionDetails[section];
    const items = getGrammarTopicsBySection(section).map((topic) => ({
      id: topic.id,
      label: topic.title,
      to: topic.fullExplanationPath
    }));

    return {
      id: section,
      label: details.label,
      viewAll: { id: `${section}-view-all`, label: details.viewAllLabel, to: details.path },
      items,
      subgroups: []
    };
  });
}

function deriveIrregularVerbLetters(): IrregularVerbLetterLink[] {
  const firstVerbPathByLetter = new Map<string, string>();

  for (const verb of irregularVerbs) {
    const letter = normalizeText(verb.infinitive).charAt(0);

    if (letter && !firstVerbPathByLetter.has(letter)) {
      firstVerbPathByLetter.set(letter, verb.fullExplanationPath);
    }
  }

  return Array.from(firstVerbPathByLetter.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([letter, to]) => ({ letter: letter.toUpperCase(), to }));
}

export function buildNavigationModel(): NavigationModel {
  return {
    home: { id: "home", label: "Home", to: "/" },
    groups: [buildVerbTensesGroup(), ...buildGrammarTopicGroups()],
    irregularVerbs: {
      id: "irregular-verbs",
      label: "Irregular Verbs",
      total: irregularVerbs.length,
      viewAll: {
        id: "irregular-verbs-view-all",
        label: `Browse all ${irregularVerbs.length} verbs`,
        to: "/irregular-verbs"
      },
      letters: deriveIrregularVerbLetters()
    }
  };
}

export type FilteredNavGroup = {
  id: string;
  label: string;
  viewAll: NavLink;
  matchCount: number;
  items: NavLink[];
  subgroups: NavSubgroup[];
};

export type FilterNavigationResult = {
  isFiltering: boolean;
  totalMatchCount: number;
  groups: FilteredNavGroup[];
};

export function filterNavigation(groups: NavGroup[], query: string): FilterNavigationResult {
  const normalizedQuery = normalizeText(query);
  const isFiltering = normalizedQuery.length > 0;

  if (!isFiltering) {
    const filteredGroups = groups.map((group) => ({
      id: group.id,
      label: group.label,
      viewAll: group.viewAll,
      matchCount: groupItemCount(group),
      items: group.items,
      subgroups: group.subgroups
    }));

    return {
      isFiltering: false,
      totalMatchCount: filteredGroups.reduce((total, group) => total + group.matchCount, 0),
      groups: filteredGroups
    };
  }

  const filteredGroups = groups
    .map((group) => {
      const allItems = [...group.items, ...group.subgroups.flatMap((subgroup) => subgroup.items)];
      const matches = allItems.filter((item) => normalizeText(item.label).includes(normalizedQuery));

      return {
        id: group.id,
        label: group.label,
        viewAll: group.viewAll,
        matchCount: matches.length,
        items: matches,
        subgroups: []
      };
    })
    .filter((group) => group.matchCount > 0);

  return {
    isFiltering: true,
    totalMatchCount: filteredGroups.reduce((total, group) => total + group.matchCount, 0),
    groups: filteredGroups
  };
}

export function findActiveGroupId(model: NavigationModel, pathname: string): string | undefined {
  if (pathname === "/verb-tenses" || pathname.startsWith("/verb-tenses/")) {
    return "verb-tenses";
  }

  for (const group of model.groups) {
    if (group.id === "verb-tenses") {
      continue;
    }

    const details = grammarTopicSectionDetails[group.id as keyof typeof grammarTopicSectionDetails];
    if (details && (pathname === details.path || pathname.startsWith(`${details.path}/`))) {
      return group.id;
    }
  }

  if (pathname === "/irregular-verbs" || pathname.startsWith("/irregular-verbs/")) {
    return model.irregularVerbs.id;
  }

  return undefined;
}
