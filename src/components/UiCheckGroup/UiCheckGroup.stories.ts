import type { Meta, StoryObj } from "@storybook/vue3"
import UiSpacing from "../UiSpacing/UiSpacing.vue"
import UiCheckGroup from "./UiCheckGroup.vue"
import UiCheckGroupItem from "./UiCheckGroupItem.vue"

const meta: Meta = {
   title: "Inputs/Check Group",
   component: UiCheckGroupItem,
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiCheckGroup>

export const Default: Story = {
   render: (args) => ({
      components: { UiCheckGroupItem, UiCheckGroup },
      setup() {
         return { args }
      },
      template: `
         <ui-check-group title="Check group">
            <ui-check-group-item id="example-check-sizes-sm" label="Check 1"/>
            <ui-check-group-item id="example-check-sizes-md" label="Check 2"/>
            <ui-check-group-item id="example-check-sizes-lg" label="Check 3"/>
         </ui-check-group>
      `,
   }),
}

export const Sizes: Story = {
   render: (args) => ({
      components: { UiCheckGroupItem, UiCheckGroup, UiSpacing },
      setup() {
         return { args }
      },
      template: `
         <ui-spacing gap="lg">
            <ui-check-group title="Small" size="sm">
               <ui-check-group-item id="1" label="Check 1"/>
               <ui-check-group-item id="2" label="Check 2"/>
               <ui-check-group-item id="3" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Medium" size="md">
               <ui-check-group-item id="4" label="Check 1"/>
               <ui-check-group-item id="5" label="Check 2"/>
               <ui-check-group-item id="6" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Large" size="lg">
               <ui-check-group-item id="7" label="Check 1"/>
               <ui-check-group-item id="8" label="Check 2"/>
               <ui-check-group-item id="9" label="Check 3"/>
            </ui-check-group>
         </ui-spacing>
      `,
   }),
}

export default meta
