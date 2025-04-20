<script setup lang="ts">
import { inject, ref, useAttrs } from "vue"
import UiRadio from "../UiRadio/UiRadio.vue"
import type { UiRadioGroupProvide } from "./types"
import type { UiRadioProps } from "../UiRadio/UiRadio.props"

defineProps<UiRadioProps>()

const { size, name, model } = inject<UiRadioGroupProvide>("ui-radio-group", {
   size: "md",
   name: "",
   model: ref(),
})

const { value, id: radioId } = useAttrs()

const id = radioId || setId()

const handleChange = () => {
   model.value = value
}

function setId() {
   return `${name}-${value}`
}
</script>

<template>
   <ui-radio
      :size="size"
      :name="name"
      :id="id"
      :value="value"
      :label="label"
      :checked="model === value"
      @change="handleChange"
   />
</template>
