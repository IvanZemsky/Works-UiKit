<script setup lang="ts">
import "./UiWrapper.css"
import type { UiWrapperProps } from "./UiWrapper.props"

withDefaults(defineProps<UiWrapperProps>(), {
   paddings: "x",
})
</script>

<template>
   <div :class="['ui-wrapper', `paddings-${paddings}`]">
      <slot></slot>
   </div>
</template>
