import { css } from 'react-strict-dom';

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
});
