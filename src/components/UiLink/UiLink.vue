<script setup lang="ts">
import { RouterLink } from "vue-router"
import type { UiLinkProps } from "./UiLink.props"
import clsx from "clsx"
import "./UiLink.css"

const props = withDefaults(defineProps<UiLinkProps>(), {
   size: "md",
   color: "primary",
   as: "router-link",
   hover: "underline",
   weight: "400",
})

const { size, color, as, hover, weight } = props

const Tag = as === "router-link" ? RouterLink : as
</script>

<template>
   <Tag
      :class="
         clsx(
            'ui-link',
            `size-${size}`,
            `color-${color}`,
            `hover-${hover}`,
            `weight-${weight}`,
         )
      "
   >
      <slot name="start-icon" />
      <slot />
      <slot name="end-icon" />
   </Tag>
</template>

<style scoped></style>
