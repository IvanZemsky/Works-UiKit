<script setup lang="ts">
import UiLink from "./src/components/UiLink/UiLink.vue"
</script>

<template>
   <ui-link as="a" href="#">Test</ui-link>
   <ui-link as="a" href="#" hover="fade-dark">Test</ui-link>
   <ui-link as="a" href="#" hover="fade-dark" color="secondary">Test</ui-link>
   <ui-link as="a" href="#" hover="fade-light" weight="500">Test</ui-link>
   <ui-link as="a" href="#" hover="fade-light" weight="600" color="secondary">
      Test
   </ui-link>
</template>

<style scoped></style>
