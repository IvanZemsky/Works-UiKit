import type { Ref } from "vue"
import type { UiCheckProps } from "../UiCheck/UiCheck.props"

export type UiCheckGroupProps = {
   size: UiCheckProps["size"]
   title?: string
   modelValue?: string[]
}

export type UiCheckGroupProvide = {
   size: UiCheckProps["size"]
   modelValue: Ref<string[]>
}
