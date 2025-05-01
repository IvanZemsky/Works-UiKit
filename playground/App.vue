<script setup lang="ts">
import "./playground.css"
import UiLink from "@/components/UiLink/UiLink.vue"
</script>

<template>
   <div class="playground">
      <div class="component">
         <h2 class="component__title">Link</h2>
         <div class="component__items">
            <ui-link as="a" href="#">Test</ui-link>
            <ui-link as="a" href="#" hover="fade-dark">Test</ui-link>
            <ui-link as="a" href="#" hover="fade-dark" color="secondary">Test</ui-link>
            <ui-link as="a" href="#" hover="fade-light" weight="500">Test</ui-link>
            <ui-link as="a" href="#" hover="fade-light" weight="600" color="secondary">
               Test
            </ui-link>
         </div>
      </div>
   </div>
</template>
