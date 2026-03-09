import { css } from 'react-strict-dom';
import { tokens } from '../../theme/tokens.css';

export const styles = css.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
    borderRadius: 8,
    backgroundColor: '#212814',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    gap: 8,
    flex: 1,
  },
  iconContainer: {
    display: 'flex',
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  copy: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 6,
    flex: 1,
  },
  title: {
    fontFamily: tokens.fontPrimary,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: '16px',
    color: '#FFFFFF',
  },
  description: {
    fontFamily: tokens.fontPrimary,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: '16px',
    color: '#BDC3AC',
  },
  link: {
    fontFamily: tokens.fontPrimary,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: '15px',
    textDecorationLine: 'underline',
    color: '#B0D944',
    cursor: 'pointer',
  },
  sizeBig: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  sizeMedium: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeSmall: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  variantSuccess: {
    // Relying on default container background #212814
  },
  variantError: {
    backgroundColor: '#351C1D', // A guessed dark error background since not provided by Figma
  },
});

export const variantStyleMap = {
  success: styles.variantSuccess,
  error: styles.variantError,
};

export const sizeStyleMap = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  big: styles.sizeBig,
};
