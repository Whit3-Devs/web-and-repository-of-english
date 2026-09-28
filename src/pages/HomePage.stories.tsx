import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { useRecentlyVisitedStore } from "../store/useRecentlyVisitedStore";
import { HomePage } from "./HomePage";

const meta = {
  title: "Pages/HomePage",
  component: HomePage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  tags: ["autodocs"]
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NewVisitor: Story = {
  render: () => {
    useRecentlyVisitedStore.setState({ entries: [] });
    return <HomePage />;
  }
};

export const ReturningVisitor: Story = {
  render: () => {
    useRecentlyVisitedStore.setState({
      entries: [
        { path: "/verb-tenses/present-perfect", title: "Present Perfect", kind: "verb-tense" },
        {
          path: "/modal-verbs/ability-and-permission",
          title: "Ability and Permission",
          kind: "grammar-topic"
        },
        { path: "/irregular-verbs/go", title: "go", kind: "irregular-verb" },
        { path: "/verb-tenses/past-simple", title: "Past Simple", kind: "verb-tense" }
      ]
    });
    return <HomePage />;
  }
};
