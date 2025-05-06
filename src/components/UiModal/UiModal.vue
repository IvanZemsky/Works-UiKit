<script setup lang="ts">
import { onMounted, onUnmounted, useAttrs } from "vue"
import "./UiModal.css"
import type { UiModalProps } from "./UiModal.props"

defineProps<UiModalProps>()

defineOptions({
   inheritAttrs: false,
})

const open = defineModel<boolean>({
   required: true,
   default: false,
})

const handleClose = () => {
   open.value = false
}

const preventClose = (event: Event) => {
   event.stopPropagation()
}

const attrs = useAttrs()

function handleEscapeKeydown(event: KeyboardEvent) {
   if (event.key === "Escape") {
      open.value = false
   }
}

onMounted(() => {
   document.addEventListener("keydown", handleEscapeKeydown)
})

onUnmounted(() => {
   document.removeEventListener("keydown", handleEscapeKeydown)
})
</script>

<template>
   <Teleport :to="teleport">
      <transition name="ui-modal-fade">
         <div v-bind="attrs" class="ui-modal" v-show="open" @click="handleClose">
            <div @click.stop="preventClose">
               <slot />
            </div>
         </div>
      </transition>
   </Teleport>
</template>
