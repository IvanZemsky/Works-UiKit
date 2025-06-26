import type { Meta, StoryObj } from "@storybook/vue3"
import UiToast from "./UiToast.vue"
import UiButton from "../UiButton/UiButton.vue"
import { ref } from "vue"

const meta: Meta = {
   component: UiToast,
   title: "Data display/Toast",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiToast>

export const Sizes: Story = {
   render: (args) => ({
      components: { UiToast, UiButton },
      setup() {
         const toastOpened = ref(false)

         const openModal = () => {
            toastOpened.value = true
         }

         return { args, toastOpened, openModal }
      },
      template: `
         <div style="height: 200px">
            <ui-toast v-model="toastOpened" :timeout="3000">
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. A soluta
            </p>
         </ui-toast>
         <ui-button @click="toastOpened = true">Open Toast</ui-button>
         </div>
      `,
   }),
}

export default meta
