import React from 'react';
import { html } from 'react-strict-dom';
import { styles, variantStyleMap, variantLabelMap } from './PasswordIndicator.styles';
import { tokens } from '../../theme/tokens.css';
import { PasswordIndicatorProps } from './types';
import SvgGppBad from '../../icons/components/GppBad';
import SvgGppMaybe from '../../icons/components/GppMaybe';
import SvgDoneAll from '../../icons/components/DoneAll';
import SvgVerifiedUser from '../../icons/components/VerifiedUser';

const variantIconMap = {
  vulnerable: (color: string) => <SvgGppBad color={color} />,
  decent: (color: string) => <SvgGppMaybe color={color} />,
  strong: (color: string) => <SvgDoneAll color={color} />,
  match: (color: string) => <SvgVerifiedUser color={color} />,
} as const;

const variantColorMap: Record<string, string> = {
  vulnerable: tokens.colorSurfaceDestructiveElevated as unknown as string,
  decent: tokens.colorSurfaceWarning as unknown as string,
  strong: tokens.colorPrimary as unknown as string,
  match: tokens.colorPrimary as unknown as string,
};

export const PasswordIndicator = ({ variant, testID }: PasswordIndicatorProps): React.ReactElement => {
  const color = variantColorMap[variant];
  const icon = variantIconMap[variant](color);
  const label = variantLabelMap[variant];

  return (
    <html.div data-testid={testID} style={styles.container}>
      <html.div style={styles.iconContainer} aria-hidden={true}>
        {icon}
      </html.div>
      <html.span style={[styles.label, variantStyleMap[variant]]}>
        {label}
      </html.span>
    </html.div>
  );
};

PasswordIndicator.displayName = 'PasswordIndicator';
