<script setup lang="ts">
import "./UiSelect.css"
import { computed, provide, ref, Transition } from "vue"
import type { UiSelectProps, UiSelectProvide } from "./types"
import UiButton from "../UiButton/UiButton.vue"
import UiSpacing from "../UiSpacing/UiSpacing.vue"

const props = withDefaults(defineProps<UiSelectProps>(), {
   modelValue: "",
})

const isOpen = ref(false)

const handleOpenClick = () => {
   isOpen.value = !isOpen.value
}

const emit = defineEmits(["update:modelValue"])

const modelValue = computed({
   get: () => props.modelValue,
   set: (value: string) => {
      emit("update:modelValue", value)
   },
})

provide<UiSelectProvide>("ui-select", {
   modelValue,
})
</script>

<template>
   <ui-spacing class="ui-select" vertical gap="sm">
      <ui-button class="ui-select-button" variant="ghost" :onclick="handleOpenClick">
         {{ modelValue || placeholder }}
      </ui-button>
      <transition name="ui-select-fade">
         <ui-spacing v-if="isOpen" class="ui-select-options" vertical gap="sm">
            <slot />
         </ui-spacing>
      </transition>
   </ui-spacing>
</template>
