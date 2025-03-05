import { computed } from "vue"

export function useModelValue<T, P = T>(
   emit: (event: "update:modelValue", ...args: any[]) => void,
   valueToGet: T,
) {
   const modelValue = computed<T, P>({
      get: () => valueToGet,
      set: (value: P) => {
         emit("update:modelValue", value)
      },
   })

   return modelValue
}
