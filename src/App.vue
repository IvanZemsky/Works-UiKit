<script setup lang="ts">
import "./styles/theme.css"
import "./styles/reset.css"
import { ref } from "vue"
import UiSelect from "./components/UiSelect/UiSelect.vue"
import UiSelectItem from "./components/UiSelect/UiSelectItem.vue"
import UiCheckGroup from "./components/UiCheckGroup/UiCheckGroup.vue"
import UiCheckGroupItem from "./components/UiCheckGroup/UiCheckGroupItem.vue"
import type { UiSelectValue } from "./components/UiSelect/types"

const value = ref<UiSelectValue>()
const value2 = ref<string[]>([])
const value3 = ref<string>()
</script>

<template>
   <div class="wrap">
      {{ JSON.stringify(value) }}
      <ui-select placeholder="Select" class="width" v-model="value">
         <ui-select-item value="11" name="First">11</ui-select-item>
         <ui-select-item value="22" name="Second">22</ui-select-item>
         <ui-select-item value="33" name="Third">33</ui-select-item>
      </ui-select>
      {{ JSON.stringify(value2) }}
      <ui-check-group v-model="value2" name="test">
         <ui-check-group-item value="11" label="11" name="1" id="1">
            11
         </ui-check-group-item>
         <ui-check-group-item value="22" label="22" name="2" id="2">
            22
         </ui-check-group-item>
         <ui-check-group-item value="33" label="33" name="3" id="3">
            33
         </ui-check-group-item>
      </ui-check-group>
   </div>
</template>

<style scoped>
.wrap {
   padding: 15px;
}
.red {
   background-color: red;
}
.width {
   width: 300px;
}
</style>
