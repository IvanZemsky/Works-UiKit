<script setup lang="ts">
import UiLink from "../src/components/UiLink/UiLink.vue"
import UiWrapper from "../src/components/UiWrapper/UiWrapper.vue"
import UiChip from "../src/components/UiChip/UiChip.vue"
import PlComponent from "./components/PlComponent.vue"
</script>

<template>
   <div class="playground">
      <PlComponent title="Link">
         <ui-link as="a" href="#">Test</ui-link>
         <ui-link as="a" href="#" hover="fade-dark">Test</ui-link>
         <ui-link as="a" href="#" hover="fade-dark" color="secondary">Test</ui-link>
         <ui-link as="a" href="#" hover="fade-light" weight="500">Test</ui-link>
         <ui-link as="a" href="#" hover="fade-light" weight="600" color="secondary">
            Test
         </ui-link>
      </PlComponent>
      <PlComponent title="Wrapper">
         <ui-wrapper style="background-color: bisque">
            paddings="x"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
         <ui-wrapper paddings="y" style="background-color: bisque">
            paddings="y"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
         <ui-wrapper paddings="both" style="background-color: bisque">
            paddings="both"
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officiis iste
            laboriosam! Repellat cum quisquam assumenda nisi minima saepe similique
            voluptatibus nihil? Sunt delectus earum commodi aspernatur, totam itaque hic.
         </ui-wrapper>
      </PlComponent>
      <PlComponent title="Chip">
         <ui-chip clickabel>Chip example</ui-chip>
         <ui-chip color="primary" clickable>Chip example</ui-chip>
         <ui-chip color="secondary" clickable>Chip example</ui-chip>
         <ui-chip variant="outlined" clickable>Chip example</ui-chip>
         <ui-chip color="primary" variant="outlined" clickable>Chip example</ui-chip>
         <ui-chip color="secondary" variant="outlined" clickable>Chip example</ui-chip>
      </PlComponent>
   </div>
</template>

<style scoped>
.playground {
   display: flex;
   flex-direction: column;
   gap: 20px;
   padding: 35px;
}
</style>
