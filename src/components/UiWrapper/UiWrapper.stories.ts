import type { Meta, StoryObj } from "@storybook/vue3"
import UiWrapper from "./UiWrapper.vue"

const meta: Meta = {
   component: UiWrapper,
   title: "Layout/Wrapper",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiWrapper>

export const Paddings: Story = {
   render: (args) => ({
      components: { UiWrapper },
      setup() {
         return { args }
      },
      template: `
      <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 2rem">
         <ui-wrapper style="background-color: var(--primary-extra-light)">
            paddings="x"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
         <ui-wrapper paddings="y" style="background-color: var(--primary-extra-light)">
            paddings="y"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
         <ui-wrapper paddings="both" style="background-color: var(--primary-extra-light)">
            paddings="both"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
      </div>
      `,
   }),
}

export default meta
