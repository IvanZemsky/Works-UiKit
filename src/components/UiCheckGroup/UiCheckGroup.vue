<script setup lang="ts">
import "./UiCheckGroup.css"
import clsx from "clsx"
import UiSpacing from "../UiSpacing/UiSpacing.vue"
import type { UiCheckGroupProps, UiCheckGroupProvide } from "./types"
import { computed, provide } from "vue"

const props = withDefaults(defineProps<UiCheckGroupProps>(), {
   size: "md",
   title: "",
})

const emit = defineEmits(["update:modelValue"])

const modelValue = computed({
   get: () => props.modelValue || [],
   set: (value: string[]) => {
      emit("update:modelValue", value)
   },
})

provide<UiCheckGroupProvide>("ui-check-group", {
   size: props.size,
   modelValue,
})
</script>

<template>
   <ui-spacing :class="clsx('ui-check-group', `size-${size}`)" :gap="size" vertical>
      <p v-if="title" class="ui-check-group__title">{{ title }}</p>
      <slot />
   </ui-spacing>
</template>
