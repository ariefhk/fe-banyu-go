'use client';

import clsx from 'clsx';
import { forwardRef, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const InputPasswordRef = forwardRef(function InputPasswordRef({ className, ...props }, ref) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword((prevState) => !prevState);
    return (
        <div className='relative w-full'>
            <input
                {...props}
                type={showPassword ? 'text' : 'password'}
                ref={ref}
                className={clsx('w-full cursor-pointer appearance-none border-2 outline-none', className)}
            />
            {showPassword ? (
                <FiEye
                    onClick={togglePassword}
                    className={clsx(
                        'absolute right-[4px] top-[50%] mr-[12px] h-[20px] w-[20px] translate-y-[-50%] cursor-pointer',
                    )}
                />
            ) : (
                <FiEyeOff
                    onClick={togglePassword}
                    className={clsx(
                        'absolute right-[4px] top-[50%] mr-[12px] h-[20px] w-[20px] translate-y-[-50%] cursor-pointer',
                    )}
                />
            )}
        </div>
    );
});

export default InputPasswordRef;
