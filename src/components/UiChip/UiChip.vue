<script setup lang="ts">
import "./UiChip.css"
import type { UiChipProps } from "./UiChip.props"

withDefaults(defineProps<UiChipProps>(), {
   variant: "filled",
   color: "neutral",
   size: "md",
   clickable: false,
})

</script>

<template>
   <div
      :class="[
         'ui-chip',
         `variant-${variant}`,
         `color-${color}`,
         `size-${size}`,
         {
            clickable: clickable,
         },
      ]"
   >
      <slot name="start-icon" />
      <slot />
      <slot name="end-icon" />
   </div>
</template>

<style scoped></style>
