# English Cheatsheet App

A focused English reference web app for quickly checking grammar, verb tenses,
modal verbs, irregular verbs, and practical usage patterns.

The goal is not to replace deep study. The goal is to make the most useful
English rules easy to find, compare, and review when you need them.

## Features

- Searchable English learning reference.
- Verb tense cards with simplified tables, full explanations, and a decision map.
- Modal verb topics with practical examples and common mistakes.
- Sentence building, grammar foundations, advanced structures, and
  communication pattern topics for scalable grammar study.
- Irregular verb table with pattern-based grouping.
- Direct routes for topic detail pages.
- Browser tab titles that reflect the current route.

## Language Policy

This project is English-first.

- UI text must be written in English.
- Learning explanations must be written in English.
- Spanish text should only be added when explicitly requested.

## Tech Stack

- React
- Vite
- TypeScript
- React Router
- Zustand
- Tailwind CSS
- Vitest
- Testing Library

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app runs on:

```text
http://localhost:5178
```

## Scripts

- `npm run dev` — starts the Vite development server.
- `npm test` — runs tests with Vitest.
- `npm run test:watch` — runs Vitest in watch mode.

## Project Structure

```text
src/
  components/   Shared layout and reusable UI components.
  data/         English reference content and topic datasets.
  features/     Feature-level logic such as cheatsheet search.
  pages/        Route-level pages and page tests.
  shared/       Shared types and utilities.
  store/        Zustand state for search and filters.
docs/           Planning and content audit documentation.
```

## Current Sections

- Verb Tenses
- Modal Verbs
- Sentence Building
- Grammar Foundations
- Advanced Structures
- Communication Patterns
- Irregular Verbs

## Roadmap

- Expand full explanations for remaining placeholder topics.
- Add more practice-focused examples.
- Improve topic cross-linking.
- Continue refining search and filters around real study workflows.

## Repository

If this project helps you study or organize English grammar, consider starring
the repository:

[⭐ Star this project on GitHub](https://github.com/Whit3-Devs/web-and-repository-of-english)

## License

This project is source-available for learning and non-commercial use.

- Source code: [PolyForm Noncommercial License 1.0.0](LICENSE.md)
- Educational content: [CC BY-NC-SA 4.0](CONTENT-LICENSE.md)

Commercial use, resale, paid redistribution, or using this project as part of a
commercial product or service is not permitted without explicit written
permission.

## Documentation

- [Initial requirements](docs/requirements.md)
- [Content audit](docs/content-audit.md)
