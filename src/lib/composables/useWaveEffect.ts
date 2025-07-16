import { ref } from "vue"

/**
 * Function for creating a wave effect on an element.
 * Returns the state of the wave and the function of pressing
 * @param ms - The number of milliseconds should be equal to the animation duration
 */
export function useWaveEffect(ms: number) {
   const isWaveActive = ref(false)

   const handleClick = () => {
      isWaveActive.value = true
      setTimeout(() => {
         isWaveActive.value = false
      }, ms)
   }

   return { isWaveActive, handleClick }
}
