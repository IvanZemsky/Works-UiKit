<script setup lang="ts">
import clsx from "clsx"
import "./UiRadio.css"
import type { UiRadioProps } from "./UiRadio.props"
import { useAttrs } from "vue"

defineOptions({
   inheritAttrs: false,
})

withDefaults(defineProps<UiRadioProps>(), {
   size: "md",
})

const { class: className, style, ...inputAttrs } = useAttrs()
</script>

<template>
   <div
      :class="clsx('ui-radio', `size-${size}`, className as string | undefined)"
      :style="(style as string)"
   >
      <input
         v-bind="inputAttrs"
         type="radio"
         :id="(inputAttrs.id as string)"
         :name="(inputAttrs.name as string)"
         @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <label v-if="label" :for="(inputAttrs.id as string)">{{ label }}</label>
   </div>
</template>
