import type { Meta, StoryObj } from "@storybook/vue3"
import UiSelect from "./UiSelect.vue"
import UiSelectItem from "./UiSelectOption.vue"
import { ref } from "vue"

const meta: Meta = {
   title: "Inputs/Select",
   component: UiSelect,
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiSelect>

export const Default: Story = {
   render: (args) => ({
      components: { UiSelect, UiSelectItem },
      setup() {
         const value1 = ref("")
         return { args, value1 }
      },
      template: `
         <div style="height: 200px">
            <ui-select placeholder="Select an option" style="width: 300px" v-model="value1">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
         </div>
      `,
   }),
}

export const Sizes: Story = {
   render: (args) => ({
      components: { UiSelect, UiSelectItem },
      setup() {
         const value1 = ref("")
         const value2 = ref("")
         const value3 = ref("")
         return { args, value1, value2, value3 }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
            <ui-select placeholder="Small" style="width: 300px" size="sm" v-model="value1">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
            <ui-select placeholder="Medium" style="width: 300px" size="md" v-model="value2">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
            <ui-select placeholder="Large" style="width: 300px" size="lg" v-model="value3">
               <ui-select-option value="option-1" label="Option 1"/>
               <ui-select-option value="option-2" label="Option 2"/>
               <ui-select-option value="option-3" label="Option 3"/>
            </ui-select>
         </div>
      `,
   }),
}

export default meta
