import { SearchOutlined } from "@vicons/antd"
import UiButton from "./UiButton.vue"
import type { Meta, StoryObj } from "@storybook/vue3"

const meta: Meta = {
   component: UiButton,
   title: "Button",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiButton>

export const Variant: Story = {
   render: (args) => ({
      components: { UiButton },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button>Button</ui-button>
            <ui-button variant="outlined">Button</ui-button>
            <ui-button variant="ghost">Button</ui-button>
         </div>`,
   }),
}

export const Sizes: Story = {
   render: (args) => ({
      components: { UiButton },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button size="sm">Button</ui-button>
            <ui-button size="md">Button</ui-button>
            <ui-button size="lg">Button</ui-button>
         </div>`,
   }),
}

export const Icons: Story = {
   render: (args) => ({
      components: { UiButton, SearchOutlined },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-button>
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-button>
            <ui-button variant="outlined">
               <template #end-icon><SearchOutlined /></template>End icon
            </ui-button>
            <ui-button variant="ghost">
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-button>
            <ui-button variant="outlined">
               <template #start-icon><SearchOutlined /></template>
               Both icons
               <template #end-icon><SearchOutlined /></template>
            </ui-button>
            <ui-button>
               <SearchOutlined />
            </ui-button>
         </div>`,
   }),
}

export const As: Story = {
   render: (args) => ({
      components: { UiButton },
      setup() {
         return { args }
      },
      template: `
         <ui-button v-bind="args" as="a" href="https://storybook.js.org/" target="_blank">
            Link to the official Storybook web site
         </ui-button>`,
   }),
}

export const Colors: Story = {
   render: (args) => ({
      components: { UiButton },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button>Button</ui-button>
            <ui-button variant="outlined">Button</ui-button>
            <ui-button variant="ghost">Button</ui-button>
         </div>
          <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-button color="secondary">Button</ui-button>
            <ui-button color="secondary" variant="outlined">Button</ui-button>
            <ui-button color="secondary" variant="ghost">Button</ui-button>
         </div>
      `,
   }),
}

export default meta
