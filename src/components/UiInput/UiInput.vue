<script setup lang="ts">
import "./UiInput.css"
import type { UiInputProps } from "./UiInput.props"
import { useAttrs } from "vue"

defineOptions({
   inheritAttrs: false,
})

withDefaults(defineProps<UiInputProps>(), {
   variant: "outlined",
   size: "md",
   color: "primary",
})

const { class: className, style, ...inputAttrs } = useAttrs()
</script>

<template>
   <div
      :class="[
         'ui-input',
         `variant-${variant}`,
         `size-${size}`,
         `color-${color}`,
         className,
      ]"
      :style="(style as string)"
   >
      <div v-if="$slots.icon" class="ui-input__icon-wrap">
         <slot name="icon" />
      </div>
      <input
         v-bind="inputAttrs"
         type="text"
         @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
   </div>
</template>
