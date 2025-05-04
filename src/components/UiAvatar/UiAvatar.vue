<script setup lang="ts">
import "./UiAvatar.css"
import type { UiAvatarProps } from "./UiAvatar.props"
import { ref, onMounted } from "vue"

const props = withDefaults(defineProps<UiAvatarProps>(), {
   size: "md",
   alt: "",
   src: "",
})

const { alt, src } = props

const imageLoaded = ref(false)

const avatarText = setAvatarText(alt)

onMounted(() => {
   if (src) {
      const img = new Image()
      img.onload = handleImageLoad
      img.onerror = handleImageError
      img.src = src
   }
})

const handleImageLoad = () => {
   imageLoaded.value = true
}

const handleImageError = () => {
   imageLoaded.value = false
}

function setAvatarText(alt: string) {
   if (alt.length === 2) {
      return alt
   }
   return alt
      .split(" ")
      .map((word, i) => (i < 2 ? word[0].toUpperCase() : null))
      .join("")
}
</script>

<template>
   <div
      :class="['ui-avatar', `size-${size}`]"
      :style="`background-image: ${src && !imageLoaded ? 'none' : `url(${src})`}`"
   >
      <span v-if="!src && !imageLoaded">{{ avatarText }}</span>
      <img
         v-if="src && imageLoaded"
         :src="src"
         :alt="alt"
         @load="handleImageLoad"
         @error="handleImageError"
      />
      <span v-else-if="src && !imageLoaded">{{ avatarText }}</span>
   </div>
</template>
