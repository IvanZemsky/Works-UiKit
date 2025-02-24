<script setup lang="ts">
import "./styles/theme.css"
import "./styles/reset.css"
import { ref } from "vue"
import UiButton from "./components/UiButton/UiButton.vue"
import { SearchOutlined } from "@vicons/antd"
import UiInput from "./components/UiInput/UiInput.vue"

const count = ref(0)
const text = ref("")
</script>

<template>
   <div class="wrap">
      {{ count }}
      text: {{ text }}
      <ui-button @click="count++">Increment</ui-button>
      <ui-input placeholder="Outlined" v-model="text">
         <template #icon><SearchOutlined /></template>
      </ui-input>
   </div>
</template>

<style scoped>
.wrap{
  padding: 15px;
}
</style>
