<script setup lang="ts">
import "./UiRadioGroup.css"
import UiSpacing from "../UiSpacing/UiSpacing.vue"
import { provide } from "vue"
import type { UiRadioGroupProvide, UiRadioGroupProps } from "./types"

const props = withDefaults(defineProps<UiRadioGroupProps>(), {
   size: "md",
   title: "",
   name: "",
})

const model = defineModel<unknown>()

provide<UiRadioGroupProvide>("ui-radio-group", {
   size: props.size,
   name: props.name,
   model,
})
</script>

<template>
   <ui-spacing :class="['ui-radio-group', `size-${size}`]" :gap="size" vertical>
      <p v-if="title" class="ui-radio-group__title">{{ title }}</p>
      <slot />
   </ui-spacing>
</template>
