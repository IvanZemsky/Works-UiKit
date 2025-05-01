<script setup lang="ts">
import clsx from "clsx"
import "./UiChip.css"
import type { UiChipProps } from "./UiChip.props"
import { useWaveEffect } from "@/lib/useWaveEffect"

withDefaults(defineProps<UiChipProps>(), {
   variant: "filled",
   color: "neutral",
   size: "md",
   clickable: false,
})

const { isWaveActive, handleClick } = useWaveEffect(300)
</script>

<template>
   <div
      :class="
         clsx('ui-chip', `variant-${variant}`, `color-${color}`, `size-${size}`, {
            clickable: clickable,
            wave: isWaveActive && clickable,
         })
      "
      @click="handleClick"
   >
      <slot name="start-icon" />
      <slot />
      <slot name="end-icon" />
   </div>
</template>

<style scoped></style>
