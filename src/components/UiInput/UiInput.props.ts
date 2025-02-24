export type UiInputProps = {
   /** Vaiant of input
    * @default 'outlined'
    * @type 'outlined' | "ghost"
    */
   variant?: "outlined" | "ghost"

   /** Size of input
    * @default 'md'
    * @type 'sm' | 'md' | 'lg'
    */
   size?: "sm" | "md" | "lg"

   /** Color of input
    * @default 'primary'
    * @type 'primary' | 'secondary'
    */
   color?: "primary" | "secondary"

   modelValue?: string
}
