<script setup lang="ts">
import { inject, ref, useAttrs } from "vue"
import UiCheck from "../UiCheck/UiCheck.vue"
import type { UiCheckGroupProvide } from "./types"
import type { UiCheckProps } from "../UiCheck/UiCheck.props"

defineProps<UiCheckProps>()

const { size, model, name } = inject<UiCheckGroupProvide>("ui-check-group", {
   size: "md",
   name: "",
   model: ref([]),
})

const { value, id: checkId } = useAttrs()

const id = checkId || setId()

const handleChange = () => {
   const isAlreadyChecked = model.value.includes(value)
   if (isAlreadyChecked) {
      model.value = model.value.filter((item) => item !== value)
   } else {
      model.value.push(value)
   }
}

function setId() {
   return `${name}-${value}`
}
</script>

<template>
   <ui-check
      :size="size"
      :checked="model.includes(value)"
      :label="label"
      :id="id"
      :name="name"
      @change="handleChange"
   />
</template>
