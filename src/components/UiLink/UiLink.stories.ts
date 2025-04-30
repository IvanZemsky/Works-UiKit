import type { Meta, StoryObj } from "@storybook/vue3"
import UiLink from "./UiLink.vue"

const meta: Meta = {
   component: UiLink,
   title: "Link",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiLink>

export const Sizes: Story = {
   render: (args) => ({
      components: { UiLink },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-link as="a" href="https://storybook.js.org/" target="_blank">Click me</ui-link>
         </div>`,
   }),
}

export default meta
