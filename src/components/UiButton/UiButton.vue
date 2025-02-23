<script setup lang="ts">
import clsx from "clsx"
import "./UiButton.css"
import type { UiButtonProps } from "./UiButton.props"
import { useWaveEffect } from "../../lib/useWaveEffect"

const props = withDefaults(defineProps<UiButtonProps>(), {
   variant: "filled",
   size: "md",
   color: "primary",
})

const { variant, size, color } = props

const { isWaveActive, handleClick } = useWaveEffect(300)
</script>

<template>
   <button
      :class="
         clsx(
            'ui-button',
            `ui-button--variant-${variant}`,
            `ui-button--size-${size}`,
            `ui-button--color-${color}`,
            { 'ui-button--wave': isWaveActive && variant !== 'ghost' },
         )
      "
      @click="handleClick"
   >
      <slot />
   </button>
</template>
