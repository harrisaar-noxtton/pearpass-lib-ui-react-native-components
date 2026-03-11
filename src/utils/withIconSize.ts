import React from 'react';

type SizableIconProps = {
    width?: number;
    height?: number;
};

export const withIconSize = (icon: React.ReactNode, size: number) =>
    React.isValidElement<SizableIconProps>(icon)
        ? React.cloneElement(icon, { width: size, height: size })
        : icon;
