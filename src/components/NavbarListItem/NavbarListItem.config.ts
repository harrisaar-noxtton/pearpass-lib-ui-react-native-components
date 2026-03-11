import { styles } from './NavbarListItem.styles'
import { NavbarListItemVariant } from './types'

export const ICON_SIZE = 20

export const variantStyleMap = {
  default: styles.variantDefault,
  secondary: styles.variantSecondary,
  destructive: styles.variantDestructive
} satisfies Record<NavbarListItemVariant, (typeof styles)[keyof typeof styles]>
