export type UiSpacingProps = {
   /**
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

   align?: "start" | "end" | "center" | "baseline" | "stretch"

   /**
    * Defines if elements should fill the available space (width)
   */
   fill?: boolean

   /**
    * flex-grow: 1
    */
   grow?: boolean

   /**
    * flex-shrink: 1
    */
   shrink?: boolean

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

   reverse?: boolean
}
