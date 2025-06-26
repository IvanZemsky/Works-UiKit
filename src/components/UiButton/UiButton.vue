<script setup lang="ts">
import "./UiButton.css"
import type { UiButtonProps } from "./UiButton.props"
import { useWaveEffect } from "../../lib/hooks/useWaveEffect"
import { RouterLink } from "vue-router"

const props = withDefaults(defineProps<UiButtonProps>(), {
   as: "button",
   variant: "filled",
   size: "md",
   color: "primary",
   weight: "400",
   rounded: false,
})

const { as, variant, size, color } = props

const Tag = as === "router-link" ? RouterLink : as

const { isWaveActive, handleClick } = useWaveEffect(300)
const hasWave = variant !== "ghost" && variant !== "light"
</script>

<template>
   <Tag
      :class="[
         'ui-button',
         `variant-${variant}`,
         `size-${size}`,
         `color-${color}`,
         `ui-s-weight-${weight}`,
         { wave: isWaveActive && hasWave },
         { rounded },
      ]"
      @click="handleClick"
   >
      <slot name="start-icon" />
      <span class="ui-button__text"><slot /></span>
      <slot name="end-icon" />
   </Tag>
</template>
