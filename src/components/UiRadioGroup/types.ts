import type { Ref } from "vue"
import type { UiRadioProps } from "../UiRadio/UiRadio.props"

export type UiRadioGroupProps = {
   size?: UiRadioProps["size"]
   title?: string
   modelValue?: string
}

export type UiRadioGroupProvide = {
   size: UiRadioProps["size"]
   name: string
   modelValue: Ref<string, string>
}
