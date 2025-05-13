import "./styles/reset.css"
import "./styles/theme.css"

import UiButton from "./components/UiButton/UiButton.vue"
export type { UiButtonProps } from "./components/UiButton/UiButton.props"

import UiCheck from "./components/UiCheck/UiCheck.vue"
export type { UiCheckProps } from "./components/UiCheck/UiCheck.props"

import UiCheckGroup from "./components/UiCheckGroup/UiCheckGroup.vue"
import UiCheckGroupItem from "./components/UiCheckGroup/UiCheckGroupItem.vue"
export type { UiCheckGroupProps } from "./components/UiCheckGroup/types"

import UiInput from "./components/UiInput/UiInput.vue"
export type { UiInputProps } from "./components/UiInput/UiInput.props"

import UiRadio from "./components/UiRadio/UiRadio.vue"
import UiRadioGroup from "./components/UiRadioGroup/UiRadioGroup.vue"
import UiRadioGroupItem from "./components/UiRadioGroup/UiRadioGroupItem.vue"
export type { UiRadioProps } from "./components/UiRadio/UiRadio.props"
export type { UiRadioGroupProps } from "./components/UiRadioGroup/types"

import UiSelect from "./components/UiSelect/UiSelect.vue"
import UiSelectOption from "./components/UiSelect/UiSelectOption.vue"
export type { UiSelectOptionProps, UiSelectProps } from "./components/UiSelect/types"

import UiSpacing from "./components/UiSpacing/UiSpacing.vue"
export type { UiSpacingProps } from "./components/UiSpacing/UiSpacing.props"

import UiCard from "./components/UiCard/UiCard.vue"
export type { UiCardProps } from "./components/UiCard/UiCard.props"

import UiLink from "./components/UiLink/UiLink.vue"
export type { UiLinkProps } from "./components/UiLink/UiLink.props"

import UiChip from "./components/UiChip/UiChip.vue"
export type { UiChipProps } from "./components/UiChip/UiChip.props"

import UiAvatar from "./components/UiAvatar/UiAvatar.vue"
export type { UiAvatarProps } from "./components/UiAvatar/UiAvatar.props"

import UiSkeleton from "./components/UiSkeleton/UiSkeleton.vue"
export type { UiSkeletonProps } from "./components/UiSkeleton/UiSkeleton.props"

import UiWrapper from "./components/UiWrapper/UiWrapper.vue"
export type { UiWrapperProps } from "./components/UiWrapper/UiWrapper.props"

import UiTooltip from "./components/UiTooltip/UiTooltip.vue"
export type { UiTooltipProps } from "./components/UiTooltip/UiTooltip.props"

import UiModal from "./components/UiModal/UiModal.vue"
export type { UiModalProps } from "./components/UiModal/UiModal.props"

export default {
   install: (app: any) => {
      app.component("UiButton", UiButton)
      app.component("UiCheck", UiCheck)
      app.component("UiCheckGroup", UiCheckGroup)
      app.component("UiCheckGroupItem", UiCheckGroupItem)
      app.component("UiInput", UiInput)
      app.component("UiRadio", UiRadio)
      app.component("UiRadioGroup", UiRadioGroup)
      app.component("UiRadioGroupItem", UiRadioGroupItem)
      app.component("UiSelect", UiSelect)
      app.component("UiSelectOption", UiSelectOption)
      app.component("UiSpacing", UiSpacing)
      app.component("UiCard", UiCard)
      app.component("UiLink", UiLink)
      app.component("UiChip", UiChip)
      app.component("UiAvatar", UiAvatar)
      app.component("UiSkeleton", UiSkeleton)
      app.component("UiWrapper", UiWrapper)
      app.component("UiTooltip", UiTooltip)
      app.component("UiModal", UiModal)
   }
}
