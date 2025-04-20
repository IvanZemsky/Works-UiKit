import type { Ref } from "vue"
import type { UiRadioProps } from "../UiRadio/UiRadio.props"

export type UiRadioGroupProps = {
   size?: UiRadioProps["size"]
   title?: string
   name?: string
}

export type UiRadioGroupProvide = {
   size: UiRadioProps["size"]
   name: string
   model: Ref<unknown | undefined, unknown>
}
