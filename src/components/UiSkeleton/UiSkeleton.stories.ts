import type { Meta, StoryObj } from "@storybook/vue3"
import UiSkeleton from "./UiSkeleton.vue"
import UiButton from "../UiButton/UiButton.vue"

const meta: Meta = {
   component: UiSkeleton,
   title: "Data Display/Skeletop",
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

export default meta
