import clsx from 'clsx';
import React from 'react';

export default function Label({ className, children, ...props }) {
    return (
        <label  {...props} className={clsx('', className)}>
            {children}
        </label>
    );
}
