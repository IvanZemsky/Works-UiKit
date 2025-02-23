<script setup lang="ts">
import "./styles/theme.css"
import { ref } from "vue";
import UiButton from "./components/UiButton/UiButton.vue";


const count = ref(0)
</script>

<template>
  {{ count }}
  <ui-button @click="count++">Increment</ui-button>
</template>
