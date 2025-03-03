import type { Meta, StoryObj } from "@storybook/vue3"
import UiCheck from "./UiCheck.vue"

const meta: Meta = {
   title: "Inputs/Check",
   component: UiCheck,
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiCheck>

export const Sizes: Story = {
   render: (args) => ({
      components: { UiCheck },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-check id="example-check-sizes-sm" name="example-check-sizes" size="sm" label="Check 1"/>
            <ui-check id="example-check-sizes-md" name="example-check-sizes" label="Check 2"/>
            <ui-check id="example-check-sizes-lg" name="example-check-sizes" size="lg" label="Check 3"/>
         </div>
      `,
   }),
}

export default meta
