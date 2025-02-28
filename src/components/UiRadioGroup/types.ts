import type { Ref } from "vue"
import type { UiRadioProps } from "../UiRadio/UiRadio.props"

export type UiRadioGroupProvide = {
   size: UiRadioProps["size"]
   name: string
   modelValue: Ref<string, string>
}
