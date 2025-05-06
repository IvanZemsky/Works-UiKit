import type { Meta, StoryObj } from "@storybook/vue3"
import UiModal from "./UiModal.vue"
import UiButton from "../UiButton/UiButton.vue"
import { ref } from "vue"
import UiCard from "../UiCard/UiCard.vue"

const meta: Meta = {
   component: UiModal,
   title: "Data display/Modal",
   tags: ["autodocs"],
}

type Story = StoryObj<typeof UiModal>

export const Sizes: Story = {
   render: (args) => ({
      components: { UiModal, UiButton, UiCard },
      setup() {
         const modalOpened = ref(false)

         const openModal = () => {
            modalOpened.value = true
         }

         return { args, modalOpened, openModal }
      },
      template: `
      <div id="modal"></div>
         <div style="height: 300px">
            <ui-button @click="openModal">Open modal</ui-button>
            <ui-modal v-model="modalOpened" teleport="#modal" style="width: 100%; height: 300px">
               <ui-card>
                  Modal inserted to #modal
               </ui-card>
            </ui-modal>
         </div>
      `,
   }),
}

export default meta
