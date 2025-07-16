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

const model = defineModel()

const { class: className, style, ...inputAttrs } = useAttrs()
</script>

<template>
   <div :class="['ui-check', `size-${size}`, className]" :style="(style as string)">
      <input
         v-model="model"
         v-bind="inputAttrs"
         type="checkbox"
         :id="(inputAttrs.id as string)"
         :name="(inputAttrs.name as string)"
      />
      <label v-if="label" :for="(inputAttrs.id as string)">{{ label }}</label>
   </div>
</template>
