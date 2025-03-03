import type { Meta, StoryObj } from "@storybook/vue3"
import UiRadioGroup from "./UiRadioGroup.vue"
import UiRadioGroupItem from "./UiRadioGroupItem.vue"

const meta: Meta = {
   title: "Inputs/Radio Group",
   component: UiRadioGroup,
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiRadioGroup>

export const Default: Story = {
   render: (args) => ({
      components: { UiRadioGroup, UiRadioGroupItem },
      setup() {
         return { args }
      },
      template: `
         <ui-radio-group title="Radio group">
             <ui-radio-group-item
               id="example-radio-group-sizes-sm"
               name="example-radio-group-sizes"
               label="Radio 1"
            />
            <ui-radio-group-item
               id="example-radio-group-sizes-md"
               name="example-radio-group-sizes"
               label="Radio 2"
            />
            <ui-radio-group-item
               id="example-radio-group-sizes-lg"
               name="example-radio-group-sizes"
               label="Radio 3"
            />
         </ui-radio-group>
      `,
   }),
}

export const Sizes: Story = {
   render: (args) => ({
      components: { UiRadioGroup, UiRadioGroupItem },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
            <ui-radio-group title="Radio group" size="sm">
               <ui-radio-group-item
                  id="example-radio-group-sizes-sm-1"
                  name="example-radio-group-sizes-sm"
                  label="Radio 1"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-sm-2"
                  name="example-radio-group-sizes-sm"
                  label="Radio 2"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-sm-3"
                  name="example-radio-group-sizes-sm"
                  label="Radio 3"
               />
            </ui-radio-group>
            <ui-radio-group title="Radio group">
               <ui-radio-group-item
                  id="example-radio-group-sizes-md-1"
                  name="example-radio-group-sizes-md"
                  label="Radio 1"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-md-2"
                  name="example-radio-group-sizes-md"
                  label="Radio 2"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-md-3"
                  name="example-radio-group-sizes-md"
                  label="Radio 3"
               />
            </ui-radio-group>
            <ui-radio-group title="Radio group" size="lg">
               <ui-radio-group-item
                  id="example-radio-group-sizes-lg-1"
                  name="example-radio-group-sizes-lg"
                  label="Radio 1"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-lg-2"
                  name="example-radio-group-sizes-lg"
                  label="Radio 2"
               />
               <ui-radio-group-item
                  id="example-radio-group-sizes-lg-3"
                  name="example-radio-group-sizes-lg"
                  label="Radio 3"
               />
            </ui-radio-group>
         </div>
      `,
   }),
}

export default meta
