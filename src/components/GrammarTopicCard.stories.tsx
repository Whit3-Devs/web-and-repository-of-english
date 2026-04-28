import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import type { GrammarTopic } from "../shared/types/content";
import { GrammarTopicCard } from "./GrammarTopicCard";

const availableTopic: GrammarTopic = {
  id: "storybook-question-builder",
  slug: "question-builder-cheat-sheet",
  title: "Question Builder Cheat Sheet",
  section: "sentence-building",
  summary:
    "Build English questions by choosing the right auxiliary, subject order and question word.",
  keyIdeas: [
    "Questions usually need an auxiliary before the subject.",
    "WH questions ask for specific information.",
    "The main verb keeps the base form after do/does/did."
  ],
  examples: [
    "Do you work remotely?",
    "Where does she live?",
    "Why did the build fail?"
  ],
  commonMistakes: [
    "Using two auxiliaries when only one is needed.",
    "Forgetting do/does/did in present or past simple.",
    "Keeping the main verb conjugated after does."
  ],
  relatedTopics: ["WH Questions", "English Auxiliaries"],
  fullExplanationPath: "/sentence-building/question-builder-cheat-sheet",
  hasFullExplanation: true
};

const comingSoonTopic: GrammarTopic = {
  ...availableTopic,
  id: "storybook-embedded-clauses",
  slug: "embedded-wh-clauses",
  title: "Embedded WH Clauses",
  summary:
    "Use indirect question patterns when a question becomes part of a larger sentence.",
  fullExplanationPath: "/sentence-building/embedded-wh-clauses",
  hasFullExplanation: false
};

const meta = {
  title: "Components/GrammarTopicCard",
  component: GrammarTopicCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    topic: availableTopic
  },
  tags: ["autodocs"]
} satisfies Meta<typeof GrammarTopicCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Available: Story = {};

export const ComingSoon: Story = {
  args: {
    topic: comingSoonTopic
  }
};
