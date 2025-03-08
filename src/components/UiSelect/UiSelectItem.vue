<script setup lang="ts">
import { inject, ref } from "vue"
import type { UiSelectItemProps, UiSelectProvide } from "./types"
import UiButton from "../UiButton/UiButton.vue"

const { value = "" } = defineProps<UiSelectItemProps>()

const { modelValue } = inject<UiSelectProvide>("ui-select", {
   modelValue: ref(""),
})

const handleClick = () => {
   modelValue.value = value
}
</script>

<template>
   <ui-button :onclick="handleClick" class="ui-select-option" variant="ghost">
      <slot />
   </ui-button>
</template>
