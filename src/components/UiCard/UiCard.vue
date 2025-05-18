<script setup lang="ts">
import { RouterLink } from "vue-router"
import "./UiCard.css"
import type { UiCardProps } from "./UiCard.props"

const props = withDefaults(defineProps<UiCardProps>(), {
   as: "div",
   hoverable: false,
   size: "md",
})

const Tag = props.as === "router-link" ? RouterLink : props.as
</script>

<template>
   <Tag :class="['ui-card', `size-${size}`, { hoverable }]">
      <slot />
   </Tag>
</template>
