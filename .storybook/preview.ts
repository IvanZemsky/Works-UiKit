import type { Preview } from "@storybook/vue3";
import "../src/styles/theme.css";
import "../src/styles/reset.css";
import "../src/styles/transitions.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
