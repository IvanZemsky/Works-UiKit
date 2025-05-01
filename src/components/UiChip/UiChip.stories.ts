import { SearchOutlined } from "@vicons/antd"
import UiChip from "./UiChip.vue"
import type { Meta, StoryObj } from "@storybook/vue3"

const meta: Meta = {
   component: UiChip,

   title: "Inputs/Chip",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiChip>

export const Variant: Story = {
   render: (args) => ({
      components: { UiChip },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-chip>Chip</ui-chip>
            <ui-chip variant="outlined">Chip</ui-chip>
         </div>`,
   }),
}

export const Sizes: Story = {
   render: (args) => ({
      components: { UiChip },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-chip size="sm">Chip</ui-chip>
            <ui-chip size="md">Chip</ui-chip>
            <ui-chip size="lg">Chip</ui-chip>
         </div>`,
   }),
}

export const Icons: Story = {
   render: (args) => ({
      components: { UiChip, SearchOutlined },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-chip>
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-chip>
            <ui-chip variant="outlined">
               <template #end-icon><SearchOutlined /></template>End icon
            </ui-chip>
            <ui-chip variant="ghost">
               <template #start-icon><SearchOutlined /></template>Start icon
            </ui-chip>
            <ui-chip variant="outlined">
               <template #start-icon><SearchOutlined /></template>
               Both icons
               <template #end-icon><SearchOutlined /></template>
            </ui-chip>
            <ui-chip>
               <SearchOutlined />
            </ui-chip>
         </div>`,
   }),
}

export const Colors: Story = {
   render: (args) => ({
      components: { UiChip },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-chip>Chip</ui-chip>
            <ui-chip variant="outlined">Chip</ui-chip>
         </div>
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-chip color="primary">Chip</ui-chip>
            <ui-chip color="primary" variant="outlined">Chip</ui-chip>
         </div>
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem">
            <ui-chip color="secondary">Chip</ui-chip>
            <ui-chip color="secondary" variant="outlined">Chip</ui-chip>
         </div>
      `,
   }),
}

export const Clickable: Story = {
   render: (args) => ({
      components: { UiChip },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <ui-chip clickable>Click on me</ui-chip>
         </div>`,
   }),
}

export default meta
