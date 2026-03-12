import React from 'react';
import { html } from 'react-strict-dom';
import { styles } from './Snackbar.styles';
import { ICON_SIZE } from './Snackbar.config';
import { SnackbarProps } from './types';
import { Text } from '../Text';
import { withIconSize } from '../../utils';

export const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  ({ icon, iconSize = ICON_SIZE, text, testID, ...rest }, ref) => {
    return (
      <html.div {...rest} ref={ref} data-testid={testID} role="status" style={styles.root}>
        {icon && (
          <html.span
            style={[styles.iconContainer, styles.iconSize(iconSize)]}
            aria-hidden={true}
          >
            {withIconSize(icon, iconSize)}
          </html.span>
        )}
        <Text as="p" style={styles.text}>{text}</Text>
      </html.div>
    );
  }
);

Snackbar.displayName = 'Snackbar';
