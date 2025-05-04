import type { Meta, StoryObj } from "@storybook/vue3"
import UiTooltip from "./UiTooltip.vue"
import UiButton from "../UiButton/UiButton.vue"

const meta: Meta = {
   component: UiTooltip,
   title: "Data Display/Tooltip",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiTooltip>

export const Default: Story = {
   render: (args) => ({
      components: { UiTooltip, UiButton },
      setup() {
         return { args }
      },
      template: `
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem; height: 100px">
         <ui-tooltip text="Tooltip text" size="sm">
            <ui-button>Hover me</ui-button>
         </ui-tooltip>
      </div>
      `,
   }),
}

export const Sizes: Story = {
   render: (args) => ({
      components: { UiTooltip, UiButton },
      setup() {
         return { args }
      },
      template: `
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem; height: 100px">
         <ui-tooltip text="Tooltip text" size="sm">
            <ui-button>Small</ui-button>
         </ui-tooltip>
         <ui-tooltip text="Tooltip text" size="md">
            <ui-button>Medium</ui-button>
         </ui-tooltip>
         <ui-tooltip text="Tooltip text" size="lg">
            <ui-button>Large</ui-button>
         </ui-tooltip>
      </div>
      `,
   }),
}

export default meta
