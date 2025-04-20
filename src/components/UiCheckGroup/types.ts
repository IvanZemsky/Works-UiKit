import type { Ref } from "vue"
import type { UiCheckProps } from "../UiCheck/UiCheck.props"

export type UiCheckGroupProps = {
   size?: UiCheckProps["size"]
   title?: string
}

export type UiCheckGroupProvide = {
   size: UiCheckProps["size"]
   name: string
   model: Ref<unknown[]>
}
