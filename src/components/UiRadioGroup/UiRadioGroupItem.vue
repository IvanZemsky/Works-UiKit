<script setup lang="ts">
import { ref, useAttrs } from "vue"
import UiRadio from "../UiRadio/UiRadio.vue"
import type { UiRadioGroupProvide } from "./types"
import type { UiRadioProps } from "../UiRadio/UiRadio.props"
import { useInject } from "@/lib/composables/useInject"

defineProps<UiRadioProps>()

const { size, model, name } = useInject<UiRadioGroupProvide>("ui-radio-group", {
   size: "md",
   name: "",
   model: ref(),
})

const { value, id: radioId } = useAttrs()

const id = radioId || setId()

function setId() {
   return `${name}-${value}`
}
</script>

<template>
   <ui-radio
      v-model="model"
      :size="size"
      :name="name"
      :id="id"
      :label="label"
      :checked="model === value"
   />
</template>
