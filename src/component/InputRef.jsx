import { forwardRef } from 'react';
import clsx from 'clsx';

const InputRef = forwardRef(function InputRef({ className, ...props }, ref) {
    return (
        <input {...props} ref={ref} className={clsx('w-full cursor-pointer appearance-none border-2 outline-none', className)} />
    );
});

export default InputRef;
