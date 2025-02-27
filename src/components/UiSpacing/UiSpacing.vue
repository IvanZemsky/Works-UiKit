<script setup lang="ts">
import type { UiSpacingProps } from "./UiSpacing.props"

withDefaults(defineProps<UiSpacingProps>(), {
   gap: "md",
   justify: "start",
   align: "start",
   reverse: false,
   wrap: false,
   vertical: false,
})

const flexDirection = (
   vertical: UiSpacingProps["vertical"],
   reverse: UiSpacingProps["reverse"],
) => {
   if (vertical && !reverse) return "column"
   if (vertical && reverse) return "column-reverse"
   if (!vertical && reverse) return "row-reverse"
   return "row" // (!vertical && !reverse)
}

const gapValue = (gap: UiSpacingProps["gap"]) => {
   if (Array.isArray(gap)) return `${gap[0]}px ${gap[1]}px`

   switch (gap) {
      case "sm":
         return "0.5rem"
      case "md":
         return "1rem"
      case "lg":
         return "1.5rem"
      default:
         return "1rem"
   }
}
</script>

<template>
   <div
      :style="{
         display: 'flex',
         justifyContent: justify,
         alignItems: align,
         flexDirection: flexDirection(vertical, reverse),
         flexWrap: wrap ? 'wrap' : 'nowrap',
         gap: gapValue(gap),
      }"
   >
      <slot />
   </div>
</template>
