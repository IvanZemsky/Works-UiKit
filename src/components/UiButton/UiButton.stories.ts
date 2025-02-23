import UiButton from "./UiButton.vue"
import type { Meta, StoryObj } from "@storybook/vue3"

const meta: Meta = {
   component: UiButton,
   title: "Button",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiButton>

export const Primary: Story = {
   args: {
      variant: "filled",
      size: "md",
      color: "primary",
   },

   render: (args) => ({
      components: { UiButton },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: center; gap: 1rem;">
            <UiButton v-bind="args">Кнопка</UiButton>
            <UiButton v-bind="args" variant="outlined">Кнопка</UiButton>
            <UiButton v-bind="args" variant="ghost">Кнопка</UiButton>
         </div> 
      `,
   }),
}

export default meta
