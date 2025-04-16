<script setup lang="ts">
import { inject, ref } from "vue"
import type { UiSelectItemProps, UiSelectProvide } from "./types"
import UiButton from "../UiButton/UiButton.vue"

const props = withDefaults(defineProps<UiSelectItemProps>(), {
   value: "",
})

const { value, label } = props

const { modelValue, size, isOpen } = inject<UiSelectProvide>("ui-select", {
   size: "md",
   isOpen: ref(false),
   modelValue: ref({ selectedValue: "", label: "" }),
})

const handleClick = () => {
   modelValue.value = { selectedValue: value, label }
   isOpen.value = false
}
</script>

<template>
   <ui-button
      :onclick="handleClick"
      class="ui-select__option"
      variant="ghost"
      :size="size"
   >
      {{ label }}
   </ui-button>
</template>
