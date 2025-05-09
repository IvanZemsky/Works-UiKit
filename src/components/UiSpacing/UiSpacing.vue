<script setup lang="ts">
import type { UiSpacingProps } from "./UiSpacing.props"
import "./UiSpacing.css"

withDefaults(defineProps<UiSpacingProps>(), {
   gap: "md",
   justify: "start",
   align: "start",
   reverse: false,
   wrap: false,
   vertical: false,
   fill: false,
   grow: false,
   shrink: false,
})

const flexDirectionClass = (
   vertical: UiSpacingProps["vertical"],
   reverse: UiSpacingProps["reverse"],
) => {
   if (vertical && !reverse) return "flex-col"
   if (vertical && reverse) return "flex-col-reverse"
   if (!vertical && reverse) return "flex-row-reverse"
   return "flex-row"
}

const gapClass = (gap: UiSpacingProps["gap"]) => {
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

const wrapClass = (wrap: boolean) => (wrap ? "flex-wrap" : "flex-nowrap")
</script>

<template>
   <div
      :class="[
         'ui-spacing',
         flexDirectionClass(vertical, reverse),
         wrapClass(wrap),
         `justify-${justify}`,
         `align-${align}`,
         {
            fill,
            grow,
            shrink,
         },
      ]"
      :style="{
         gap: gapClass(gap),
      }"
   >
      <slot />
   </div>
</template>
