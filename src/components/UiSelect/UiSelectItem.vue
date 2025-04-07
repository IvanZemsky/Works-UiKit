<script setup lang="ts">
import { inject, ref } from "vue"
import type { UiSelectItemProps, UiSelectProvide } from "./types"
import UiButton from "../UiButton/UiButton.vue"

const props = withDefaults(defineProps<UiSelectItemProps>(), {
   value: "",
})

const {value, name} = props

const { modelValue, size, isOpen } = inject<UiSelectProvide>("ui-select", {
   size: "md",
   modelValue: ref({ selectedValue: "", name: "" }),
   isOpen: ref(false),
})

const handleClick = () => {
   modelValue.value = { selectedValue: value, name }
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
      {{ name }}
   </ui-button>
</template>
