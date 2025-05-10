<script setup lang="ts">
import "./UiChip.css"
import type { UiChipProps } from "./UiChip.props"

const props = withDefaults(defineProps<UiChipProps>(), {
   variant: "filled",
   color: "neutral",
   size: "md",
   clickable: false,
   weight: "400",
})

const className = [
   "ui-chip",
   `variant-${props.variant}`,
   `color-${props.color}`,
   `size-${props.size}`,
   `ui-s-weight-${props.weight}`,
   {
      clickable: props.clickable,
   },
]
</script>

<template>
   <div :class="className">
      <slot name="start-icon" />
      <span>
         <slot />
      </span>
      <slot name="end-icon" />
   </div>
</template>

<style scoped></style>
