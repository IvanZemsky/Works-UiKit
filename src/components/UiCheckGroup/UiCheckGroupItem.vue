<script setup lang="ts">
import { ref, useAttrs } from "vue"
import UiCheck from "../UiCheck/UiCheck.vue"
import type { UiCheckGroupProvide } from "./types"
import type { UiCheckProps } from "../UiCheck/UiCheck.props"
import { useInject } from "@/lib/composables/useInject";

defineProps<UiCheckProps>()

const { size, model, name } = useInject<UiCheckGroupProvide>("ui-check-group", {
   size: "md",
   name: "",
   model: ref([]),
})

const { value, id: checkId } = useAttrs()

const id = checkId || setId()

function setId() {
   return `${name}-${value}`
}
</script>

<template>
   <ui-check
      v-model="model"
      :size="size"
      :checked="model.includes(value)"
      :label="label"
      :id="id"
      :name="name"
   />
</template>
