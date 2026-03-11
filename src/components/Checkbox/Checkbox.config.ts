import { styles } from './Checkbox.styles'
import { CheckboxState } from './types'

export const checkboxStateStyleMap = {
  checked: styles.checkboxChecked,
  unchecked: styles.checkboxUnchecked
} satisfies Record<CheckboxState, (typeof styles)[keyof typeof styles]>
