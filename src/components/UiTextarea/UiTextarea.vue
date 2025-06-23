<script setup lang="ts">
import "./UiTextarea.css"
import type { UiTextareaProps } from "./UiTextarea.props"
import { useAttrs } from "vue"

defineOptions({
   inheritAttrs: false,
})

const model = defineModel<string>()

withDefaults(defineProps<UiTextareaProps>(), {
   variant: "outlined",
   size: "md",
   color: "primary",
})

const { class: className, style, ...inputAttrs } = useAttrs()
</script>

<template>
   <div
      :class="[
         'ui-textarea',
         `variant-${variant}`,
         `size-${size}`,
         `color-${color}`,
         className,
      ]"
      :style="(style as string)"
   >
      <div v-if="$slots.icon" class="ui-textarea__icon-wrap">
         <slot name="icon" />
      </div>
      <textarea v-bind="inputAttrs" type="text" v-model="model" />
   </div>
</template>
