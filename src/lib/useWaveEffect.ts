import { ref } from "vue"

/**
 * Функция для создания эффекта волны на элементе
 * @description Возвращает состояние активности волны и функцию нажатия
 * @param ms - Количество миллисекунд, должно быть равно длительности анимации
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
