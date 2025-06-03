<script setup lang="ts">
import { useAttrs } from "vue"
import UiButton from "../UiButton/UiButton.vue"
import type { UiButtonProps } from "../UiButton/UiButton.props"

defineOptions({
   inheritAttrs: false,
})

const {
   size = "sm",
   variant = "filled",
   as: _,
   color = "primary",
   rounded = false,
   weight = 400,
   class: className = undefined,
   style,
   ...inputAttrs
} = useAttrs()

const buttonProps = {
   size,
   variant,
   color,
   rounded,
   weight,
   style,
} as Omit<UiButtonProps, "as">

const id = inputAttrs.id as string
</script>

<template>
   <ui-button as="label" :class="className" v-bind="buttonProps" :for="id">
      <slot name="start-icon" />
      <slot />
      <slot name="end-icon" />
   </ui-button>
   <input class="input" v-bind="inputAttrs" :id="id" type="file" />
</template>

<style scoped>
.input {
   display: none;
}
</style>
