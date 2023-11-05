import BottomNavbar from '@/component/BottomNavbar';
import Navbar from '@/component/Navbar';
import Input from '@/component/Input';
import InputRef from '@/component/InputRef';
import InputPassword from '@/component/InputPassword';
import Label from '@/component/Label';

export default function Page() {
    return (
        <>
            <Navbar />
            <h1 className='mt-[100px]'>Test</h1>
            <Input className={'text-green-400'} />
            <Label className={'text-green-500'}>Testt Label</Label>
            <InputPassword className={'text-red-600'} />
            <BottomNavbar />
        </>
    );
}
