import type { Ref } from "vue"

export type UiSelectProps = {
   /**
    * Placeholder - appears when no value is selected
    */
   placeholder?: string
   size?: "sm" | "md" | "lg"
}

export type UiSelectOptionProps = {
   value: unknown
   label: string
}

export type UiSelectProvide = {
   size: UiSelectProps["size"]
   isOpen: Ref<boolean>
   selected: Ref<string>
   model: Ref<unknown | undefined, unknown>
}
