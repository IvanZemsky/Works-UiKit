import type { Ref } from "vue"

export type UiSelectProps = {
   /**
    * Placeholder - appears when no value is selected
    */
   placeholder?: string

   /**
    * Size of the select
    */
   size?: "sm" | "md" | "lg"

   modelValue?: UiSelectValue
}

export type UiSelectItemProps = {
   value: string
   label: string
}

export type UiSelectProvide = {
   size: UiSelectProps["size"]
   isOpen: Ref<boolean>
   modelValue: Ref<UiSelectValue | undefined, UiSelectValue>
}

export type UiSelectValue = {
   selectedValue: string
   label: string
}
