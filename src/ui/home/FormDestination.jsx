'use client';

import { useState } from 'react';

import Input from '@/component/Input';
import Label from '@/component/Label';
import clsx from 'clsx';

const wisata = [
    {
        id: 1,
        name: 'Baturaden',
    },
    {
        id: 2,
        name: 'Tirta Kencana',
    },
    {
        id: 3,
        name: 'Pantai Gading',
    },
];
const hari = [
    {
        id: 1,
        name: 'Senin, 06 November 2022',
    },
    {
        id: 2,
        name: 'Selasa, 07 November 2022',
    },
    {
        id: 3,
        name: 'Rabu, 08 November 2022',
    },
    {
        id: 4,
        name: 'Kamis, 09 November 2022',
    },
    {
        id: 5,
        name: 'Jumat, 10 November 2022',
    },
    {
        id: 6,
        name: 'Sabtu, 11 November 2022',
    },
    {
        id: 7,
        name: 'Minggu, 12 November 2022',
    },
];
const jam = [
    {
        id: 1,
        name: '08:00 WIB',
    },
    {
        id: 2,
        name: '09:00 WIB',
    },
    {
        id: 3,
        name: '10:00 WIB',
    },
    {
        id: 4,
        name: '12:00 WIB',
    },
    {
        id: 5,
        name: '14:00 WIB',
    },
];

export default function FormDestination({ className, handleSearchMode }) {
    const [isSearchWisata, setIsSearchWisata] = useState(false);
    const [isSearchTanggal, setIsSearchTanggal] = useState(false);
    const [isSearchJam, setIsSearchJam] = useState(false);
    const [pickedWisata, setPickedWisata] = useState('');
    const [pickedTanggal, setPickedTanggal] = useState('');
    const [pickedJam, setPickedJam] = useState('');

    return (
        <form
            onClick={() => {
                handleSearchMode();
            }}
            className={clsx(' mx-[24px] mt-[80px] rounded-xl  bg-white px-[12px] py-[12px] shadow-low', className)}>
            <h1 className='text-center  text-[32px] font-semibold'>Buat jadwal mu</h1>
            <div className='mt-[12px] flex flex-col gap-[14px]'>
                <section className='relative'>
                    <div className='flex flex-col gap-[6px]'>
                        <Label htmlFor='wisata'>Destinasi Wisata</Label>
                        <Input
                            onFocus={() => {
                                setIsSearchWisata(true);
                                setIsSearchJam(false);
                                setIsSearchTanggal(false);
                            }}
                            id='wisata'
                            name='wisata'
                            readOnly
                            value={pickedWisata}
                            placeholder='Pilih wisata Anda'
                            className={'h-[46px] pl-[12px] text-black placeholder:text-black'}
                        />
                    </div>
                    {isSearchWisata && (
                        <div className='absolute z-10 flex max-h-[200px] w-full flex-col overflow-y-scroll bg-blue-600'>
                            {wisata &&
                                wisata.map((data) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                setPickedWisata(data.name);
                                                setIsSearchWisata(false);
                                            }}
                                            key={data.id}
                                            className=' flex cursor-pointer flex-col justify-center border-x border-b py-[12px] pl-[12px] text-white'>
                                            <h1>{data.name}</h1>
                                        </div>
                                    );
                                })}
                        </div>
                    )}
                </section>
                <section className='relative'>
                    <div className='flex flex-col gap-[6px]'>
                        <Label htmlFor='hari'>Hari Kunjungan</Label>
                        <Input
                            onFocus={() => {
                                setIsSearchTanggal(true);
                                setIsSearchJam(false);
                                setIsSearchWisata(false);
                            }}
                            id='hari'
                            name='hari'
                            readOnly
                            value={pickedTanggal}
                            placeholder='Pilih hari Anda'
                            className={'h-[46px] pl-[12px] text-black placeholder:text-black'}
                        />
                    </div>
                    {isSearchTanggal && (
                        <div className='absolute z-10 flex max-h-[200px] w-full flex-col overflow-y-scroll bg-blue-600'>
                            {hari &&
                                hari.map((data) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                setPickedTanggal(data.name);
                                                setIsSearchTanggal(false);
                                            }}
                                            key={data.id}
                                            className='flex cursor-pointer flex-col justify-center border-x border-b py-[12px] pl-[12px] text-white '>
                                            <h1>{data.name}</h1>
                                        </div>
                                    );
                                })}
                        </div>
                    )}
                </section>
                <section className='relative'>
                    <div className='flex flex-col gap-[6px]'>
                        <Label htmlFor='jam'>Jam Kunjungan</Label>
                        <Input
                            onFocus={() => {
                                setIsSearchJam(true);
                                setIsSearchTanggal(false);
                                setIsSearchWisata(false);
                            }}
                            id='jam'
                            name='jam'
                            readOnly
                            value={pickedJam}
                            placeholder='Pilih jam Anda'
                            className={'h-[46px] pl-[12px] text-black placeholder:text-black'}
                        />
                    </div>
                    {isSearchJam && (
                        <div className='absolute z-10 flex max-h-[150px] w-full flex-col overflow-y-scroll bg-blue-600'>
                            {jam &&
                                jam.map((data) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                setPickedJam(data.name);
                                                setIsSearchJam(false);
                                            }}
                                            key={data.id}
                                            className='flex cursor-pointer flex-col justify-center border-x border-b py-[12px] pl-[12px] text-white '>
                                            <h1>{data.name}</h1>
                                        </div>
                                    );
                                })}
                        </div>
                    )}
                </section>
                <div className='flex w-full justify-center '>
                    <button type='submit' className='rounded-md bg-blue-500 px-[12px] py-[6px] text-white'>
                        Pesan Tiket
                    </button>
                </div>
            </div>
        </form>
    );
}
