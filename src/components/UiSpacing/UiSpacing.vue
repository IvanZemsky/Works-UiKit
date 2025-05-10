<script setup lang="ts">
import type { UiSpacingProps } from "./UiSpacing.props"
import "./UiSpacing.css"

const props = withDefaults(defineProps<UiSpacingProps>(), {
   gap: "md",
   justify: "start",
   align: "start",
   reverse: false,
   wrap: false,
   vertical: false,
   fill: false,
   grow: false,
   noShrink: false,
})

const className = [
   "ui-spacing",
   flexDirectionClass(props.vertical, props.reverse),
   wrapClass(props.wrap),
   `justify-${props.justify}`,
   `align-${props.align}`,
   `gap-${props.gap}`,
   {
      fill: props.fill,
      grow: props.grow,
      "no-shrink": props.noShrink,
   },
]

function flexDirectionClass(
   vertical: UiSpacingProps["vertical"],
   reverse: UiSpacingProps["reverse"],
) {
   if (vertical && !reverse) return "flex-col"
   if (vertical && reverse) return "flex-col-reverse"
   if (!vertical && reverse) return "flex-row-reverse"
   return "flex-row"
}

function gapStyle(gap: UiSpacingProps["gap"]) {
   if (Array.isArray(gap)) {
      if (gap.length === 2) return `${gap[0]}px ${gap[1]}px`
      if (gap.length === 1) return `${gap[0]}px`
   }
}

function wrapClass(wrap: boolean) {
   return wrap ? "flex-wrap" : "flex-nowrap"
}
</script>

<template>
   <div
      :class="className"
      :style="{
         gap: gapStyle(gap),
      }"
   >
      <slot />
   </div>
</template>
