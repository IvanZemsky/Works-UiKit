import UiTextarea from "./UiTextarea.vue"
import type { Meta, StoryObj } from "@storybook/vue3"
import { SearchOutlined } from "@vicons/antd"

const meta: Meta = {
   title: "Inputs/Textarea",
   component: UiTextarea,
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiTextarea>

export const Variant: Story = {
   render: (args) => ({
      components: { UiTextarea },
      setup() {
         return { args }
      },
      template: `
         <ui-textarea placeholder="Outlined" style="margin-bottom: 1rem"/>
         <ui-textarea placeholder="Ghost" variant="ghost"/>
      `,
   }),
}

export const Color: Story = {
   render: (args) => ({
      components: { UiTextarea, SearchOutlined },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea color="primary" placeholder="Primary"/>
            <ui-textarea color="secondary" placeholder="Secondary"/>
         </div>
      `,
   }),
}

export const Icon: Story = {
   render: (args) => ({
      components: { UiTextarea, SearchOutlined },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea placeholder="Outlined">
               <template #icon><SearchOutlined /></template>
            </ui-textarea>
            <ui-textarea variant="ghost" placeholder="Ghost">
               <template #icon><SearchOutlined /></template>
            </ui-textarea>
         </div>
      `,
   }),
}

export const Size: Story = {
   render: (args) => ({
      components: { UiTextarea, SearchOutlined },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-textarea size="sm" placeholder="Small"/>
            <ui-textarea size="md" placeholder="Medium"/>
            <ui-textarea size="lg" placeholder="Large"/>
         </div>
      `,
   }),
}

export default meta
