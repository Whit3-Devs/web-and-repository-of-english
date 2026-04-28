import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "UI theme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" }
        ],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === "dark" ? "dark" : "light";

      return (
        <div className={theme}>
          <div className="min-h-screen bg-slate-50 p-6 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
            <Story />
          </div>
        </div>
      );
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
