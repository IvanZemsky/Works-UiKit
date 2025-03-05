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

const { name } = useAttrs()

const handleChange = () => {
   if (modelValue.value.includes(name as string)) {
      modelValue.value = modelValue.value.filter((item) => item !== name)
   } else {
      modelValue.value.push(name as string)
   }
}
</script>

<template>
   <ui-check
      :size="size"
      :checked="modelValue.includes(name as string)"
      :label="label"
      @change="handleChange"
   />
</template>
