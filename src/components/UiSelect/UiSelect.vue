<script setup lang="ts">
import "./UiSelect.css"
import { computed, provide, ref, Transition } from "vue"
import type { UiSelectProps, UiSelectProvide, UiSelectValue } from "./types"
import UiButton from "../UiButton/UiButton.vue"
import UiSpacing from "../UiSpacing/UiSpacing.vue"

const props = withDefaults(defineProps<UiSelectProps>(), {
   size: "md",
})

const isOpen = ref(false)

const handleOpenClick = () => {
   isOpen.value = !isOpen.value
}

const emit = defineEmits(["update:modelValue"])

const modelValue = computed({
   get: () => props.modelValue,
   set: (value: UiSelectValue) => {
      emit("update:modelValue", value)
   },
})

provide<UiSelectProvide>("ui-select", {
   size: props.size,
   modelValue,
   isOpen,
})
</script>

<template>
   <ui-spacing class="ui-select" vertical gap="sm">
      <ui-button
         class="ui-select__button"
         variant="ghost"
         :size="size"
         :onclick="handleOpenClick"
      >
         {{ modelValue?.name || placeholder }}
      </ui-button>
      <transition name="ui-select-fade">
         <ui-spacing v-if="isOpen" class="ui-select__options" vertical gap="sm">
            <slot />
         </ui-spacing>
      </transition>
   </ui-spacing>
</template>
