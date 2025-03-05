<script setup lang="ts">
import "./UiSelect.css"
import { provide, ref } from "vue"
import type { UiSelectProps, UiSelectProvide } from "./types"
import UiButton from "../UiButton/UiButton.vue"
import UiSpacing from "../UiSpacing/UiSpacing.vue"
import { useModelValue } from "../../lib/useModelValue"

const props = withDefaults(defineProps<UiSelectProps>(), {
   modelValue: "",
})

const isOpen = ref(false)

const handleOpenClick = () => {
   isOpen.value = !isOpen.value
}

const emit = defineEmits(["update:modelValue"])

const modelValue = useModelValue(emit, props.modelValue)

provide<UiSelectProvide>("ui-select", {
   modelValue,
})
</script>

<template>
   <div class="ui-select">
      <ui-button class="ui-select-button" variant="ghost" :onclick="handleOpenClick">
         {{ modelValue || placeholder }}
      </ui-button>
      <ui-spacing v-if="isOpen" class="ui-select-options" vertical gap="sm">
         <slot />
      </ui-spacing>
   </div>
</template>
