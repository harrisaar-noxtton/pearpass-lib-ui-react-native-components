import { css } from 'react-strict-dom';
import { tokens } from '../../theme/tokens.css';

export const styles = css.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box',
    },
    items: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: tokens.spacing4,
        minWidth: 0,
    },
    item: {
        margin: 0,
        color: tokens.colorTextPrimary,
        fontFamily: tokens.fontPrimary,
        fontSize: tokens.fontSize16,
        fontWeight: tokens.weightRegular,
        lineHeight: 'normal',
        whiteSpace: 'nowrap',
    },
    separator: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: tokens.colorTextPrimary,
        lineHeight: 0,
        flexShrink: 0,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: tokens.spacing8,
        flexShrink: 0,
        color: tokens.colorTextPrimary,
    },
});
