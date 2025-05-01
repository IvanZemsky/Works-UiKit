import type { Meta, StoryObj } from "@storybook/vue3"
import UiSpacing from "./UiSpacing.vue"
import UiButton from "../UiButton/UiButton.vue"

const meta: Meta = {
   component: UiSpacing,
   title: "Layout/Spacing",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiSpacing>

export const Gap: Story = {
   render: (args) => ({
      components: { UiSpacing, UiButton },
      setup() {
         return { args }
      },
      template: `
         <ui-spacing vertical>
            <ui-spacing gap="sm" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
            <ui-spacing gap="md" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
            <ui-spacing gap="lg" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
         </ui-spacing>
      `,
   }),
}

export const Justify: Story = {
   render: (args) => ({
      components: { UiSpacing, UiButton },
      setup() {
         return { args }
      },
      template: `
         <ui-spacing vertical gap="lg">
            <p>center</p>
            <ui-spacing style="width: 100%" justify="center" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
            <p>justify-between</p>
            <ui-spacing style="width: 100%" justify="space-between" wrap>
               <ui-button variant="outlined">Element 1</ui-button>
               <ui-button variant="outlined">Element 2</ui-button>
               <ui-button variant="outlined">Element 3</ui-button>
            </ui-spacing>
            <p>end</p>
            <ui-spacing style="width: 100%" justify="end" wrap>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
         </ui-spacing>
      `,
   }),
}

export const Align: Story = {
   render: (args) => ({
      components: { UiSpacing, UiButton },
      setup() {
         return { args }
      },
      template: `
         <ui-spacing vertical gap="lg">
            <p>start</p>
            <ui-spacing style="width: 100%" align="start" wrap>
               <ui-button size="sm">Element 1</ui-button>
               <ui-button size="md">Element 2</ui-button>
               <ui-button size="lg">Element 3</ui-button>
            </ui-spacing>
            <p>center</p>
            <ui-spacing style="width: 100%" align="center" wrap>
               <ui-button size="sm">Element 1</ui-button>
               <ui-button size="md">Element 2</ui-button>
               <ui-button size="lg">Element 3</ui-button>
            </ui-spacing>
            <p>end</p>
            <ui-spacing style="width: 100%" align="end" wrap>
               <ui-button size="sm">Element 1</ui-button>
               <ui-button size="md">Element 2</ui-button>
               <ui-button size="lg">Element 3</ui-button>
            </ui-spacing>
         </ui-spacing>
      `,
   }),
}

export const Vertical: Story = {
   render: (args) => ({
      components: { UiSpacing, UiButton },
      setup() {
         return { args }
      },
      template: `
         <ui-spacing vertical>
            <ui-button>Element 1</ui-button>
            <ui-button>Element 2</ui-button>
            <ui-button>Element 3</ui-button>
         </ui-spacing>
      `,
   }),
}

export const Reverse: Story = {
   render: (args) => ({
      components: { UiSpacing, UiButton },
      setup() {
         return { args }
      },
      template: `
         <ui-spacing>
            <ui-spacing vertical reverse>
               <ui-button>Element 1</ui-button>
               <ui-button>Element 2</ui-button>
               <ui-button>Element 3</ui-button>
            </ui-spacing>
            <ui-spacing reverse wrap>
               <ui-button variant="outlined">Element 1</ui-button>
               <ui-button variant="outlined">Element 2</ui-button>
               <ui-button variant="outlined">Element 3</ui-button>
            </ui-spacing>
         </ui-spacing>
      `,
   }),
}

export default meta
