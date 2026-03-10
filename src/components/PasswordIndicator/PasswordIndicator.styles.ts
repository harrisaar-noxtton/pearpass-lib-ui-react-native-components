import { css } from 'react-strict-dom';
import { tokens } from '../../theme/tokens.css';

export const styles = css.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing8,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: tokens.spacing16,
    height: tokens.spacing16,
    flexShrink: 0,
  },
  label: {
    fontFamily: tokens.fontPrimary,
    fontWeight: tokens.weightMedium,
    fontSize: tokens.fontSize12,
    lineHeight: tokens.spacing16,
  },
  // Variant colour overrides
  variantVulnerable: {
    color: tokens.colorSurfaceDestructiveElevated,
  },
  variantDecent: {
    color: tokens.colorSurfaceWarning,
  },
  variantStrong: {
    color: tokens.colorPrimary,
  },
  variantMatch: {
    color: tokens.colorPrimary,
  },
});

export const variantStyleMap = {
  vulnerable: styles.variantVulnerable,
  decent: styles.variantDecent,
  strong: styles.variantStrong,
  match: styles.variantMatch,
} as const;

export const variantLabelMap: Record<string, string> = {
  vulnerable: 'Vulnerable',
  decent: 'Decent',
  strong: 'Strong',
  match: 'Match',
};
