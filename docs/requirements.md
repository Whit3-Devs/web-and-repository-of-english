# English Cheatsheet App — Initial Requirements

## 1. Goal

Create a personal web app for quickly checking key English reference material in a clear, focused, and personalized way.

The app exists to solve a concrete problem: the information is available, but it is scattered across different tools, notes, and apps. Finding something simple requires too much navigation.

The MVP must bring the most useful content into one place:

- Verb tenses.
- Irregular verbs.
- Search.
- Filters.
- Curated local data.
- Simple page-based navigation.

The initial priority is not to build a huge platform. The priority is to build a small, solid, extensible foundation.

## 2. Language Policy

The app must be English-first.

- All user-facing UI text must be written in English.
- All learning explanations must be written in English.
- Local sample data must be written in English.
- Spanish text must only be added when explicitly requested.

This rule exists because the product is meant to support English immersion. Mixing Spanish into labels, examples, and explanations creates unnecessary context switching.

## 3. Initial Stack

The app will use:

- **React** for UI.
- **Vite** for development and bundling.
- **TypeScript** for explicit data and component contracts.
- **Zustand** for lightweight global state.
- **React Router** for page navigation.
- **Tailwind CSS** for utility-first styling.

### Technical Decisions

- The first version will be a SPA.
- The MVP will not include a backend.
- The MVP will not include Obsidian sync.
- The MVP will not include an internal content editor.
- Initial content will live in curated local files inside the repository.
- Build commands must not be run automatically after changes.

## 4. MVP Scope

The MVP must allow quick access to essential English reference material with minimal friction.

### Initial Pages

The app must include at least:

1. **Dashboard / Home**
   - Main entry point.
   - Quick access to the core sections.
   - A future place for highlighted or frequently used content.

2. **Verb Tenses**
   - List of verb tenses.
   - Cards or details with structure and examples.
   - Category filters when useful.

3. **Irregular Verbs**
   - List of irregular verbs.
   - Search by any verb form.
   - Filters by frequency or category.

### Initial Features

- Navigate between sections.
- Search content.
- Filter results.
- Check information quickly.
- Keep search and filter state in Zustand.

## 5. Content Requirements

### 5.1 Verb Tenses

Each verb tense must include at least:

- **Name**.
- **Main use** explained simply.
- **Affirmative structure**.
- **Negative structure**.
- **Interrogative structure**.
- **Personalized examples**.
- **Common signal words**.
- **Common mistakes**.

Conceptual shape:

```ts
type VerbTense = {
  id: string;
  name: string;
  mainUse: string;
  structures: {
    affirmative: string;
    negative: string;
    interrogative: string;
  };
  examples: string[];
  signals: string[];
  commonMistakes: string[];
  category?: string;
};
```

### 5.2 Irregular Verbs

Each irregular verb must include at least:

- **Infinitive**.
- **Past simple**.
- **Past participle**.
- **English meaning or usage note**, when the source provides enough information.
- **Short example**.
- **Category or frequency** for filtering.

Conceptual shape:

```ts
type IrregularVerb = {
  id: string;
  infinitive: string;
  pastSimple: string;
  pastParticiple: string;
  meaning?: string;
  example: string;
  frequency?: "high" | "medium" | "low";
  category?: string;
};
```

## 6. Search and Filters

### Search

Search must find content by:

- Verb tense name.
- Verb form.
- English meaning or usage note, when available.
- Examples.
- Signal words.

### Filters

Initial filters must support:

- Content type.
- Verb tense category.
- Irregular verb frequency.
- Irregular verb category.

### Global State with Zustand

Zustand will initially manage:

- Search text.
- Active filters.
- Simple UI preferences if needed later.

Conceptual shape:

```ts
type CheatsheetState = {
  searchTerm: string;
  activeFilters: Record<string, string | string[]>;
  setSearchTerm: (value: string) => void;
  setFilter: (key: string, value: string | string[]) => void;
  clearFilters: () => void;
};
```

## 7. Out of Scope

To keep the MVP focused, the first version will not include:

- Backend.
- Authentication.
- Obsidian sync.
- Internal content editor.
- Remote persistence.
- Quizzes or interactive exercises.
- User progress tracking.
- Hosting or deployment setup.

These ideas may be valid later, but they do not belong in the first version.

## 8. Acceptance Criteria

The MVP will be acceptable when:

- A React app structure exists with the main pages.
- Navigation works for Home, Verb Tenses, and Irregular Verbs.
- Verb tenses can be listed and checked.
- Irregular verbs can be listed and checked.
- Search returns relevant reduced results.
- Filters work against local data.
- Search and filter state is centralized with Zustand.
- Content is locally defined and typed.
- User-facing text is in English.

## 9. Testing Strategy

Build commands must not be run automatically as part of changes.

When the app is implemented, tests should prioritize:

- Search utilities.
- Filter utilities.
- Minimal rendering of main pages.
- Active filter behavior.
- Empty result states.

Search and filter logic should stay separate from UI components when reasonable, because that makes the behavior easier to test.

## 10. Suggested Next Steps

1. Install project dependencies.
2. Run the search/filter test suite.
3. Run the development server for visual inspection.
4. Expand the local content for verb tenses.
5. Expand the local content for irregular verbs.
6. Improve filters and page layout based on actual usage.
