import { css } from 'react-strict-dom'
import { tokens } from '../../theme/tokens.css'

export const styles = css.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBlock: tokens.spacing8,
    paddingInline: tokens.spacing12,
    gap: tokens.spacing8,
    borderRadius: tokens.radius8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: tokens.colorBorderPrimary,
    backgroundColor: tokens.backgroundSnackbar,
    maxWidth: 300,
    boxSizing: 'border-box'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  iconSize: (size: number) => ({
    width: size,
    height: size
  }),
  text: {
    fontFamily: tokens.fontPrimary,
    fontSize: tokens.fontSize14,
    fontWeight: tokens.weightMedium,
    color: tokens.colorOnPrimary,
    minWidth: 0,
    numberOfLines: 3,
    overflow: 'hidden'
  }
})
