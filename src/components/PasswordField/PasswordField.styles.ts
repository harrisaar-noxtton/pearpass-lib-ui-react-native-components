import { css } from 'react-strict-dom';
import { tokens } from '../../theme/tokens.css';

export const styles = css.create({
  rightSlotContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  divider: {
    width: 1,
    height: 12,
    backgroundColor: 'var(--borders-dividers-border-secondary, #2C3618)',
  },
  eyeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    cursor: 'pointer',
    color: tokens.colorTextSecondary,
    ':hover': {
      color: tokens.colorPrimary,
    },
  },
});
