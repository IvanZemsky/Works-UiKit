<script setup lang="ts">
import { ref } from "vue"
import "./UiTooltip.css"
import type { UiTooltipProps } from "./UiTooltip.props"

withDefaults(defineProps<UiTooltipProps>(), {
   size: "md",
})

const isOpened = ref(false)

const handleMouseEnter = () => {
   isOpened.value = true
}
const handleMouseLeave = () => {
   isOpened.value = false
}
</script>

<template>
   <div
      :class="['ui-tooltip', `size-${size}`]"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
   >
      <slot></slot>
      <transition name="ui-tooltip-fade">
         <span class="ui-tooltip__text" v-show="isOpened">
            {{ text }}
         </span>
      </transition>
   </div>
</template>
