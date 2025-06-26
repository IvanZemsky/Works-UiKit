<script setup lang="ts">
import { handleTextInput } from "@/lib/helpers/inputs"
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

function handleInput(event: Event) {
   const input = event.target as HTMLInputElement
   handleTextInput(input, inputAttrs, model)
}
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
      <textarea v-bind="inputAttrs" type="text" @input="handleInput" :value="model" />
   </div>
</template>
