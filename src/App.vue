<script setup lang="ts">
import "./styles/theme.css"
import "./styles/reset.css"
import { ref } from "vue"
import UiSelect from "./components/UiSelect/UiSelect.vue"
import UiSelectItem from "./components/UiSelect/UiSelectItem.vue"

const value = ref<string>()
</script>

<template>
   <div class="wrap">
      {{ JSON.stringify(value) }}
      <ui-select placeholder="Select" v-model="value">
         <ui-select-item value="11">11</ui-select-item>
         <ui-select-item value="22">22</ui-select-item>
         <ui-select-item value="33">33</ui-select-item>
      </ui-select>
   </div>
</template>

<style scoped>
.wrap {
   padding: 15px;
}
.red {
   background-color: red;
}
</style>
