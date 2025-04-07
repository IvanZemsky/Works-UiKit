<script setup lang="ts">
import { inject, ref, useAttrs } from "vue"
import UiCheck from "../UiCheck/UiCheck.vue"
import type { UiCheckGroupProvide } from "./types"
import type { UiCheckProps } from "../UiCheck/UiCheck.props"

defineProps<UiCheckProps>()

const { size, modelValue } = inject<UiCheckGroupProvide>("ui-check-group", {
   size: "md",
   modelValue: ref([]),
})

const { value } = useAttrs()

const handleChange = () => {
   const isAlreadyChecked = modelValue.value.includes(String(value))
   if (isAlreadyChecked) {
      modelValue.value = modelValue.value.filter((item) => item !== value)
   } else {
      modelValue.value.push(String(value))
   }
}
</script>

<template>
   <ui-check
      :size="size"
      :checked="modelValue.includes(String(value))"
      :label="label"
      @change="handleChange"
   />
</template>
