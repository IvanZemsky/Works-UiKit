<script setup lang="ts">
import "./UiCheckGroup.css"
import clsx from "clsx"
import UiSpacing from "../UiSpacing/UiSpacing.vue"
import type { UiCheckGroupProps, UiCheckGroupProvide } from "./types"
import { provide, defineModel, useAttrs } from "vue"

const props = withDefaults(defineProps<UiCheckGroupProps>(), {
   size: "md",
   title: "",
})

const model = defineModel<unknown[]>({
   required: true,
   default: [],
})

const { name } = useAttrs()

provide<UiCheckGroupProvide>("ui-check-group", {
   size: props.size,
   name: name as string,
   model,
})
</script>

<template>
   <ui-spacing :class="clsx('ui-check-group', `size-${size}`)" :gap="size" vertical>
      <p v-if="title" class="ui-check-group__title">{{ title }}</p>
      <slot />
   </ui-spacing>
</template>
