<script setup lang="ts">
import "./UiCheck.css"
import type { UiCheckProps } from "./UiCheck.props"
import { useAttrs } from "vue"

defineOptions({
   inheritAttrs: false,
})

withDefaults(defineProps<UiCheckProps>(), {
   size: "md",
})

const { class: className, style, ...inputAttrs } = useAttrs()
</script>

<template>
   <div
      :class="['ui-check', `size-${size}`, className]"
      :style="(style as string)"
   >
      <input
         v-bind="inputAttrs"
         type="checkbox"
         :id="(inputAttrs.id as string)"
         :name="(inputAttrs.name as string)"
         @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <label v-if="label" :for="(inputAttrs.id as string)">{{ label }}</label>
   </div>
</template>
