<script setup lang="ts">
import "./UiButton.css"
import type { UiButtonProps } from "./UiButton.props"
import { useWaveEffect } from "../../lib/useWaveEffect"
import { RouterLink } from "vue-router"

const props = withDefaults(defineProps<UiButtonProps>(), {
   as: "button",
   variant: "filled",
   size: "md",
   color: "primary",
})

const { as, variant, size, color } = props

const Tag = as === "router-link" ? RouterLink : as

const { isWaveActive, handleClick } = useWaveEffect(300)
</script>

<template>
   <Tag
      :class="[
         'ui-button',
         `variant-${variant}`,
         `size-${size}`,
         `color-${color}`,
         { wave: isWaveActive && variant !== 'ghost' },
      ]"
      @click="handleClick"
   >
      <slot name="start-icon" />
      <slot />
      <slot name="end-icon" />
   </Tag>
</template>
