import clsx from 'clsx';

export default function Input({ className, ...props }) {
    return <input {...props} className={clsx('w-full cursor-pointer appearance-none border-2 outline-none', className)} />;
}
