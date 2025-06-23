<script setup lang="ts">
import "./UiInput.css"
import type { UiInputProps } from "./UiInput.props"
import { useAttrs } from "vue"

defineOptions({
   inheritAttrs: false,
})

const model = defineModel<string>()

withDefaults(defineProps<UiInputProps>(), {
   variant: "outlined",
   size: "md",
   color: "primary",
})

const { class: className, style, ...inputAttrs } = useAttrs()

function handleInput(event: Event) {
   const input = event.target as HTMLInputElement

   if (input.type === "number") {
      const num = parseFloat(input.value)
      const min =
         inputAttrs.min !== undefined ? parseFloat(String(inputAttrs.min)) : undefined
      const max =
         inputAttrs.max !== undefined ? parseFloat(String(inputAttrs.max)) : undefined

      if (
         input.value === "" ||
         (!isNaN(num) &&
            (min === undefined || num >= min) &&
            (max === undefined || num <= max))
      ) {
         model.value = input.value
      } else {
         input.value = String(model.value)
      }

      return
   }

   if (input.type === "text" || input.type === "password" || input.type === "email") {
      const minLength =
         inputAttrs.minlength !== undefined
            ? parseFloat(String(inputAttrs.min))
            : undefined
      const maxLength =
         inputAttrs.maxlength !== undefined
            ? parseFloat(String(inputAttrs.max))
            : undefined

      if (maxLength !== undefined && input.value.length > maxLength) {
         input.value = String(model.value)
         return
      } else if (minLength !== undefined && input.value.length < minLength) {
         input.value = String(model.value)
         return
      }
   }

   model.value = input.value
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
