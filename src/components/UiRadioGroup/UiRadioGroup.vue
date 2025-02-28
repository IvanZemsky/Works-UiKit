<script setup lang="ts">
import "./UiRadioGroup.css"
import clsx from "clsx"
import UiSpacing from "../UiSpacing/UiSpacing.vue"
import type { UiRadioGroupProps } from "./UiRadioGroup.props"
import { computed, provide, useAttrs } from "vue"
import type { UiRadioGroupProvide } from "./types"

const props = withDefaults(defineProps<UiRadioGroupProps>(), {
   size: "md",
   title: "",
   modelValue: "",
})

const emit = defineEmits(["update:modelValue"])

const attrs = useAttrs()

const modelValue = computed({
   get: () => props.modelValue,
   set: (value: string) => {
      emit("update:modelValue", value)
   },
})

provide<UiRadioGroupProvide>("ui-radio-group", {
   size: props.size,
   name: (attrs.name as string) || "",
   modelValue,
})

const { className } = useAttrs()
</script>

<template>
   <ui-spacing
      :class="clsx('ui-radio-group', `size-${size}`, { className })"
      :gap="size"
      vertical
   >
      <p v-if="title" class="ui-radio-group__title">{{ title }}</p>
      <slot />
   </ui-spacing>
</template>
