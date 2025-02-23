export type UiButtonProps = {
   /** Vaiant of button
    * @default 'filled'
    * @type 'filled' | 'outlined' | "ghost"
    */
   variant?: "filled" | "outlined" | "ghost"

   /** Size of button
    * @default 'md'
    * @type 'sm' | 'md' | 'lg'
    */
   size?: "sm" | "md" | "lg"

   /** Color of button
    * @default 'primary'
    * @type 'primary' | 'secondary'
    */
   color?: "primary" | "secondary"
}
