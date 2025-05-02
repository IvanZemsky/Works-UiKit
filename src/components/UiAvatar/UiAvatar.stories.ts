import UiAvatar from "./UiAvatar.vue"
import type { Meta, StoryObj } from "@storybook/vue3"

import avatarMaleImg from "./male-1.jpg"

const meta: Meta = {
   component: UiAvatar,
   title: "Data display/Avatar",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiAvatar>

export const Default: Story = {
   render: (args) => ({
      components: { UiAvatar },
      setup() {
         return { args }
      },
      template: `
         <div style="display: flex; flex-direction: column; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
            <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
               <ui-avatar size="sm" alt="S"/>
               <ui-avatar size="md" alt="M"/>
               <ui-avatar size="lg" alt="L"/>
            </div>
            <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
               <ui-avatar size="sm" alt="SM"/>
               <ui-avatar size="md" alt="MD"/>
               <ui-avatar size="lg" alt="LG"/>
            </div>
            <div style="display: flex; align-items: flex-start; flex-wrap: wrap; gap: 1rem">
               <ui-avatar size="sm" alt="S" src="${avatarMaleImg}"/>
               <ui-avatar size="md" alt="M" src="${avatarMaleImg}"/>
               <ui-avatar size="lg" alt="L" src="${avatarMaleImg}"/>
            </div>
         </div>`,
   }),
}

export default meta
