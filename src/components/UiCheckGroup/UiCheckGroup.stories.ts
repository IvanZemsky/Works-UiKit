import type { Meta, StoryObj } from "@storybook/vue3"
import UiSpacing from "../UiSpacing/UiSpacing.vue"
import UiCheckGroup from "./UiCheckGroup.vue"
import UiCheckGroupItem from "./UiCheckGroupItem.vue"
import { ref } from "vue"

const meta: Meta = {
   title: "Inputs/Check Group",
   component: UiCheckGroupItem,
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiCheckGroup>

export const Sizes: Story = {
   render: (args) => ({
      components: { UiCheckGroupItem, UiCheckGroup, UiSpacing },
      setup() {
         const model1 = ref()
         const model2 = ref()
         const model3 = ref()
         return { args }
      },
      template: `
         <ui-spacing gap="lg">
            <ui-check-group title="Small" size="sm" v-model="model1">
               <ui-check-group-item id="1" label="Check 1"/>
               <ui-check-group-item id="2" label="Check 2"/>
               <ui-check-group-item id="3" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Medium" size="md" v-model="model2">
               <ui-check-group-item id="4" label="Check 1"/>
               <ui-check-group-item id="5" label="Check 2"/>
               <ui-check-group-item id="6" label="Check 3"/>
            </ui-check-group>
            <ui-check-group title="Large" size="lg" v-model="model3">
               <ui-check-group-item id="7" label="Check 1"/>
               <ui-check-group-item id="8" label="Check 2"/>
               <ui-check-group-item id="9" label="Check 3"/>
            </ui-check-group>
         </ui-spacing>
      `,
   }),
}

export default meta
