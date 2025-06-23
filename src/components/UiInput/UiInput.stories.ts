import UiInput from "./UiInput.vue"
import type { Meta, StoryObj } from "@storybook/vue3"
import { SearchOutlined } from "@vicons/antd"

const meta: Meta = {
   title: "Inputs/Text Input",
   component: UiInput,
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiInput>

export const Variant: Story = {
   render: (args) => ({
      components: { UiInput },
      setup() {
         return { args }
      },
      template: `
         <ui-input placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-input placeholder="Ghost" variant="ghost"/>
      `,
   }),
}

export const Color: Story = {
   render: (args) => ({
      components: { UiInput, SearchOutlined },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input color="primary" placeholder="Primary"/>
            <ui-input color="secondary" placeholder="Secondary"/>
         </div>
      `,
   }),
}

export const Icon: Story = {
   render: (args) => ({
      components: { UiInput, SearchOutlined },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-input>
            <ui-input variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-input>
         </div>
      `,
   }),
}

export const Size: Story = {
   render: (args) => ({
      components: { UiInput, SearchOutlined },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input size="sm" placeholder="Small"/>
            <ui-input size="md" placeholder="Medium"/>
            <ui-input size="lg" placeholder="Large"/>
         </div>
      `,
   }),
}

export const MinMax: Story = {
   render: (args) => ({
      components: { UiInput, SearchOutlined },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-input type="number" size="md" min="1" max="100" placeholder="Number"/>
            <ui-input type="text" size="md" minlength="0" maxlength="15" placeholder="Max: 15"/>
         </div>
      `,
   }),
}

export default meta
