import type { Meta, StoryObj } from "@storybook/vue3"
import UiSpacing from "../UiSpacing/UiSpacing.vue"
import UiRadio from "./UiRadio.vue"

const meta: Meta = {
   title: "Radio",
   component: UiRadio,
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiRadio>

export const Sizes: Story = {
   render: (args) => ({
      components: { UiRadio, UiSpacing },
      setup() {
         return { args }
      },
      template: `
         <ui-spacing align="center">
            <ui-radio id="example-radio-sizes-sm" name="example-radio-sizes" size="sm" label="Radio 1"/>
            <ui-radio id="example-radio-sizes-md" name="example-radio-sizes" label="Radio 2"/>
            <ui-radio id="example-radio-sizes-lg" name="example-radio-sizes" size="lg" label="Radio 3"/>
         </ui-spacing>
      `,
   }),
}

export default meta
