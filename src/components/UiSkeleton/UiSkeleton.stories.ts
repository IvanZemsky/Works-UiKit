import type { Meta, StoryObj } from "@storybook/vue3"
import UiSkeleton from "./UiSkeleton.vue"
import UiButton from "../UiButton/UiButton.vue"

const meta: Meta = {
   component: UiSkeleton,
   title: "Data Display/Skeleton",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiSkeleton>

export const Default: Story = {
   render: (args) => ({
      components: { UiSkeleton, UiButton },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; max-width: 400px; width: 100%;">
            <div style="display: flex; align-items: center; width: 100%; gap: 0.5rem;">
               <ui-skeleton variant="disc" size="md"/>
               <div style="display: flex; flex-direction: column; width: 100%; gap: 0.5rem;">
                  <ui-skeleton size="sm"/>
                  <ui-skeleton size="sm" style="width: 100px;"/>
               </div>
            </div>
            <ui-skeleton style="height: 150px;"/>
            <ui-skeleton size="md"/>
            <ui-skeleton size="md"/>
         </div>
      `,
   }),
}

export const Variants: Story = {
   render: (args) => ({
      components: { UiSkeleton, UiButton },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
            disc
            <ui-skeleton variant="disc"/>
            rectangle
            <ui-skeleton />
         </div>
      `,
   }),
}

export const Sizes: Story = {
   render: (args) => ({
      components: { UiSkeleton, UiButton },
      setup() {
         return { args }
      },
      template: `
      <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
         <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
            <ui-skeleton size="lg"/>
            <ui-skeleton size="md"/>
            <ui-skeleton size="sm"/>
         </div>
         <div style="display: flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
            <ui-skeleton size="sm" variant="disc"/>
            <ui-skeleton size="md" variant="disc"/>
            <ui-skeleton size="lg" variant="disc"/>
         </div>
      </div>
      `,
   }),
}

export const Animations: Story = {
   render: (args) => ({
      components: { UiSkeleton, UiButton },
      setup() {
         return { args }
      },
      template: `
      <div style="display: flex; flex-direction: column; flex; flex-wrap: wrap; gap: 1rem; width: 100%;">
         wave
         <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">

            <ui-skeleton variant="disc"/>
            <ui-skeleton />
         </div>
         pulse
         <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
            <ui-skeleton variant="disc"animation="pulse"/>
            <ui-skeleton animation="pulse"/>
         </div>
         none
         <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
            <ui-skeleton variant="disc" animation="none"/>
            <ui-skeleton  animation="none"/>
         </div>
      </div>
      `,
   }),
}

export default meta
