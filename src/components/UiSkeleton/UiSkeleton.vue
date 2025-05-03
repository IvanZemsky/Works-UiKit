<script setup lang="ts">
import type { UiSkeletonProps } from "./UiSkeleton.props"
import "./UiSkeleton.css"

const props = withDefaults(defineProps<UiSkeletonProps>(), {
   variant: "rectangle",
   animation: "wave",
   size: "md",
})

const isAnimation = props.animation !== "none"
</script>

<template>
   <div
      :class="[
         'ui-skeleton',
         `variant-${variant}`,
         `size-${size}`,
         { [`animation-${animation}`]: isAnimation },
      ]"
   ></div>
</template>
