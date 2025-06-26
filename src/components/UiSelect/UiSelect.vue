<script setup lang="ts">
import "./UiSelect.css"
import { provide, ref } from "vue"
import type { UiSelectProps, UiSelectProvide } from "./types"
import UiButton from "../UiButton/UiButton.vue"
import UiSpacing from "../UiSpacing/UiSpacing.vue"

const props = withDefaults(defineProps<UiSelectProps>(), {
   size: "md",
})
const model = defineModel<unknown>({
   required: true,
})

const selected = ref("")
const isOpen = ref(false)

provide<UiSelectProvide>("ui-select", {
   size: props.size,
   model,
   selected,
   isOpen,
})

const handleOpenClick = () => {
   isOpen.value = !isOpen.value
}
</script>

<template>
   <ui-spacing class="ui-select" vertical gap="sm">
      <ui-button
         class="ui-select__button"
         variant="ghost"
         :size="size"
         :onclick="handleOpenClick"
      >
         {{ selected || placeholder }}
      </ui-button>
      <transition name="ui-fade-vertical">
         <ui-spacing v-show="isOpen" class="ui-select__options" vertical gap="sm">
            <slot />
         </ui-spacing>
      </transition>
   </ui-spacing>
</template>
