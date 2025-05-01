import type { Meta, StoryObj } from "@storybook/vue3"
import UiCard from "./UiCard.vue"
import UiSpacing from "../UiSpacing/UiSpacing.vue"
import UiButton from "../UiButton/UiButton.vue"

const meta: Meta = {
   component: UiCard,
   title: "Data display/Card",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiCard>

export const Sizes: Story = {
   render: (args) => ({
      components: { UiCard, UiSpacing, UiButton },
      setup() {
         return { args }
      },
      template: `
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
         <ui-card size="sm">
            <ui-spacing vertical>
               <p><b>Small card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
         <ui-card size="md">
            <ui-spacing vertical>
               <p><b>Medium card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
         <ui-card size="lg">
            <ui-spacing vertical>
               <p><b>Large card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
      </div>
      `,
   }),
}

export const Hoverable: Story = {
   render: (args) => ({
      components: { UiCard, UiSpacing, UiButton },
      setup() {
         return { args }
      },
      template: `
         <ui-card hoverable>
            <ui-spacing vertical>
               <p><b>Hoverable card</b></p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <ui-button>Button</ui-button>
            </ui-spacing>
         </ui-card>
      `,
   }),
}

export default meta
