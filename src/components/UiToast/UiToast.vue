<script setup lang="ts">
import "./UiToast.css"
import { onUnmounted, ref, watch } from "vue"

export type UiToastProps = {
   timeout?: number
   positionX?: "left" | "right"
   positionY?: "top" | "bottom"
   color?: "primary" | "critical"
}

const props = withDefaults(defineProps<UiToastProps>(), {
   positionX: "right",
   positionY: "bottom",
   color: "primary",
})

const timeoutId = ref<number | null>(0)

const isOpen = defineModel({
   default: false,
})

defineOptions({
   inheritAttrs: false,
})

const preventClose = (event: Event) => {
   event.stopPropagation()
}

watch(isOpen, () => {
   if (isOpen.value && props.timeout) {
      timeoutId.value = setTimeout(() => {
         isOpen.value = false
      }, props.timeout)
   }
})

onUnmounted(() => {
   if (timeoutId.value) {
      clearTimeout(timeoutId.value)
      timeoutId.value = null
   }
})
</script>

<template>
   <transition name="ui-fade-vertical">
      <div
         :class="[
            'ui-toast',
            `position-${positionX}`,
            `position-${positionY}`,
            `color-${color}`,
         ]"
         v-bind="$attrs"
         v-if="isOpen"
         @click.stop="preventClose"
      >
         <slot />
      </div>
   </transition>
</template>
