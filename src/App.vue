<script setup lang="ts">
import "./styles/theme.css"
import "./styles/reset.css"
import { ref } from "vue"
import UiSpacing from "./components/UiSpacing/UiSpacing.vue"
import UiCheckGroup from "./components/UiCheckGroup/UiCheckGroup.vue"
import UiCheckGroupItem from "./components/UiCheckGroup/UiCheckGroupItem.vue"

const value = ref<string[]>([])
</script>

<template>
   <div class="wrap">
      {{ JSON.stringify(value) }}
      <ui-spacing align="center">
         <ui-check-group title="Check group" size="lg" v-model="value">
            <ui-check-group-item
               id="example-check-group-sizes-sm"
               name="example-check-group-sizes-sm"
               value="check1"
               label="Check 1"
            />
            <ui-check-group-item
               id="example-check-group-sizes-md"
               name="example-check-group-sizes-md"
               value="check2"
               label="Check 2"
            />
            <ui-check-group-item
               id="example-check-group-sizes-lg"
               name="example-check-group-sizes-lg"
               value="check3"
               label="Check 3"
            />
         </ui-check-group>
      </ui-spacing>
   </div>
</template>

<style scoped>
.wrap {
   padding: 15px;
}
</style>
