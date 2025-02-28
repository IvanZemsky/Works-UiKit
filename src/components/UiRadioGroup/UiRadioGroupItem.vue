<script setup lang="ts">
import { inject, ref, useAttrs } from "vue"
import UiRadio from "../UiRadio/UiRadio.vue"
import type { UiRadioGroupProvide } from "./types"
import type { UiRadioProps } from "../UiRadio/UiRadio.props"

defineProps<UiRadioProps>()

const { size, name, modelValue } = inject<UiRadioGroupProvide>("ui-radio-group", {
   size: "md",
   name: "",
   modelValue: ref(""),
})

const { value } = useAttrs()

const handleChange = () => {
   modelValue.value = value as string
}
</script>

<template>
   <ui-radio :size="size" :name="name" :label="label" @change="handleChange" />
</template>
