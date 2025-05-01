<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
   <div class="component">
      <h2 class="component__title">{{ title }}</h2>
      <div class="component__items">
         <slot></slot>
      </div>
   </div>
</template>

<style scoped>
.component {
   padding: 20px;
   border: 1px solid black;
   border-radius: 25px;
}

.component__title {
   margin-bottom: 30px;
   font-size: 22px;
   font-weight: 600;
}

.component__items {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 25px;
}
</style>
