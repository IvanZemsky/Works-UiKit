export type UiSpacingProps = {
   /**
    * Size of the spacing
    * If specified as an array or as number, the first value is cross axis spacing, and the second value is main axis spacing
    * @default "md"
    */
   gap?: "sm" | "md" | "lg" | [number, number]

   /**
    * Direction of the spacing
    * @default "start"
    */
   justify?:
      | "start"
      | "center"
      | "end"
      | "space-around"
      | "space-between"
      | "space-evenly"

   /**
    * Align of the spacing
    * @default "start"
    */
   align?: "start" | "end" | "center" | "baseline" | "stretch"

   /**
    * Defines if elements should be stacked vertically
    * @default false
    */
   vertical?: boolean

   /**
    * Defines if elements should exceed the line break
    * @default false
    */
   wrap?: boolean

   /**
    * Defines if elements should be reversed
    * @default false
    */
   reverse?: boolean
}
