<script setup lang="ts">
import UiLink from "../src/components/UiLink/UiLink.vue"
import UiWrapper from "../src/components/UiWrapper/UiWrapper.vue"
import UiChip from "../src/components/UiChip/UiChip.vue"
import UiAvatar from "../src/components/UiAvatar/UiAvatar.vue"
import UiSkeleton from "../src/components/UiSkeleton/UiSkeleton.vue"
import PlComponent from "./components/PlComponent.vue"
import UiButton from "../src/components/UiButton/UiButton.vue"
import UiTooltip from "../src/components/UiTooltip/UiTooltip.vue"
import UiModal from "../src/components/UiModal/UiModal.vue"
import UiCard from "../src/components/UiCard/UiCard.vue"
import UiSpacing from "../src/components/UiSpacing/UiSpacing.vue"
import UiInput from "../src/components/UiInput/UiInput.vue"
import { MessageOutlined } from "@vicons/antd"
import { ref } from "vue"

const modalOpened = ref(false)
const inputValue = ref("")

const openModal = () => {
   modalOpened.value = true
}
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
         <ui-chip size="lg">Chip example</ui-chip>
         <ui-chip color="primary" clickable>Chip example</ui-chip>
         <ui-chip color="secondary" clickable>Chip example</ui-chip>
         <ui-chip variant="outlined" clickable>Chip example</ui-chip>
         <ui-chip color="primary" variant="outlined" clickable>Chip example</ui-chip>
         <ui-chip color="secondary" variant="outlined" size="sm" clickable>
            Chip example
         </ui-chip>
         <ui-spacing align="center" gap="md">
            <ui-chip size="sm" rounded>Chip example</ui-chip>
            <ui-chip size="md" rounded>Chip example</ui-chip>
            <ui-chip size="lg" rounded>Chip example</ui-chip>
         </ui-spacing>
      </PlComponent>
      <PlComponent title="Avatar">
         <ui-avatar size="lg" alt="FT" src="../src/components/UiAvatar/male-1.jpg" />
         <ui-avatar size="lg" alt="FT" />
         <ui-avatar size="md" alt="F" />
         <ui-avatar size="sm" alt="F" />
      </PlComponent>
      <PlComponent title="Skeleton">
         <ui-skeleton size="lg" />
         <ui-skeleton size="md" />
         <ui-skeleton size="sm" />
         <ui-skeleton size="lg" variant="disc" />
         <ui-skeleton size="md" variant="disc" />
         <ui-skeleton size="sm" variant="disc" />
         <ui-skeleton class="skeleton" animation="pulse" />
         <ui-skeleton class="skeleton" animation="wave" />
         <ui-skeleton class="skeleton" animation="none" />
      </PlComponent>
      <PlComponent title="Tooltip">
         <ui-tooltip text="Tooltip text 123 123" position="top" size="sm">
            <ui-button>Hover me</ui-button>
         </ui-tooltip>
         <ui-tooltip text="Tooltip text 456 456" size="md">
            <ui-button>Hover me</ui-button>
         </ui-tooltip>
         <ui-tooltip text="Tooltip text 789 789" size="lg">
            <ui-button>Hover me</ui-button>
         </ui-tooltip>
      </PlComponent>
      <PlComponent title="Button">
         <ui-button to="/">Button</ui-button>
         <ui-button variant="outlined">Button</ui-button>
         <ui-button variant="ghost">Button</ui-button>
         <ui-button variant="light">Button</ui-button>
         <ui-button variant="light" color="secondary">Button</ui-button>
         <ui-spacing align="center" gap="md">
            <ui-button size="sm"><message-outlined /></ui-button>
            <ui-button size="sm">
               <template #start-icon><message-outlined /></template>
               Hover me
            </ui-button>
         </ui-spacing>
         <ui-spacing align="center" gap="md">
            <ui-button size="md"><message-outlined /></ui-button>
            <ui-button size="md">
               <template #start-icon><message-outlined /></template>
               Hover me
            </ui-button>
         </ui-spacing>
         <ui-spacing align="center" gap="md">
            <ui-button size="lg"><message-outlined /></ui-button>
            <ui-button size="lg">
               <template #start-icon><message-outlined /></template>
               Hover me
            </ui-button>
         </ui-spacing>
         <ui-spacing align="center" gap="md">
            <ui-button size="sm" rounded>Button</ui-button>
            <ui-button size="md" rounded>Button</ui-button>
            <ui-button size="lg" rounded>Button</ui-button>
         </ui-spacing>
      </PlComponent>
      <PlComponent title="Modal">
         <ui-button @click="openModal">Open modal</ui-button>
         <ui-modal v-model="modalOpened" teleport="#modal">
            <ui-card>Modal inserted to #modal</ui-card>
         </ui-modal>
      </PlComponent>
      <PlComponent title="Input">
         <p>{{ inputValue }}</p>
         <ui-input v-model="inputValue"/>
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
.ui-skeleton.skeleton {
   height: 100px;
}
</style>
