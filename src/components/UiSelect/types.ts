import type { Ref } from "vue"

export type UiSelectProps = {
   placeholder?: string
   modelValue?: string
}

export type UiSelectItemProps = {
   value: string
}

export type UiSelectProvide = {
   modelValue: Ref<string, string>
}