<script setup lang="ts">
import { inject, onMounted, ref } from "vue"
import type { UiSelectOptionProps, UiSelectProvide } from "./types"
import UiButton from "../UiButton/UiButton.vue"

const props = withDefaults(defineProps<UiSelectOptionProps>(), {
   label: "",
})

const { value: optionValue, label } = props

const { model, size, isOpen, selected } = inject<UiSelectProvide>("ui-select", {
   size: "md",
   isOpen: ref(false),
   model: ref(),
   selected: ref(""),
})

onMounted(() => {
   if (optionValue === model.value) {
      selected.value = label
   }
})

const handleClick = () => {
   model.value = optionValue
   selected.value = label
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
