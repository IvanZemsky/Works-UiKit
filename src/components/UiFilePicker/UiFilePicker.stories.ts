import type { Meta, StoryObj } from "@storybook/vue3"
import UiFilePicker from "./UiFilePicker.vue"

const meta: Meta = {
   component: UiFilePicker,

   title: "Inputs/File Picker",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiFilePicker>

export const Default: Story = {
   render: (args) => ({
      components: { UiFilePicker },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem ">
            <ui-file-picker id="region-selector" variant="ghost" size="sm" accept=".json">
               <template #start-icon><NavigationIcon /></template>
               Select JSON file
            </ui-file-picker>
         </div>`,
   }),
}

export default meta
