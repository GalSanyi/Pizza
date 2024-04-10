'use client';
import Link from 'next/link'
import { useSession } from "next-auth/react"
const Header = () => {
    const session = useSession();
    const status = session.status;
    return (
        <header className='flex justify-between items-center'>
            <Link className='text-primary font-semibold text-2xl ' href='/'>LuminaCraft</Link>
            <nav className='flex gap-8 text-gray-500'>
                <Link href='/menu'>Home</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/menu'>About</Link>
                <Link href='/menu'>Contact</Link>
            </nav>
            <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
                {status === 'authenticated' && (
                    <Link href='/register' className='bg-primary text-white px-3 py-2 rounded-full'>Logout</Link>
                )}
                {status !== 'authenticated' && (
                    <>
                        <Link href='/login'>Login</Link>
                        <Link href='/register' className='bg-primary text-white px-3 py-2 rounded-full'>Register</Link>
                    </>
                )}

            </nav>
        </header>

    )
}

export default Header