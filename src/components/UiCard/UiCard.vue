<script setup lang="ts">
import "./UiCard.css"
import type { UiCardProps } from "./UiCard.props"

withDefaults(defineProps<UiCardProps>(), {
   hoverable: false,
   size: "md",
})
</script>

<template>
   <div :class="['ui-card', `size-${size}`, { hoverable }]">
      <slot />
   </div>
</template>
