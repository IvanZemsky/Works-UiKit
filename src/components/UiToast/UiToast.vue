<script setup lang="ts">
import { onUnmounted, ref, watch } from "vue"

export type UiToastProps = {
   timeout?: number
   positionX?: "left" | "right"
   positionY?: "top" | "bottom"
}

const props = withDefaults(defineProps<UiToastProps>(), {
   positionX: "right",
   positionY: "bottom",
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
         :class="['ui-toast', `position-${positionX}`, `position-${positionY}`]"
         v-bind="$attrs"
         v-if="isOpen"
         @click.stop="preventClose"
      >
         <slot />
      </div>
   </transition>
</template>

<style scoped>
.ui-toast {
   position: fixed;
   padding: 1rem;
   background-color: var(--primary-contrast);
   border-radius: 0.5rem;
   overflow: hidden;
   border: 1px solid var(--primary-dark);
   z-index: 999;
}

.ui-toast::before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   width: 4px;
   height: 100%;
   background-color: var(--primary-main);
}

.ui-toast.position-right {
   right: 1rem;
}

.ui-toast.position-left {
   left: 1rem;
}

.ui-toast.position-top {
   top: 1rem;
}

.ui-toast.position-bottom {
   bottom: 1rem;
}
</style>
