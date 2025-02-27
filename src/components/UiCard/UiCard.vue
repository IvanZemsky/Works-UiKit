<script setup lang="ts">
import clsx from "clsx"
import "./UiCard.css"
import type { UiCardProps } from "./UiCard.props"

withDefaults(defineProps<UiCardProps>(), {
   hoverable: false,
   size: "md",
})
</script>

<template>
   <div :class="clsx('ui-card', `size-${size}`, { hoverable })">
      <slot />
   </div>
</template>
