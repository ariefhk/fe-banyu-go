'use client';

import clsx from 'clsx';
import { useState } from 'react';

import BottomNavbar from '@/component/BottomNavbar';
import Navbar from '@/component/Navbar';
import FormDestination from '@/ui/home/FormDestination';

export default function Page() {
    const [isSearchMode, setIsSearcMode] = useState(false);

    console.log(isSearchMode);

    return (
        <>
            <div
                onClick={() => setIsSearcMode(false)}
                className={clsx({
                    'fixed z-[5] h-screen w-screen scale-150 bg-black opacity-40': isSearchMode,
                })}></div>
            <Navbar
                className={clsx({
                    'z-0': isSearchMode,
                })}
            />
            <FormDestination
                handleSearchMode={() => setIsSearcMode(true)}
                className={clsx({
                    'relative z-20': isSearchMode,
                })}
            />
            <BottomNavbar />
        </>
    );
}
