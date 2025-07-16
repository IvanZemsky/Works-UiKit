import type { ModelRef } from "vue"

export function handleNumInput(
   input: HTMLInputElement,
   attrs: Record<string, unknown>,
   model: ModelRef<string | number | undefined>,
) {
   const inputValue = parseFloat(input.value)
   const min = parseNumAttr(String(attrs.min))
   const max = parseNumAttr(String(attrs.max))

   if (input.value === "" || isNumInputAvailable(inputValue, min, max)) {
      model.value = input.value
   } else {
      input.value = String(model.value)
   }
}

export function handleTextInput(
   input: HTMLInputElement,
   attrs: Record<string, unknown>,
   model: ModelRef<string | number | undefined>,
) {
   const minLength = parseNumAttr(attrs.minlength)
   const maxLength = parseNumAttr(attrs.maxlength)

   if (isInputAvaliable(input.value, maxLength, minLength)) {
      input.value = String(model.value)
   } else {
      model.value = input.value
   }
}

function parseNumAttr(attr: unknown | undefined) {
   if (attr) {
      return parseFloat(String(attr))
   }
}

// два похожтх метода!!!
function isNumInputAvailable(
   inputValue: number,
   min: number | undefined,
   max: number | undefined,
) {
   const isMin = min === undefined
   const isMax = max === undefined
   const isFitsMinMax = (isMin || inputValue >= min) && (isMax || inputValue <= max)

   return !isNaN(inputValue) && isFitsMinMax
}

function isInputAvaliable(
   inputValue: string,
   maxLength: number | undefined,
   minLength: number | undefined,
) {
   const isMaxLengthAvaliable = maxLength !== undefined && inputValue.length > maxLength
   const isMinLengthAvaliable = minLength !== undefined && inputValue.length < minLength

   return isMaxLengthAvaliable && isMinLengthAvaliable
}
