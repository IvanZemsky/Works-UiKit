export type UiButtonProps = {
   as?: "router-link" | keyof HTMLElementTagNameMap
   variant?: "filled" | "outlined" | "ghost" | "light"
   size?: "sm" | "md" | "lg"
   color?: "primary" | "secondary" | "critical"
   weight?: "400" | "500" | "600"
   rounded?: boolean
}
