<script setup lang="ts">
import "./styles/theme.css"
import "./styles/reset.css"
import { ref } from "vue"
import UiRadioGroup from "./components/UiRadioGroup/UiRadioGroup.vue"
import UiSpacing from "./components/UiSpacing/UiSpacing.vue"
import UiRadioGroupItem from "./components/UiRadioGroup/UiRadioGroupItem.vue"

const value = ref()
</script>

<template>
   <div class="wrap">
      {{ value }}
      <ui-spacing align="center">
         <ui-radio-group
            title="Radio group"
            name="example-radio-group-sizes"
            size="lg"
            v-model="value"
         >
            <ui-radio-group-item
               id="example-radio-group-sizes-sm"
               value="radio1"
               label="Radio 1"
            />
            <ui-radio-group-item
               id="example-radio-group-sizes-md"
               value="radio2"
               label="Radio 2"
            />
            <ui-radio-group-item
               id="example-radio-group-sizes-lg"
               value="radio3"
               label="Radio 3"
            />
         </ui-radio-group>
      </ui-spacing>
   </div>
</template>

<style scoped>
.wrap {
   padding: 15px;
}
</style>
