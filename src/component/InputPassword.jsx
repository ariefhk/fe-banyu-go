'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function InputPassword({ className, ...props }) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword((prevState) => !prevState);
    return (
        <div className='relative w-full'>
            <input
                {...props}
                type={showPassword ? 'text' : 'password'}
                className={clsx('w-full cursor-pointer appearance-none border-2 outline-none', className)}
            />
            {showPassword ? (
                <FiEye
                    onClick={togglePassword}
                    className={clsx('absolute right-1 top-[50%] mr-3 h-5 w-5 translate-y-[-50%] cursor-pointer')}
                />
            ) : (
                <FiEyeOff
                    onClick={togglePassword}
                    className={clsx('absolute right-1 top-[50%] mr-3 h-5 w-5 translate-y-[-50%] cursor-pointer')}
                />
            )}
        </div>
    );
}
