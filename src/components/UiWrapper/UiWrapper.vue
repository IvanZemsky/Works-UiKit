<script setup lang="ts">
import "./UiWrapper.css"
import clsx from "clsx"
import type { UiWrapperProps } from "./UiWrapper.props"

 withDefaults(defineProps<UiWrapperProps>(), {
   paddings: "x",
})
</script>

<template>
   <div :class="clsx('ui-wrapper', `paddings-${paddings}`)">
      <slot></slot>
   </div>
</template>
