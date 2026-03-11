import React from 'react';
import { html } from 'react-strict-dom';
import { styles } from './Breadcrumb.styles';
import { BreadcrumbProps } from './types';
import { KeyboardArrowRightFilled } from '../../icons';
import { useTheme } from '../../theme';

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(function Breadcrumb(
    { items, actions },
    ref
) {
    const { theme } = useTheme();

    return (
        <html.nav ref={ref} aria-label="Breadcrumb" style={styles.container}>
            <html.ol style={styles.items}>
                {items.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            {index > 0 && (
                                <html.li aria-hidden={true} style={styles.separator}>
                                    <KeyboardArrowRightFilled width={18} height={18} color={theme.colors.colorTextPrimary} />
                                </html.li>
                            )}
                            <html.li style={styles.item}>
                                {item}
                            </html.li>
                        </React.Fragment>
                    );
                })}
            </html.ol>

            {actions && <html.div style={styles.actions}>{actions}</html.div>}
        </html.nav>
    );
});

Breadcrumb.displayName = 'Breadcrumb';
