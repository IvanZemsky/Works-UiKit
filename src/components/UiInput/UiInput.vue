<script setup lang="ts">
import { handleNumInput, handleTextInput } from "@/lib/helpers/inputs"
import "./UiInput.css"
import type { UiInputProps } from "./UiInput.props"
import { useAttrs } from "vue"

defineOptions({
   inheritAttrs: false,
})

const model = defineModel<string | number>({
   default: "",
})

withDefaults(defineProps<UiInputProps>(), {
   variant: "outlined",
   size: "md",
   color: "primary",
})

const { class: className, style, ...inputAttrs } = useAttrs()

const textInputs = ["text", "password", "email"]

function handleInput(event: Event) {
   const input = event.target as HTMLInputElement

   if (input.type === "number") {
      handleNumInput(input, inputAttrs, model)
   }

   if (textInputs.includes(input.type)) {
      handleTextInput(input, inputAttrs, model)
   }
}
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
      <input v-bind="inputAttrs" @input="handleInput" :value="model" />
   </div>
</template>
