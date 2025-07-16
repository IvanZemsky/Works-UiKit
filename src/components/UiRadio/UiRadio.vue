<script setup lang="ts">
import "./UiRadio.css"
import type { UiRadioProps } from "./UiRadio.props"
import { useAttrs } from "vue"

defineOptions({
   inheritAttrs: false,
})

const model = defineModel()

withDefaults(defineProps<UiRadioProps>(), {
   size: "md",
})

const { class: className, style, ...inputAttrs } = useAttrs()
</script>

<template>
   <div :class="['ui-radio', `size-${size}`, className]" :style="(style as string)">
      <input
         v-model="model"
         v-bind="inputAttrs"
         type="radio"
         :id="(inputAttrs.id as string)"
         :name="(inputAttrs.name as string)"
      />
      <label v-if="label" :for="(inputAttrs.id as string)">{{ label }}</label>
   </div>
</template>
