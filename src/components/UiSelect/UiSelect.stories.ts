import type { Meta, StoryObj } from "@storybook/vue3";
import UiSelect from "./UiSelect.vue";
import UiSelectItem from "./UiSelectItem.vue";

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
         return { args }
      },
      template: `
         <div style="height: 200px">
            <ui-select placeholder="Select an option" style="width: 300px">
               <ui-select-item value="option-1">Option 1</ui-select-item>
               <ui-select-item value="option-2">Option 2</ui-select-item>
               <ui-select-item value="option-3">Option 3</ui-select-item>
            </ui-select>
         </div>
      `,
   })
}

export default meta