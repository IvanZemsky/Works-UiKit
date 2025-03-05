import type { Meta, StoryObj } from "@storybook/vue3";
import UiSelect from "./UiSelect.vue";

const meta: Meta = {
   title: "Inputs/Select",
   component: UiSelect,
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiSelect>

export const Default: Story = {
   render: (args) => ({
      components: { UiSelect },
      setup() {
         return { args }
      },
      template: `<UiSelect />`,
   })
}

export default meta